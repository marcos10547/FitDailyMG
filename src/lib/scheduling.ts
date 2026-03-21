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

const HEALTHY_BACK_SESSION: Session = {
  id: 'healthy-back-session',
  type: 'healthy-back',
  title: 'Espalda Sana',
  duration: 30,
  objective: 'Mejorar la salud y movilidad de la espalda',
  description: 'Se realizará la sesión que toca en su progresión.',
};

const BALANCE_SESSION: Session = {
  id: 'balance-session',
  type: 'balance',
  title: 'Equilibrio',
  duration: 30,
  objective: 'Fortalecer equilibrio monopodial y estabilidad de core',
  description: 'Se realizará la sesión que toca en su progresión.',
};

// Generador inteligente de mesociclo progresivo basado en semana del mes (1-4)
function getSessionForDay(weekNumber: number, dayOfWeekIndex: number): Session | null {
  // dayOfWeekIndex: 0 = Lunes, 1 = Martes, ..., 6 = Domingo
  
  // Semana 1: 3 Días de entrenamiento (Carga baja)
  // Lunes: Gym, Miércoles: Espalda, Viernes: Equilibrio
  if (weekNumber === 1) {
    if (dayOfWeekIndex === 0) return GYM_SESSION;
    if (dayOfWeekIndex === 2) return HEALTHY_BACK_SESSION;
    if (dayOfWeekIndex === 4) return BALANCE_SESSION;
  }
  
  // Semana 2: 4 Días de entrenamiento (Carga media)
  // Lunes: Gym, Martes: Espalda, Jueves: Gym, Sábado: Equilibrio
  else if (weekNumber === 2) {
    if (dayOfWeekIndex === 0) return GYM_SESSION;
    if (dayOfWeekIndex === 1) return HEALTHY_BACK_SESSION;
    if (dayOfWeekIndex === 3) return GYM_SESSION;
    if (dayOfWeekIndex === 5) return BALANCE_SESSION;
  }
  
  // Semana 3: 5 Días de entrenamiento (Carga alta)
  // Lunes: Gym, Martes: Espalda, Miércoles: Equilibrio, Viernes: Gym, Sábado: Espalda
  else if (weekNumber === 3) {
    if (dayOfWeekIndex === 0) return GYM_SESSION;
    if (dayOfWeekIndex === 1) return HEALTHY_BACK_SESSION;
    if (dayOfWeekIndex === 2) return BALANCE_SESSION;
    if (dayOfWeekIndex === 4) return GYM_SESSION;
    if (dayOfWeekIndex === 5) return HEALTHY_BACK_SESSION;
  }
  
  // Semana 4 y superiores: 6 Días de entrenamiento (Semana de choque / pico)
  // Lunes: Gym, Martes: Espalda, Miércoles: Equilibrio, Jueves: Gym, Viernes: Espalda, Sábado: Equilibrio
  else {
    if (dayOfWeekIndex === 0) return GYM_SESSION;
    if (dayOfWeekIndex === 1) return HEALTHY_BACK_SESSION;
    if (dayOfWeekIndex === 2) return BALANCE_SESSION;
    if (dayOfWeekIndex === 3) return GYM_SESSION;
    if (dayOfWeekIndex === 4) return HEALTHY_BACK_SESSION;
    if (dayOfWeekIndex === 5) return BALANCE_SESSION;
  }

  // Si no coincide o es domingo (6), es descanso
  return null;
}

/**
 * Genera un plan semanal dinámico basado en las progresiones del mesociclo
 */
export function generateWeekPlan(weekNumber: number, startDate: Date): WeekPlan {
  const days: DayPlan[] = [];
  
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    
    // getDay() 0 = DOM, 1 = LUN. Ajustamos para LUN = 0
    const dayOfWeek = currentDate.getDay();
    const adjustedIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    
    // Normalizamos weekNumber por si excede 4 seguir el patrón máximo (ciclo continuo)
    const effectiveWeekNumber = weekNumber > 4 ? 4 : weekNumber;
    const session = getSessionForDay(effectiveWeekNumber, adjustedIndex);
    
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
