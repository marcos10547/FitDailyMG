'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Video, BarChart3, Zap } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: 'Planificación Automática',
      description: 'Generamos automáticamente tu plan semanal balanceado con sesiones de gimnasio y ejercicios en casa.',
    },
    {
      icon: Zap,
      title: 'Sesiones Inteligentes',
      description: 'Distribuimos inteligentemente gym, movilidad, estiramientos y equilibrio para máximo resultado.',
    },
    {
      icon: Video,
      title: 'Biblioteca de Ejercicios',
      description: 'Acceso a videos de alta calidad de estiramientos, movilidad y equilibrio desde casa.',
    },
    {
      icon: BarChart3,
      title: 'Seguimiento de Progreso',
      description: 'Visualiza tu racha, progreso mensual y estadísticas de sesiones completadas.',
    },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Características principales</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Todo lo que necesitas para mantener una rutina equilibrada de ejercicio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="border-0 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
