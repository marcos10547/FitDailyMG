import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCompletedDays } from '@/hooks/use-completed-days';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { TodaySession } from '@/components/today-session';
import { generateMonthPlan, getTodaysPlan } from '@/lib/scheduling';

export default function HoyPage() {
  const navigate = useNavigate();
  const { completedDays, addCompletedDay } = useCompletedDays();
  const now = new Date();
  
  const todaysPlan = useMemo(() => {
    const monthPlan = generateMonthPlan(now.getFullYear(), now.getMonth());
    const plan = getTodaysPlan(monthPlan);
    if (plan) {
      plan.completed = completedDays.has(plan.date.toISOString().split('T')[0]);
    }
    return plan;
  }, [now, completedDays]);

  const handleCompleteSession = (dayPlan: any) => {
    const dateStr = dayPlan.date.toISOString().split('T')[0];
    addCompletedDay(dateStr);
    navigate('/seguimiento');
  };

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
          <h1 className="text-4xl font-bold mb-2">Tu sesión de hoy</h1>
        </div>

        {todaysPlan ? (
          <TodaySession dayPlan={todaysPlan} onComplete={handleCompleteSession} />
        ) : (
          <p>No hay planificación para hoy.</p>
        )}
      </div>
    </main>
  );
}
