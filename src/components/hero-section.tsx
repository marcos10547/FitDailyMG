"use client"

import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

import { useNavigate } from "react-router-dom"

export function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="px-4 py-12 md:py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
      <div className="mx-auto max-w-2xl text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-xl animate-pulse" />
            <img 
              src="/logo-circle.jpg" 
              alt="Logo FitDaily MG" 
              className="relative h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="mb-8 text-xl text-muted-foreground md:text-2xl text-pretty">
          Tu planificador automático de ejercicios inteligente
        </p>

        {/* Description */}
        <div className="mb-10 rounded-2xl bg-card p-6 shadow-sm border border-border space-y-3">
          <p className="text-lg leading-relaxed text-card-foreground md:text-xl">
            Esther aqui empieza tu cambio, a partir de hoy te voy a acompañar diariamente.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground italic">
            Cada pequeño paso que das hoy es la base del cuerpo y la energía que tendrás mañana. ¡Tú puedes con esto!
          </p>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <Button 
            onClick={() => navigate('/hoy')}
            size="lg" 
            className="h-14 rounded-2xl text-lg font-semibold shadow-lg transition-transform hover:scale-[1.02] bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Empieza hoy
          </Button>
          <Button 
            onClick={() => navigate('/planificacion')}
            size="lg" 
            variant="outline"
            className="h-14 rounded-2xl text-lg font-semibold shadow-sm transition-transform hover:scale-[1.02] bg-white dark:bg-slate-900 border-primary/20 text-foreground"
          >
            Ver planificación semanal
          </Button>
          <Button 
            onClick={() => navigate('/seguimiento')}
            size="lg" 
            variant="secondary"
            className="h-14 rounded-2xl text-lg font-semibold shadow-sm transition-transform hover:scale-[1.02]"
          >
            Ver progreso
          </Button>
          <Button 
            onClick={() => navigate('/biblioteca')}
            size="lg" 
            variant="ghost"
            className="h-14 rounded-2xl text-lg font-semibold transition-transform hover:scale-[1.02]"
          >
            Explorar vídeos
          </Button>
        </div>
      </div>
    </section>
  )
}
