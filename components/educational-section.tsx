'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Heart, Zap, Brain, Shield, TrendingUp } from 'lucide-react';

export function EducationalSection() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">¿Por qué combinar gimnasio con ejercicios en casa?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Una estrategia equilibrada que maximiza tus resultados de salud y bienestar
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Beneficios del gimnasio */}
        <Card className="border-0">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6 text-blue-600" />
              <CardTitle>Sesiones de gimnasio</CardTitle>
            </div>
            <CardDescription>Planificadas por MyVitale</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Ventajas principales</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Programas personalizados basados en tu perfil</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Acceso a equipamiento especializado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Mayor intensidad y progresión</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Seguimiento profesional</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Beneficios de ejercicio en casa */}
        <Card className="border-0">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="w-6 h-6 text-green-600" />
              <CardTitle>Ejercicios en casa</CardTitle>
            </div>
            <CardDescription>Movilidad, estiramientos y equilibrio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Ventajas principales</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Accesibilidad: cualquier hora y lugar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Mejora la flexibilidad y movilidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Crucial para la recuperación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Previene lesiones</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Razones para combinar */}
      <Card className="border-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-500" />
            Por qué funcionan juntos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-600" />
                Equilibrio completo
              </h4>
              <p className="text-sm text-muted-foreground">
                Combinas fuerza y resistencia con movilidad y flexibilidad para un cuerpo más funcional.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-600" />
                Prevención de lesiones
              </h4>
              <p className="text-sm text-muted-foreground">
                Los ejercicios de movilidad preparan tu cuerpo y evitan lesiones durante entrenamientos intensos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Mejor recuperación
              </h4>
              <p className="text-sm text-muted-foreground">
                Los estiramientos activos y la movilidad aceleran la recuperación muscular entre sesiones.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detalles de cada tipo de ejercicio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0">
          <CardHeader>
            <CardTitle className="text-lg">Estiramientos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>Reducen la tensión muscular acumulada y mejoran el rango de movimiento.</p>
            <div>
              <h5 className="font-semibold mb-2">Beneficios:</h5>
              <ul className="space-y-1 text-xs">
                <li>• Aumenta flexibilidad</li>
                <li>• Reduce dolor muscular</li>
                <li>• Mejora circulación</li>
                <li>• Relajación muscular</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0">
          <CardHeader>
            <CardTitle className="text-lg">Movilidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>Mejora el rango de movimiento articular y la funcionalidad del cuerpo.</p>
            <div>
              <h5 className="font-semibold mb-2">Beneficios:</h5>
              <ul className="space-y-1 text-xs">
                <li>• Aumenta rango de movimiento</li>
                <li>• Mejora funcionalidad</li>
                <li>• Prepara para ejercicio</li>
                <li>• Previene rigidez</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0">
          <CardHeader>
            <CardTitle className="text-lg">Equilibrio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>Fortalece la estabilidad y el core, mejorando la calidad de vida.</p>
            <div>
              <h5 className="font-semibold mb-2">Beneficios:</h5>
              <ul className="space-y-1 text-xs">
                <li>• Fortalece core</li>
                <li>• Mejora estabilidad</li>
                <li>• Reduce caídas</li>
                <li>• Mayor confianza</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Consejo final */}
      <Card className="border-2 border-primary bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            Consejo profesional
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p>
            La mejor estrategia es mantener consistencia en ambos tipos de ejercicio. Los días de gimnasio te dan fuerza y resistencia, mientras que los días de ejercicios en casa aseguran que tu cuerpo se mantiene flexible, estable y sin lesiones. Juntos crean un equilibrio perfecto para la salud a largo plazo.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
