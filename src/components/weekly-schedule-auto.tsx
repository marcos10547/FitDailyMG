import { WeekPlan } from '@/lib/types';
import { getDayNameSpanish } from '@/lib/scheduling';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dumbbell, Wind, Activity, Heart, Zap } from 'lucide-react';

interface WeeklyScheduleAutoProps {
  weekPlan: WeekPlan;
}

function getSessionIcon(type: string | undefined) {
  switch (type) {
    case 'gym':
      return <Dumbbell className="w-4 h-4" />;
    case 'stretching':
      return <Wind className="w-4 h-4" />;
    case 'mobility':
      return <Activity className="w-4 h-4" />;
    case 'balance':
      return <Zap className="w-4 h-4" />;
    case 'recovery':
      return <Heart className="w-4 h-4" />;
    default:
      return null;
  }
}

function getSessionColor(type: string | undefined): string {
  switch (type) {
    case 'gym':
      return 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800';
    case 'stretching':
      return 'bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800';
    case 'mobility':
      return 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800';
    case 'balance':
      return 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800';
    case 'recovery':
      return 'bg-rose-50 dark:bg-rose-950 border-rose-200 dark:border-rose-800';
    default:
      return 'bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800';
  }
}

function getSessionBadgeVariant(type: string | undefined): 'default' | 'secondary' | 'outline' | 'destructive' {
  switch (type) {
    case 'gym':
      return 'default';
    case 'stretching':
      return 'secondary';
    case 'mobility':
      return 'outline';
    case 'balance':
      return 'secondary';
    case 'recovery':
      return 'destructive';
    default:
      return 'outline';
  }
}

export function WeeklyScheduleAuto({ weekPlan }: WeeklyScheduleAutoProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle className="text-xl">Tu plan semanal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
          {weekPlan.days.map((day, index) => {
            const dayDate = new Date(day.date);
            dayDate.setHours(0, 0, 0, 0);
            const isToday = dayDate.getTime() === today.getTime();

            return (
              <div
                key={index}
                className={`p-3 rounded-lg border-2 transition-all ${
                  isToday ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                } ${getSessionColor(day.session?.type)}`}
              >
                <div className="text-xs font-semibold text-muted-foreground mb-2">
                  {getDayNameSpanish(day.dayOfWeek).slice(0, 3)}
                </div>
                <div className="text-sm font-bold mb-2">{day.date.getDate()}</div>
                
                {day.session ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-primary">{getSessionIcon(day.session.type)}</span>
                      <span className="text-xs font-medium line-clamp-2">{day.session.title}</span>
                    </div>
                    <Badge variant={getSessionBadgeVariant(day.session.type)} className="text-xs w-full justify-center">
                      {day.session.duration} min
                    </Badge>
                    {day.completed && (
                      <div className="text-xs font-bold text-green-600 dark:text-green-400 text-center">
                        ✓ Hecho
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs text-muted-foreground font-medium text-center py-4">
                    Descanso
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
