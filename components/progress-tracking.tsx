'use client';

import { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Trophy, Flame, Target, Activity } from 'lucide-react';

interface ProgressTrackingProps {
  completedDays: Set<string>;
  currentMonth: number;
  currentYear: number;
}

export function ProgressTracking({ completedDays, currentMonth, currentYear }: ProgressTrackingProps) {
  // Calcular estadísticas
  const stats = useMemo(() => {
    const thisMonth = Array.from(completedDays).filter(date => {
      const d = new Date(date);
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    });

    const thisWeek = Array.from(completedDays).filter(date => {
      const d = new Date(date);
      const now = new Date();
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      return d >= startOfWeek && d <= endOfWeek;
    });

    // Calcular racha
    const sortedDates = Array.from(completedDays)
      .map(d => new Date(d))
      .sort((a, b) => b.getTime() - a.getTime());
    
    let streak = 0;
    if (sortedDates.length > 0) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      let currentDate = new Date(today);
      
      for (const date of sortedDates) {
        const dateNorm = new Date(date);
        dateNorm.setHours(0, 0, 0, 0);
        
        if (dateNorm.getTime() === currentDate.getTime()) {
          streak++;
          currentDate.setDate(currentDate.getDate() - 1);
        } else {
          break;
        }
      }
    }

    return {
      thisMonth: thisMonth.length,
      thisWeek: thisWeek.length,
      total: completedDays.size,
      streak,
    };
  }, [completedDays, currentMonth, currentYear]);

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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
