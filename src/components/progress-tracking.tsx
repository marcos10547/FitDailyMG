import { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Trophy, Flame, Target, Activity, Dumbbell, Home as HomeIcon, Clock } from 'lucide-react';
import { generateMonthPlan } from '@/lib/scheduling';

import { Star } from 'lucide-react';

interface ProgressTrackingProps {
  completedDays: Set<string>;
  completedScores?: Record<string, number>;
  currentMonth: number;
  currentYear: number;
}

export function ProgressTracking({ completedDays, completedScores = {}, currentMonth, currentYear }: ProgressTrackingProps) {
  // Generar plan para comparar datos reales
  const monthPlan = useMemo(() => generateMonthPlan(currentYear, currentMonth), [currentYear, currentMonth]);
  const allDays = useMemo(() => monthPlan.weeks.flatMap(w => w.days), [monthPlan]);

  // Calcular estadísticas
  const stats = useMemo(() => {
    let gymSessions = 0;
    let homeSessions = 0;
    let totalMinutes = 0;

    const thisMonth = Array.from(completedDays).filter(date => {
      const d = new Date(date);
      if (isNaN(d.getTime())) return false;
      const isThisMonth = d.getMonth() === currentMonth && d.getFullYear() === currentYear;
      
      if (isThisMonth) {
        // Find corresponding session details
        const dateStr = d.toISOString().split('T')[0];
        const dayPlan = allDays.find(day => {
          const planD = new Date(day.date);
          if (isNaN(planD.getTime())) return false;
          return planD.toISOString().split('T')[0] === dateStr;
        });
        if (dayPlan && dayPlan.session) {
          totalMinutes += dayPlan.session.duration || 0;
          if (dayPlan.session.type === 'gym') {
            gymSessions++;
          } else {
            homeSessions++;
          }
        }
      }
      return isThisMonth;
    });

    const thisWeek = Array.from(completedDays).filter(date => {
      const d = new Date(date);
      if (isNaN(d.getTime())) return false;
      const now = new Date();
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      return d >= startOfWeek && d <= endOfWeek;
    });

    // Calcular racha
    const validDates = Array.from(completedDays)
      .map(d => new Date(d))
      .filter(d => !isNaN(d.getTime()));
      
    const sortedDates = validDates.sort((a, b) => b.getTime() - a.getTime());
    
    let streak = 0;
    if (sortedDates.length > 0) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      let currentDate = new Date(today);
      
      for (const dateNorm of sortedDates) {
        dateNorm.setHours(0, 0, 0, 0);
        
        if (dateNorm.getTime() === currentDate.getTime()) {
          streak++;
          currentDate.setDate(currentDate.getDate() - 1);
        } else if (dateNorm.getTime() < currentDate.getTime()) {
          // Si hay hueco, rompe la racha. (Permitimos múltiples completados en el mismo día sin cortar)
          break;
        }
      }
    }

    const avgScoreCalc = () => {
      const scoresArray = Array.from(completedDays)
        .map(date => completedScores[date])
        .filter(s => s !== undefined && s > 0);
      if (scoresArray.length === 0) return 0;
      return (scoresArray.reduce((acc, val) => acc + val, 0) / scoresArray.length);
    };

    return {
      thisMonth: thisMonth.length,
      thisWeek: thisWeek.length,
      total: completedDays.size,
      streak,
      gymSessions,
      homeSessions,
      totalMinutes,
      avgScore: avgScoreCalc()
    };
  }, [completedDays, completedScores, currentMonth, currentYear, allDays]);

  // Datos para gráfico semanal
  const weeklyData = useMemo(() => {
    const now = new Date();
    const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    const data = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(now);
      date.setDate(now.getDate() - now.getDay() + (i === 0 ? 1 : i + 1));
      const dateStr = date.toISOString().split('T')[0];
      const completed = completedDays.has(dateStr) ? 1 : 0;

      data.push({
        day: days[i],
        completed,
        date: dateStr,
      });
    }

    return data;
  }, [completedDays]);

  const monthlyTarget = 20; // sesiones esperadas por mes
  const monthlyPercentage = Math.round((stats.thisMonth / monthlyTarget) * 100);

  return (
    <div className="space-y-6">
      {/* Estadísticas principales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <Card className="border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Target className="w-4 h-4" />
              Esta semana
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.thisWeek}/6</div>
            <p className="text-xs text-muted-foreground mt-1">sesiones completadas</p>
          </CardContent>
        </Card>

        <Card className="border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Este mes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.thisMonth}/{monthlyTarget}</div>
            <p className="text-xs text-muted-foreground mt-1">sesiones completadas</p>
          </CardContent>
        </Card>

        <Card className="border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-500" />
              Racha
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">{stats.streak}</div>
            <p className="text-xs text-muted-foreground mt-1">días consecutivos</p>
          </CardContent>
        </Card>

        <Card className="border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-600" />
              Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">{stats.total}</div>
            <p className="text-xs text-muted-foreground mt-1">sesiones en total</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card className="border-0 bg-yellow-50/50 dark:bg-yellow-950/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700 dark:text-yellow-300 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Nota Media
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold text-yellow-700 dark:text-yellow-400">{stats.avgScore > 0 ? stats.avgScore.toFixed(1) : '-'}</div>
              <div className="text-sm font-medium opacity-90 text-yellow-600 dark:text-yellow-500">/ 10</div>
            </div>
            <p className="text-xs text-yellow-600 dark:text-yellow-500 mt-1">Cómo te has sentido</p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-blue-50/50 dark:bg-blue-950/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300 flex items-center gap-2">
              <Dumbbell className="w-4 h-4" />
              Gimnasio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-700 dark:text-blue-400">{stats.gymSessions}</div>
            <p className="text-xs text-blue-600 dark:text-blue-500 mt-1">completadas este mes</p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-green-50/50 dark:bg-green-950/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300 flex items-center gap-2">
              <HomeIcon className="w-4 h-4" />
              En Casa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-700 dark:text-green-400">{stats.homeSessions}</div>
            <p className="text-xs text-green-600 dark:text-green-500 mt-1">completadas este mes</p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-purple-50/50 dark:bg-purple-950/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Tiempo Acumulado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-700 dark:text-purple-400">{stats.totalMinutes}</div>
            <p className="text-xs text-purple-600 dark:text-purple-500 mt-1">minutos de ejercicio en total</p>
          </CardContent>
        </Card>
      </div>

      {/* Progreso mensual */}
      <Card className="border-0">
        <CardHeader>
          <CardTitle>Progreso mensual</CardTitle>
          <CardDescription>
            Has completado {stats.thisMonth} de {monthlyTarget} sesiones ({monthlyPercentage}%)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={monthlyPercentage} className="h-3" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{stats.thisMonth} completadas</span>
            <span>{monthlyTarget - stats.thisMonth} por completar</span>
          </div>
        </CardContent>
      </Card>

      {/* Gráfico semanal */}
      <Card className="border-0">
        <CardHeader>
          <CardTitle>Actividad semanal</CardTitle>
          <CardDescription>Tus sesiones de esta semana</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[0, 1]} />
              <Tooltip 
                formatter={(value) => value ? 'Completada' : 'No completada'}
                labelFormatter={(label) => `Día: ${label}`}
              />
              <Bar dataKey="completed" fill="#8884d8" radius={[8, 8, 0, 0]}>
                {weeklyData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.completed ? '#10b981' : '#e5e7eb'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
