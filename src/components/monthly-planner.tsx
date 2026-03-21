import { MonthPlan, DayPlan } from '@/lib/types';
import { getMonthNameSpanish, getDayNameSpanish } from '@/lib/scheduling';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MonthlyPlannerProps {
  monthPlan: MonthPlan;
  completedDays?: Set<string>;
  onMonthChange?: (offset: number) => void;
}

function getDayColor(session: any): string {
  if (!session) return 'bg-gray-50 dark:bg-gray-950';
  
  switch (session.type) {
    case 'gym':
      return 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800';
    case 'functional-strength':
      return 'bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800';
    case 'healthy-back':
      return 'bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800';
    case 'mobility':
      return 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800';
    case 'balance':
      return 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800';
    case 'recovery':
      return 'bg-rose-50 dark:bg-rose-950 border-rose-200 dark:border-rose-800';
    default:
      return 'bg-gray-50 dark:bg-gray-950';
  }
}

function getSessionAbbr(session: any): string {
  if (!session) return '—';
  
  switch (session.type) {
    case 'gym':
      return 'GYM';
    case 'functional-strength':
      return 'FUE';
    case 'healthy-back':
      return 'ESP';
    case 'mobility':
      return 'MOV';
    case 'balance':
      return 'EQU';
    case 'recovery':
      return 'REC';
    default:
      return '?';
  }
}

export function MonthlyPlanner({ monthPlan, completedDays = new Set(), onMonthChange }: MonthlyPlannerProps) {
  const monthName = getMonthNameSpanish(monthPlan.month);
  const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  return (
    <div className="space-y-6">
      <Card className="border-0">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">
                {monthName} {monthPlan.year}
              </CardTitle>
              <CardDescription>
                Tu plan de ejercicio para todo el mes
              </CardDescription>
            </div>
            {onMonthChange && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onMonthChange(-1)}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onMonthChange(1)}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {monthPlan.weeks.map((week, weekIdx) => {
              // Filtrar solo días del mes actual en esta semana
              const weekDaysInMonth = week.days.filter(
                day => day.date.getMonth() === monthPlan.month
              );

              if (weekDaysInMonth.length === 0) return null;

              return (
                <div key={weekIdx} className="space-y-2">
                  <h3 className="text-sm font-semibold text-muted-foreground">
                    Semana {week.weekNumber}
                  </h3>
                  <div className="grid grid-cols-7 gap-1 sm:gap-2">
                    {/* Encabezados de día */}
                    {weekDays.map((day, idx) => (
                      <div key={`header-${idx}`} className="text-[10px] sm:text-xs font-semibold text-center text-muted-foreground truncate">
                        {day}
                      </div>
                    ))}

                    {/* Días vacíos al inicio de la semana */}
                    {weekDaysInMonth[0] && (
                      <>
                        {Array(weekDaysInMonth[0].dayOfWeek).fill(null).map((_, idx) => (
                          <div key={`empty-${idx}`} />
                        ))}

                        {/* Días del mes */}
                        {weekDaysInMonth.map((day) => {
                          const dateStr = day.date.toISOString().split('T')[0];
                          const isCompleted = completedDays.has(dateStr);

                          return (
                            <div
                              key={dateStr}
                              className={`p-1 sm:p-2 rounded-md sm:rounded-lg border-2 text-center text-[10px] sm:text-xs space-y-0.5 sm:space-y-1 flex flex-col items-center justify-center min-h-[50px] sm:min-h-[70px] ${getDayColor(
                                day.session
                              )} ${isCompleted ? 'ring-2 ring-green-500' : ''}`}
                            >
                              <div className="font-bold">{day.date.getDate()}</div>
                              {day.session ? (
                                <>
                                  <div className="font-semibold truncate w-full">
                                    {getSessionAbbr(day.session)}
                                  </div>
                                </>
                              ) : (
                                <div className="text-[9px] sm:text-xs opacity-50 truncate">Descanso</div>
                              )}
                              {isCompleted && (
                                <div className="text-green-600 font-bold">✓</div>
                              )}
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Leyenda */}
          <div className="mt-8 pt-6 border-t">
            <h4 className="text-sm font-semibold mb-3">Leyenda</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-50 dark:bg-blue-950 rounded border border-blue-200" />
                <span>Gimnasio</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-emerald-50 dark:bg-emerald-950 rounded border border-emerald-200" />
                <span>Espalda Sana</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-amber-50 dark:bg-amber-950 rounded border border-amber-200" />
                <span>Equilibrio</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
