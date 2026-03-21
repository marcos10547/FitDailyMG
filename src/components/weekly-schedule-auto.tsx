import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WeekPlan, DayPlan } from '@/lib/types';
import { getDayNameSpanish } from '@/lib/scheduling';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dumbbell, Activity, Heart, Zap, Shield, Play } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface WeeklyScheduleAutoProps {
  weekPlan: WeekPlan;
}

function getSessionIcon(type: string | undefined) {
  switch (type) {
    case 'gym':
    case 'functional-strength':
      return <Dumbbell className="w-4 h-4" />;
    case 'healthy-back':
      return <Shield className="w-4 h-4" />;
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
      return 'bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800';
  }
}

function getSessionBadgeVariant(type: string | undefined): 'default' | 'secondary' | 'outline' | 'destructive' {
  switch (type) {
    case 'gym':
    case 'functional-strength':
      return 'default';
    case 'healthy-back':
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
  const [selectedDay, setSelectedDay] = useState<DayPlan | null>(null);
  const navigate = useNavigate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Card className="border-0">
      <CardHeader>
        <CardTitle className="text-xl">Tu plan semanal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory gap-3 md:grid md:grid-cols-7 md:gap-2 -mx-2 px-2 md:mx-0 md:px-0">
          {weekPlan.days.map((day, index) => {
            const dayDate = new Date(day.date);
            dayDate.setHours(0, 0, 0, 0);
            const isToday = dayDate.getTime() === today.getTime();

            return (
              <div
                key={index}
                onClick={() => day.session && setSelectedDay(day)}
                className={`min-w-[160px] md:min-w-0 snap-center p-3 rounded-lg border-2 transition-all ${day.session ? 'cursor-pointer hover:scale-[1.02]' : 'opacity-70'} ${
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

      <Dialog open={!!selectedDay} onOpenChange={(open) => !open && setSelectedDay(null)}>
        <DialogContent className="sm:max-w-[425px]">
          {selectedDay?.session && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-2 rounded-lg ${getSessionColor(selectedDay.session.type)}`}>
                    {getSessionIcon(selectedDay.session.type)}
                  </div>
                  <Badge variant={getSessionBadgeVariant(selectedDay.session.type)}>
                    {selectedDay.session.type === 'gym' ? 'Gimnasio' : 'Sesión en Casa'}
                  </Badge>
                </div>
                <DialogTitle className="text-2xl">{selectedDay.session.title}</DialogTitle>
                <DialogDescription className="text-base mt-2">
                  {getDayNameSpanish(selectedDay.dayOfWeek)}, {new Date(selectedDay.date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric' })}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-4">
                {selectedDay.session.type === 'gym' ? (
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-lg border border-blue-100 dark:border-blue-900">
                      <p className="font-semibold text-blue-900 dark:text-blue-100 italic mb-2">
                        "Sesión planificada por MyVitale"
                      </p>
                      <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                        <li><strong>Duración estimada:</strong> {selectedDay.session.duration} minutos</li>
                        <li><strong>Objetivo:</strong> {selectedDay.session.objective}</li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Abre tu app de MyVitale para seguir los ejercicios pautados.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {selectedDay.session.type === 'healthy-back' && (
                      <div className="space-y-4">
                        <p className="font-medium text-sm text-muted-foreground">Vídeos de la sesión a realizar:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 pb-2">
                          {[
                            { id: 'vC0cwSi-wI4', title: 'Espalda Sana 1' },
                            { id: 'eEv6gTjviNo', title: 'Espalda Sana 2' },
                            { id: 'llYfRoWbEK4', title: 'Espalda Sana 3' },
                            { id: '-Jt4iGPHORM', title: 'Espalda Sana 4' },
                            { id: 'JDFBiE2N9FE', title: 'Espalda Sana 5' }
                          ].map((video, index) => (
                            <div key={video.id} className="bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden flex flex-col items-center shadow-sm">
                              <div className="w-full aspect-video bg-black relative">
                                <iframe 
                                  src={`https://www.youtube.com/embed/${video.id}`}
                                  title={video.title}
                                  loading="lazy"
                                  className="absolute top-0 left-0 w-full h-full border-0"
                                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                              <div className="p-2 text-xs font-semibold w-full text-center">Ejercicio {index + 1}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {selectedDay.session.type === 'balance' && (
                      <div className="space-y-4">
                        <p className="font-medium text-sm text-muted-foreground">Progreso de equilibrio mono podal:</p>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[300px] overflow-y-auto pr-2">
                          {[
                            "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                            "https://images.unsplash.com/photo-1552825906-f4ce2ae0fde6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                            "https://images.unsplash.com/photo-1588286840104-a4bba89542a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                            "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                          ].map((imgSrc, i) => (
                            <img 
                              key={i} 
                              src={imgSrc} 
                              alt={`Equilibrio monopodal ${i+1}`}
                              className="w-full h-32 object-cover rounded shadow-sm border" 
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <p className="font-medium">Detalles de la rutina:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground list-disc pl-4">
                        <li><strong>Duración:</strong> {selectedDay.session.duration} minutos</li>
                        <li><strong>Objetivo:</strong> {selectedDay.session.objective}</li>
                      </ul>
                      {selectedDay.session.description && (
                        <p className="text-sm text-muted-foreground mt-4 italic">
                          "{selectedDay.session.description}"
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-3 justify-end mt-4">
                <Button variant="outline" onClick={() => setSelectedDay(null)}>
                  Cerrar
                </Button>
                {selectedDay.session.type !== 'gym' && (
                  <Button onClick={() => {
                    setSelectedDay(null);
                    navigate('/biblioteca');
                  }}>
                    Comenzar rutina
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
}
