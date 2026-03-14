'use client';

import { useState } from 'react';
import { ProgressTracking } from '@/components/progress-tracking';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProgressPage() {
  const now = new Date();
  const [completedDays, setCompletedDays] = useState<Set<string>>(new Set());

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Mi progreso</h1>
          <p className="text-lg text-muted-foreground">
            Visualiza tu progreso y mantente motivado
          </p>
        </div>

        <ProgressTracking
          completedDays={completedDays}
          currentMonth={now.getMonth()}
          currentYear={now.getFullYear()}
        />

        {/* Consejos */}
        <Card className="border-0 mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
          <CardHeader>
            <CardTitle>Consejos para mantener la consistencia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Establece una rutina</h4>
              <p className="text-sm text-muted-foreground">
                Planifica tus sesiones en horarios fijos. La consistencia es clave para obtener resultados.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">2. Combina ambos tipos de ejercicio</h4>
              <p className="text-sm text-muted-foreground">
                Alterna entre sesiones de gimnasio y ejercicios en casa para un desarrollo equilibrado.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">3. Escucha a tu cuerpo</h4>
              <p className="text-sm text-muted-foreground">
                Si sientes dolor o fatiga excesiva, toma un día de descanso. La recuperación es importante.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">4. Registra tu progreso</h4>
              <p className="text-sm text-muted-foreground">
                Marca tus sesiones completadas para ver tu racha y mantente motivado.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
