"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Dumbbell, TreePine, Sparkles } from "lucide-react"

const weeklySchedule = [
  {
    day: "Lunes",
    type: "espalda",
    label: "Espalda sana",
    icon: Activity,
    color: "bg-emerald-100 text-emerald-600 border-emerald-200",
  },
  {
    day: "Martes",
    type: "fuerza",
    label: "Fuerza y equilibrio",
    icon: Dumbbell,
    color: "bg-indigo-100 text-indigo-600 border-indigo-200",
  },
  {
    day: "Miércoles",
    type: "descanso",
    label: "Descanso o paseo",
    icon: TreePine,
    color: "bg-amber-100 text-amber-600 border-amber-200",
  },
  {
    day: "Jueves",
    type: "espalda",
    label: "Espalda sana",
    icon: Activity,
    color: "bg-emerald-100 text-emerald-600 border-emerald-200",
  },
  {
    day: "Viernes",
    type: "fuerza",
    label: "Fuerza y equilibrio",
    icon: Dumbbell,
    color: "bg-indigo-100 text-indigo-600 border-indigo-200",
  },
  {
    day: "Sábado",
    type: "ligera",
    label: "Movilidad o estiramientos opcionales",
    icon: Sparkles,
    color: "bg-rose-100 text-rose-600 border-rose-200",
  },
  {
    day: "Domingo",
    type: "descanso",
    label: "Descanso",
    icon: TreePine,
    color: "bg-amber-100 text-amber-600 border-amber-200",
  },
]

export function WeeklyPlan() {
  return (
    <section className="px-4 py-12 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
            Planificación semanal
          </h2>
          <p className="text-lg text-muted-foreground">
            Intenta hacer al menos 2 sesiones de cada tipo cada semana
          </p>
        </div>

        <Card className="rounded-2xl border-border shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-xl font-semibold text-card-foreground">
              Tu semana ideal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {weeklySchedule.map((item) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={item.day}
                    className={`flex items-center gap-3 rounded-xl border p-4 ${item.color}`}
                  >
                    <div className="rounded-lg bg-background/50 p-2">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.day}</p>
                      <p className="text-sm opacity-80">{item.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
