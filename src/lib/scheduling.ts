import { Session, SessionType, DayPlan, WeekPlan, MonthPlan } from './types';

// Sesiones predefinidas
const GYM_SESSION: Session = {
  id: 'gym-session',
  type: 'gym',
  title: 'Sesión de Gimnasio',
  duration: 60,
  objective: 'Entrenamiento planificado por MyVitale',
  description: 'Sesión planificada por MyVitale',
};

const FUNCTIONAL_STRENGTH_SESSION: Session = {
  id: 'functional-strength-session',
  type: 'functional-strength',
  title: 'Fuerza Funcional',
  duration: 35,
  objective: 'Mejorar fuerza y capacidad funcional',
  description: 'Rutina de ejercicios funcionales',
};

const HEALTHY_BACK_SESSION: Session = {
  id: 'healthy-back-session',
  type: 'healthy-back',
  title: 'Espalda Sana',
  duration: 25,
  objective: 'Mejorar la salud y movilidad de la espalda',
  description: 'Ejercicios específicos para la espalda',
};

const MOBILITY_SESSION: Session = {
  id: 'mobility-session',
  type: 'mobility',
  title: 'Movilidad',
  duration: 40,
  objective: 'Aumentar rango de movimiento',
  description: 'Ejercicios de movilidad articular',
};

const BALANCE_SESSION: Session = {
  id: 'balance-session',
  type: 'balance',
  title: 'Equilibrio',
  duration: 30,
  objective: 'Fortalecer equilibrio y estabilidad',
  description: 'Ejercicios de equilibrio',
};

const RECOVERY_SESSION: Session = {
  id: 'recovery-session',
  type: 'recovery',
  title: 'Recuperación',
  duration: 15,
  objective: 'Descanso activo y recuperación',
  description: 'Día de recuperación activa',
};

// Patrón de distribución semanal: gym, back, gym, mobility, functional, balance, rest
const WEEKLY_PATTERN = [
  GYM_SESSION,                 // Lunes
  HEALTHY_BACK_SESSION,        // Martes
  GYM_SESSION,                 // Miércoles
  MOBILITY_SESSION,            // Jueves
  FUNCTIONAL_STRENGTH_SESSION,   // Viernes
  BALANCE_SESSION,             // Sábado
  null,                        // Domingo
];

/**
 * Genera un plan semanal basado en el patrón determinista
 */
export function generateWeekPlan(weekNumber: number, startDate: Date): WeekPlan {
  const days: DayPlan[] = [];
  
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    
    // El patrón empieza en Lunes (índice 0 en WEEKLY_PATTERN)
    // getDay() devuelve 0 para Domingo, 1 para Lunes, etc.
    const dayOfWeek = currentDate.getDay();
    // Ajustar para que Lunes sea 0
    const adjustedIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const session = WEEKLY_PATTERN[adjustedIndex];
    
    days.push({
      date: currentDate,
      dayOfWeek: adjustedIndex,
      session,
      completed: false,
    });
  }
  
  return {
    weekNumber,
    startDate,
    endDate: new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000),
    days,
  };
}

/**
 * Genera un plan mensual completo
 */
export function generateMonthPlan(year: number, month: number): MonthPlan {
  const weeks: WeekPlan[] = [];
  const firstDay = new Date(year, month, 1);
  
  // Ajustar al lunes más cercano (inicio de semana)
  const dayOfWeek = firstDay.getDay();
  const startDate = new Date(firstDay);
  // Si es domingo (0), retroceder 6 días. Si es otro día (1-6), retroceder dayOfWeek-1 días.
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  startDate.setDate(firstDay.getDate() - diff);
  
  let currentDate = new Date(startDate);
  let weekNumber = 1;
  
  // Generar semanas hasta que pasemos el mes
  while (currentDate.getMonth() <= month || (month === 11 && currentDate.getMonth() === 0)) {
    const week = generateWeekPlan(weekNumber, new Date(currentDate));
    weeks.push(week);
    
    currentDate.setDate(currentDate.getDate() + 7);
    
    // Si estamos en el siguiente mes y la semana actual no contiene ningún día del mes actual, parar
    if (currentDate.getMonth() > month && (month < 11 || currentDate.getMonth() !== 0)) {
      if (!week.days.some(day => day.date.getMonth() === month)) {
        weeks.pop();
      }
      break;
    }
    
    weekNumber++;
  }
  
  return {
    year,
    month,
    weeks,
  };
}

/**
 * Obtiene el plan del día actual
 */
export function getTodaysPlan(monthPlan: MonthPlan): DayPlan | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  for (const week of monthPlan.weeks) {
    for (const day of week.days) {
      const dayDate = new Date(day.date);
      dayDate.setHours(0, 0, 0, 0);
      
      if (dayDate.getTime() === today.getTime()) {
        return day;
      }
    }
  }
  
  return null;
}

/**
 * Obtiene la semana actual
 */
export function getCurrentWeek(monthPlan: MonthPlan): WeekPlan | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  for (const week of monthPlan.weeks) {
    const weekStart = new Date(week.startDate);
    weekStart.setHours(0, 0, 0, 0);
    const weekEnd = new Date(week.endDate);
    weekEnd.setHours(23, 59, 59, 999);
    
    if (today >= weekStart && today <= weekEnd) {
      return week;
    }
  }
  
  return null;
}

/**
 * Formatea la fecha al formato español
 */
export function formatDateSpanish(date: Date): string {
  return date.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Obtiene el nombre del mes en español
 */
export function getMonthNameSpanish(month: number): string {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  return months[month];
}

/**
 * Obtiene el nombre del día de la semana en español
 */
export function getDayNameSpanish(dayOfWeek: number): string {
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  return days[dayOfWeek];
}
