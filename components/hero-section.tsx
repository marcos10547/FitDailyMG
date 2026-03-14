"use client"

import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export function HeroSection() {
  const scrollToTodaySession = () => {
    document.getElementById("today-session")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="px-4 py-12 md:py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
      <div className="mx-auto max-w-2xl text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-primary/10 p-4">
            <Zap className="h-10 w-10 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
          FitDailyMG
        </h1>

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

        {/* CTA Button */}
        <Button 
          onClick={scrollToTodaySession}
          size="lg" 
          className="h-16 w-full max-w-md rounded-2xl text-xl font-semibold shadow-lg transition-transform hover:scale-[1.02] md:h-14 md:text-lg"
        >
          Ver mi plan de hoy
        </Button>
      </div>
    </section>
  )
}
