// Tipos para FitDailyMG

export type SessionType = 'mobility' | 'balance' | 'functional-strength' | 'healthy-back' | 'gym' | 'recovery';

export interface Session {
  id: string;
  type: SessionType;
  title: string;
  duration: number; // en minutos
  objective: string;
  description?: string;
  videoId?: string;
  category?: string;
}

export interface DayPlan {
  date: Date;
  dayOfWeek: number; // 0-6
  session: Session | null;
  completed: boolean;
}

export interface WeekPlan {
  weekNumber: number;
  startDate: Date;
  endDate: Date;
  days: DayPlan[];
}

export interface MonthPlan {
  year: number;
  month: number;
  weeks: WeekPlan[];
}

export interface VideoMetadata {
  id: string;
  title: string;
  duration: number; // en minutos
  category: SessionType;
  level: 'principiante' | 'intermedio' | 'avanzado';
  objective: string;
  description: string;
  thumbnail?: string;
  videoUrl: string;
  benefits: string[];
  musclesInvolved: string[];
}

export interface UserProgress {
  date: string; // ISO format
  sessionsCompleted: number;
  sessionsTarget: number;
  gymSessionsCompleted: number;
  homeSessionsCompleted: number;
  totalMinutes: number;
}

export interface MonthProgress {
  year: number;
  month: number;
  completedDays: string[]; // ISO format dates
  totalCompleted: number;
  totalTarget: number;
  completionPercentage: number;
  streakDays: number;
}
