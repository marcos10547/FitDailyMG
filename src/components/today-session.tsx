import { useState } from 'react';
import { DayPlan, Session } from '@/lib/types';
import { formatDateSpanish, getDayNameSpanish } from '@/lib/scheduling';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dumbbell, Zap } from 'lucide-react';

interface TodaySessionProps {
  dayPlan: DayPlan | null;
  onComplete?: (dayPlan: DayPlan, score: number) => void;
}

export function TodaySession({ dayPlan, onComplete }: TodaySessionProps) {
  const [score, setScore] = useState<number>(8);

  if (!dayPlan || !dayPlan.session) {
    return (
      <Card className="border-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
        <CardHeader>
          <CardTitle className="text-2xl">Tu sesión de hoy</CardTitle>
          <CardDescription>
            {formatDateSpanish(dayPlan?.date || new Date())}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-8">
            Hoy es un día de descanso. ¡Relájate y recuperate!
          </p>
        </CardContent>
      </Card>
    );
  }

  const session = dayPlan.session;
  const isGymSession = session.type === 'gym';

  return (
    <Card className="border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl flex items-center gap-3">
              <img src="/logo-circle.jpg" alt="" className="w-8 h-8 rounded-full shadow-sm" />
              Tu sesión de hoy
            </CardTitle>
            <CardDescription className="mt-2">
              {getDayNameSpanish(dayPlan.dayOfWeek)}, {dayPlan.date.getDate()} de {dayPlan.date.toLocaleDateString('es-ES', { month: 'long' })}
            </CardDescription>
          </div>
          {dayPlan.completed && (
            <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm font-medium">
              Completada
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {isGymSession ? (
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <Dumbbell className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{session.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sesión planificada por MyVitale
                  </p>
                  <p className="text-sm mt-3 font-medium">
                    ⏱️ {session.duration} minutos
                  </p>
                  <p className="text-sm mt-2">
                    {session.description}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Dirígete a la aplicación MyVitale para ver los detalles completos de tu sesión.
            </p>
            
            {!dayPlan.completed && (
              <div className="space-y-3 py-2">
                <label className="text-sm font-medium">¿Cómo sentiste la sesión? Puntúa del 1 al 10:</label>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <button 
                      key={n}
                      className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${score === n ? 'bg-primary text-primary-foreground scale-110 shadow-md' : 'bg-muted hover:bg-muted/80'}`}
                      onClick={() => setScore(n)}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button 
              onClick={() => onComplete?.(dayPlan, score)}
              disabled={dayPlan.completed}
              className="w-full bg-blue-600 hover:bg-blue-700 mt-2"
              size="lg"
            >
              {dayPlan.completed ? '✓ Sesión completada' : 'Marcar como completada'}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-lg mb-2">{session.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {session.description}
              </p>
              <div className="flex items-center flex-wrap gap-4 text-sm font-medium mb-4">
                <span className="bg-muted px-2 py-1 rounded-md">⏱️ {(session.type === 'healthy-back' || session.type === 'balance') ? '20 - 40' : session.duration} minutos</span>
                <span className="bg-muted px-2 py-1 rounded-md">🎯 {session.objective}</span>
              </div>
              <p className="text-sm mb-4">
                Esta sesión te ayudará a mejorar tu movilidad, flexibilidad y estabilidad. Preparada para hacer en casa.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <Button 
                onClick={() => window.location.href = "/biblioteca"}
                variant="outline"
                className="w-full"
                size="lg"
              >
                Abrir en Biblioteca
              </Button>

              {!dayPlan.completed && (
                <div className="space-y-3 py-2 border-t mt-2 pt-4">
                  <label className="text-sm font-medium">¿Cómo sentiste la sesión? Puntúa del 1 al 10:</label>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <button 
                        key={n}
                        className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${score === n ? 'bg-primary text-primary-foreground scale-110 shadow-md' : 'bg-muted hover:bg-muted/80'}`}
                        onClick={() => setScore(n)}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <Button 
                onClick={() => onComplete?.(dayPlan, score)}
                disabled={dayPlan.completed}
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
              >
                {dayPlan.completed ? '✓ Sesión completada' : 'Marcar completada'}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
