import { useState } from 'react';
import { Link } from 'react-router-dom';
import { generateMonthPlan } from '@/lib/scheduling';
import { MonthlyPlanner } from '@/components/monthly-planner';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function MonthPage() {
  const now = new Date();
  const [monthOffset, setMonthOffset] = useState(0);
  
  const targetDate = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
  const monthPlan = generateMonthPlan(targetDate.getFullYear(), targetDate.getMonth());

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>

        <MonthlyPlanner 
          monthPlan={monthPlan}
          completedDays={new Set()}
          onMonthChange={setMonthOffset}
        />
      </div>
    </main>
  );
}
