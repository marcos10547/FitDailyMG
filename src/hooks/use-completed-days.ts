import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';

// ID fijo para el único usuario de la aplicación
const USER_DOC_ID = 'sole_user';

export function useCompletedDays() {
  const [completedDays, setCompletedDaysState] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('fitdaily_completed_days');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [completedScores, setCompletedScores] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('fitdaily_completed_scores');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    const docRef = doc(db, 'users', USER_DOC_ID);
    
    // Suscribirse a cambios en Firestore en tiempo real
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.completedDays) {
          const freshSet = new Set<string>(data.completedDays);
          setCompletedDaysState(freshSet);
          localStorage.setItem('fitdaily_completed_days', JSON.stringify(Array.from(freshSet)));
        }
        if (data.completedScores) {
          setCompletedScores(data.completedScores);
          localStorage.setItem('fitdaily_completed_scores', JSON.stringify(data.completedScores));
        }
      } else {
        // Documento inicial si no existe
        setDoc(docRef, { completedDays: [], completedScores: {}, lastUpdated: new Date().toISOString() }, { merge: true });
      }
    }, (error) => {
      console.warn("⚠️ Error Firestore (modo offline o credenciales):", error.message);
    });

    // Mantener la sincronización entre pestañas locales por si acaso
    const handleStorageChange = () => {
      const savedDays = localStorage.getItem('fitdaily_completed_days');
      if (savedDays) setCompletedDaysState(new Set(JSON.parse(savedDays)));
      
      const savedScores = localStorage.getItem('fitdaily_completed_scores');
      if (savedScores) setCompletedScores(JSON.parse(savedScores));
    };

    window.addEventListener('fitdaily_update', handleStorageChange);
    return () => {
      unsubscribe();
      window.removeEventListener('fitdaily_update', handleStorageChange);
    };
  }, []);

  const addCompletedDay = async (dateStr: string, score: number = 10) => {
    // 1. Actualización optimista (UI rápida)
    const newSet = new Set(completedDays);
    newSet.add(dateStr);
    setCompletedDaysState(newSet);
    
    const newScores = { ...completedScores, [dateStr]: score };
    setCompletedScores(newScores);
    
    // 2. Respaldo LocalStorage
    localStorage.setItem('fitdaily_completed_days', JSON.stringify(Array.from(newSet)));
    localStorage.setItem('fitdaily_completed_scores', JSON.stringify(newScores));
    window.dispatchEvent(new Event('fitdaily_update'));

    // 3. Sincronización en la nube (Firestore)
    try {
      const docRef = doc(db, 'users', USER_DOC_ID);
      await setDoc(docRef, {
        completedDays: Array.from(newSet),
        completedScores: newScores,
        lastUpdated: new Date().toISOString()
      }, { merge: true });
    } catch (error) {
      console.error("No se pudo guardar en la nube. Se mantiene en local.", error);
    }
  };

  return { completedDays, completedScores, addCompletedDay };
}
