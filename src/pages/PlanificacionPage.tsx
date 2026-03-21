import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { WeeklyScheduleAuto } from '@/components/weekly-schedule-auto';
import { generateMonthPlan, getCurrentWeek } from '@/lib/scheduling';
import { useCompletedDays } from '@/hooks/use-completed-days';
import { useMemo } from 'react';

export default function PlanificacionPage() {
  const now = new Date();
  const { completedDays } = useCompletedDays();
  
  const currentWeek = useMemo(() => {
    const monthPlan = generateMonthPlan(now.getFullYear(), now.getMonth());
    const week = getCurrentWeek(monthPlan);
    if (week) {
      week.days.forEach(d => {
        d.completed = completedDays.has(d.date.toISOString().split('T')[0]);
      });
    }
    return week;
  }, [now, completedDays]);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Planificación semanal</h1>
          <p className="text-lg text-muted-foreground">
            Consulta tu plan de entrenamiento para esta semana
          </p>
        </div>

        {currentWeek ? (
          <WeeklyScheduleAuto weekPlan={currentWeek} />
        ) : (
          <p>No se pudo generar la planificación semanal.</p>
        )}
      </div>
    </main>
  );
}
