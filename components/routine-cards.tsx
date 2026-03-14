"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, Dumbbell, Shield, Sparkles, Clock, ChevronRight, Heart, Footprints, Target, Zap, Flower2, Move } from "lucide-react"
import Link from "next/link"

const espaldaSanaRoutines = [
  {
    id: 1,
    slug: "espalda-1",
    title: "Sesión 1",
    description: "Movilidad general de columna y estiramientos suaves.",
    duration: "30-40 min",
    icon: Activity,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: 2,
    slug: "espalda-2",
    title: "Sesión 2",
    description: "Activación lumbar y ejercicios de estabilidad.",
    duration: "35-45 min",
    icon: Shield,
    color: "bg-sky-100 text-sky-600",
  },
  {
    id: 3,
    slug: "espalda-3",
    title: "Sesión 3",
    description: "Estiramientos profundos y relajación muscular.",
    duration: "30-40 min",
    icon: Sparkles,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: 4,
    slug: "espalda-4",
    title: "Sesión 4",
    description: "Movilidad torácica y apertura de pecho.",
    duration: "35-45 min",
    icon: Heart,
    color: "bg-rose-100 text-rose-600",
  },
  {
    id: 5,
    slug: "espalda-5",
    title: "Sesión 5",
    description: "Fortalecimiento suave de la zona lumbar.",
    duration: "40-50 min",
    icon: Zap,
    color: "bg-teal-100 text-teal-600",
  },
  {
    id: 6,
    slug: "espalda-6",
    title: "Sesión 6",
    description: "Ejercicios de respiración y movilidad integrada.",
    duration: "30-40 min",
    icon: Flower2,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 7,
    slug: "espalda-7",
    title: "Sesión 7",
    description: "Coordinación y control postural.",
    duration: "35-45 min",
    icon: Move,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 8,
    slug: "espalda-8",
    title: "Sesión 8",
    description: "Sesión completa de movilidad y estiramiento.",
    duration: "40-50 min",
    icon: Activity,
    color: "bg-indigo-100 text-indigo-600",
  },
]

const fuerzaEquilibrioRoutines = [
  {
    id: 9,
    slug: "fuerza-1",
    title: "Sesión 1",
    description: "Fortalecimiento básico de piernas.",
    duration: "30-40 min",
    icon: Footprints,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    id: 10,
    slug: "fuerza-2",
    title: "Sesión 2",
    description: "Ejercicios de equilibrio estático y dinámico.",
    duration: "35-45 min",
    icon: Target,
    color: "bg-teal-100 text-teal-600",
  },
  {
    id: 11,
    slug: "fuerza-3",
    title: "Sesión 3",
    description: "Core y estabilidad lumbar.",
    duration: "30-40 min",
    icon: Shield,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 12,
    slug: "fuerza-4",
    title: "Sesión 4",
    description: "Fuerza funcional de todo el cuerpo.",
    duration: "40-50 min",
    icon: Dumbbell,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 13,
    slug: "fuerza-5",
    title: "Sesión 5",
    description: "Piernas y glúteos con trabajo de equilibrio.",
    duration: "35-45 min",
    icon: Zap,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: 14,
    slug: "fuerza-6",
    title: "Sesión 6",
    description: "Coordinación y propiocepción.",
    duration: "30-40 min",
    icon: Move,
    color: "bg-sky-100 text-sky-600",
  },
  {
    id: 15,
    slug: "fuerza-7",
    title: "Sesión 7",
    description: "Fuerza de tren superior con estabilidad.",
    duration: "35-45 min",
    icon: Heart,
    color: "bg-rose-100 text-rose-600",
  },
  {
    id: 16,
    slug: "fuerza-8",
    title: "Sesión 8",
    description: "Sesión completa de fuerza y equilibrio.",
    duration: "40-50 min",
    icon: Dumbbell,
    color: "bg-amber-100 text-amber-600",
  },
]

function RoutineCard({ routine }: { routine: typeof espaldaSanaRoutines[0] }) {
  const IconComponent = routine.icon
  return (
    <Card className="overflow-hidden rounded-2xl border-border shadow-sm transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <div className={`rounded-xl p-3 ${routine.color}`}>
            <IconComponent className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl font-semibold text-card-foreground">
              {routine.title}
            </CardTitle>
            <div className="mt-1 flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">{routine.duration}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        <CardDescription className="text-base leading-relaxed text-muted-foreground">
          {routine.description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          asChild
          variant="secondary" 
          className="w-full rounded-xl text-base font-medium"
        >
          <Link href={`/sesion/${routine.slug}`}>
            Ver sesión
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function RoutineCards() {
  return (
    <section id="routines" className="px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Category 1: Espalda Sana */}
        <div className="mb-12">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
              Sesiones de Espalda Sana
            </h2>
            <p className="text-lg text-muted-foreground">
              Sesiones centradas en movilidad de columna, activación lumbar y reducción de molestias de espalda.
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {espaldaSanaRoutines.map((routine) => (
              <RoutineCard key={routine.id} routine={routine} />
            ))}
          </div>
        </div>

        {/* Category 2: Fuerza y Equilibrio */}
        <div>
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
              Sesiones de Fuerza y Equilibrio
            </h2>
            <p className="text-lg text-muted-foreground">
              Sesiones para fortalecer piernas, mejorar estabilidad y mantener una buena capacidad funcional.
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {fuerzaEquilibrioRoutines.map((routine) => (
              <RoutineCard key={routine.id} routine={routine} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { espaldaSanaRoutines, fuerzaEquilibrioRoutines }
