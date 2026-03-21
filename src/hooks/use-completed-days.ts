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
      } else {
        // Documento inicial si no existe
        setDoc(docRef, { completedDays: [], lastUpdated: new Date().toISOString() }, { merge: true });
      }
    }, (error) => {
      console.warn("⚠️ Error Firestore (modo offline o credenciales):", error.message);
    });

    // Mantener la sincronización entre pestañas locales por si acaso
    const handleStorageChange = () => {
      const saved = localStorage.getItem('fitdaily_completed_days');
      if (saved) setCompletedDaysState(new Set(JSON.parse(saved)));
    };

    window.addEventListener('fitdaily_update', handleStorageChange);
    return () => {
      unsubscribe();
      window.removeEventListener('fitdaily_update', handleStorageChange);
    };
  }, []);

  const addCompletedDay = async (dateStr: string) => {
    // 1. Actualización optimista (UI rápida)
    const newSet = new Set(completedDays);
    newSet.add(dateStr);
    setCompletedDaysState(newSet);
    
    // 2. Respaldo LocalStorage
    localStorage.setItem('fitdaily_completed_days', JSON.stringify(Array.from(newSet)));
    window.dispatchEvent(new Event('fitdaily_update'));

    // 3. Sincronización en la nube (Firestore)
    try {
      const docRef = doc(db, 'users', USER_DOC_ID);
      await setDoc(docRef, {
        completedDays: Array.from(newSet),
        lastUpdated: new Date().toISOString()
      }, { merge: true });
    } catch (error) {
      console.error("No se pudo guardar en la nube. Se mantiene en local.", error);
    }
  };

  return { completedDays, addCompletedDay };
}
