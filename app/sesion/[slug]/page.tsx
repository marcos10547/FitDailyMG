import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Clock, CheckCircle2, Lightbulb, Target } from "lucide-react"

// Session data with video placeholders and exercise details
const sessionsData: Record<string, {
  title: string
  category: string
  duration: string
  videoId: string
  objective: string
  exercises: string[]
  tips: string[]
}> = {
  "espalda-1": {
    title: "Sesión 1 - Espalda Sana",
    category: "Espalda Sana",
    duration: "30-40 min",
    videoId: "",
    objective: "Mejorar la movilidad general de la columna y reducir la rigidez con movimientos suaves y controlados.",
    exercises: [
      "Movilidad de columna en cuadrupedia",
      "Cat-cow (gato-vaca)",
      "Rotaciones torácicas",
      "Estiramiento de flexores de cadera",
      "Relajación final"
    ],
    tips: [
      "Realiza los movimientos lentamente y sin forzar",
      "Respira de forma profunda y relajada",
      "Si sientes dolor, reduce la amplitud del movimiento"
    ]
  },
  "espalda-2": {
    title: "Sesión 2 - Espalda Sana",
    category: "Espalda Sana",
    duration: "35-45 min",
    videoId: "",
    objective: "Activar la musculatura lumbar de forma segura y mejorar la estabilidad de la zona baja de la espalda.",
    exercises: [
      "Bird dog (extensión cruzada)",
      "Puente de glúteo",
      "Dead bug modificado",
      "Activación del transverso",
      "Estiramientos finales"
    ],
    tips: [
      "Mantén el abdomen ligeramente activado",
      "No arquees la espalda en exceso",
      "Descansa cuando lo necesites"
    ]
  },
  "espalda-3": {
    title: "Sesión 3 - Espalda Sana",
    category: "Espalda Sana",
    duration: "30-40 min",
    videoId: "",
    objective: "Estirar la musculatura de la espalda y reducir la tensión acumulada.",
    exercises: [
      "Estiramiento de piriformis",
      "Rodillas al pecho",
      "Estiramiento de cuádriceps lateral",
      "Torsión espinal suave",
      "Relajación guiada"
    ],
    tips: [
      "Mantén cada estiramiento entre 30 y 60 segundos",
      "Respira profundamente mientras estiras",
      "Nunca rebotes en los estiramientos"
    ]
  },
  "espalda-4": {
    title: "Sesión 4 - Espalda Sana",
    category: "Espalda Sana",
    duration: "35-45 min",
    videoId: "",
    objective: "Mejorar la movilidad de la zona torácica y abrir el pecho para una mejor postura.",
    exercises: [
      "Apertura torácica con rotación",
      "Estiramiento de pectorales en pared",
      "Thread the needle",
      "Extensión torácica con foam roller",
      "Respiración diafragmática"
    ],
    tips: [
      "Enfócate en mover solo la zona media de la espalda",
      "Mantén las caderas estables durante las rotaciones",
      "Usa una almohada si no tienes foam roller"
    ]
  },
  "espalda-5": {
    title: "Sesión 5 - Espalda Sana",
    category: "Espalda Sana",
    duration: "40-50 min",
    videoId: "",
    objective: "Fortalecer suavemente la musculatura de soporte de la zona lumbar.",
    exercises: [
      "Superman modificado",
      "Puente de glúteo con pausa",
      "Bird dog con banda",
      "Plancha lateral modificada",
      "Estiramientos de recuperación"
    ],
    tips: [
      "Trabaja con control, no con velocidad",
      "Activa el core antes de cada ejercicio",
      "Descansa entre series si lo necesitas"
    ]
  },
  "espalda-6": {
    title: "Sesión 6 - Espalda Sana",
    category: "Espalda Sana",
    duration: "30-40 min",
    videoId: "",
    objective: "Integrar la respiración con el movimiento para reducir tensión y mejorar la conciencia corporal.",
    exercises: [
      "Respiración 360",
      "Movilidad con respiración guiada",
      "Expansión costal",
      "Movimientos fluidos de columna",
      "Relajación consciente"
    ],
    tips: [
      "Presta atención a cómo respiras",
      "Intenta expandir las costillas en cada inhalación",
      "Muévete con el ritmo de tu respiración"
    ]
  },
  "espalda-7": {
    title: "Sesión 7 - Espalda Sana",
    category: "Espalda Sana",
    duration: "35-45 min",
    videoId: "",
    objective: "Mejorar la coordinación y el control postural a través de ejercicios integrados.",
    exercises: [
      "Secuencias de movilidad",
      "Ejercicios de control motor",
      "Activación postural",
      "Equilibrio en diferentes posiciones",
      "Estiramientos dinámicos"
    ],
    tips: [
      "Concéntrate en la calidad del movimiento",
      "Mantén una postura erguida",
      "Si pierdes el equilibrio, vuelve a empezar con calma"
    ]
  },
  "espalda-8": {
    title: "Sesión 8 - Espalda Sana",
    category: "Espalda Sana",
    duration: "40-50 min",
    videoId: "",
    objective: "Sesión completa que combina movilidad, activación y estiramientos para toda la espalda.",
    exercises: [
      "Calentamiento general",
      "Movilidad de columna completa",
      "Activación lumbar y core",
      "Estiramientos profundos",
      "Relajación final"
    ],
    tips: [
      "Es una sesión más larga, tómate tu tiempo",
      "Hidrátate durante la sesión",
      "Escucha a tu cuerpo y adapta la intensidad"
    ]
  },
  "fuerza-1": {
    title: "Sesión 1 - Fuerza y Equilibrio",
    category: "Fuerza y Equilibrio",
    duration: "30-40 min",
    videoId: "",
    objective: "Fortalecer los músculos de las piernas con ejercicios básicos y seguros.",
    exercises: [
      "Sentadilla asistida con silla",
      "Elevación de talones",
      "Zancada con apoyo",
      "Puente de glúteo",
      "Estiramientos de piernas"
    ],
    tips: [
      "Usa una silla para apoyarte si lo necesitas",
      "Mantén las rodillas alineadas con los pies",
      "No bajes más de lo que te resulte cómodo"
    ]
  },
  "fuerza-2": {
    title: "Sesión 2 - Fuerza y Equilibrio",
    category: "Fuerza y Equilibrio",
    duration: "35-45 min",
    videoId: "",
    objective: "Mejorar el equilibrio estático y dinámico para prevenir caídas.",
    exercises: [
      "Apoyo en un pie con sujeción",
      "Caminar en línea recta",
      "Transferencias de peso",
      "Equilibrio con ojos cerrados",
      "Ejercicios de propiocepción"
    ],
    tips: [
      "Ten siempre un apoyo cerca por seguridad",
      "Empieza con los ejercicios más fáciles",
      "Practica descalza sobre una superficie segura"
    ]
  },
  "fuerza-3": {
    title: "Sesión 3 - Fuerza y Equilibrio",
    category: "Fuerza y Equilibrio",
    duration: "30-40 min",
    videoId: "",
    objective: "Fortalecer el core para mejorar la estabilidad lumbar y el equilibrio general.",
    exercises: [
      "Activación abdominal tumbada",
      "Dead bug modificado",
      "Plancha frontal con rodillas",
      "Plancha lateral modificada",
      "Estiramientos de core"
    ],
    tips: [
      "Mantén la zona lumbar pegada al suelo",
      "Respira de forma continua, no aguantes la respiración",
      "Reduce el tiempo si te cuesta mantener la postura"
    ]
  },
  "fuerza-4": {
    title: "Sesión 4 - Fuerza y Equilibrio",
    category: "Fuerza y Equilibrio",
    duration: "40-50 min",
    videoId: "",
    objective: "Trabajar la fuerza funcional de todo el cuerpo de forma integrada.",
    exercises: [
      "Sentadilla con press",
      "Remo con banda elástica",
      "Peso muerto con mancuernas ligeras",
      "Flexiones en pared",
      "Circuito de movilidad"
    ],
    tips: [
      "Usa pesos ligeros o bandas suaves",
      "Prioriza la técnica sobre la carga",
      "Descansa 1 minuto entre ejercicios"
    ]
  },
  "fuerza-5": {
    title: "Sesión 5 - Fuerza y Equilibrio",
    category: "Fuerza y Equilibrio",
    duration: "35-45 min",
    videoId: "",
    objective: "Fortalecer piernas y glúteos mientras se trabaja el equilibrio.",
    exercises: [
      "Sentadilla sumo",
      "Zancada lateral",
      "Elevación de cadera a una pierna",
      "Step up en escalón bajo",
      "Estiramientos de glúteos"
    ],
    tips: [
      "Mantén el torso erguido en las zancadas",
      "Usa un escalón bajo y seguro",
      "Alterna las piernas de forma equilibrada"
    ]
  },
  "fuerza-6": {
    title: "Sesión 6 - Fuerza y Equilibrio",
    category: "Fuerza y Equilibrio",
    duration: "30-40 min",
    videoId: "",
    objective: "Mejorar la coordinación y la propiocepción con ejercicios dinámicos.",
    exercises: [
      "Marcha en el sitio con elevación de rodillas",
      "Toques alternados de talón",
      "Giros controlados",
      "Alcances en diferentes direcciones",
      "Ejercicios de reacción"
    ],
    tips: [
      "Muévete de forma controlada",
      "Mantén un punto de referencia visual",
      "Si te mareas, descansa y continúa más despacio"
    ]
  },
  "fuerza-7": {
    title: "Sesión 7 - Fuerza y Equilibrio",
    category: "Fuerza y Equilibrio",
    duration: "35-45 min",
    videoId: "",
    objective: "Fortalecer el tren superior manteniendo la estabilidad del core.",
    exercises: [
      "Flexiones en pared",
      "Remo con banda sentada",
      "Press de hombros con mancuernas ligeras",
      "Apertura de pecho con banda",
      "Estiramientos de brazos y hombros"
    ],
    tips: [
      "Mantén los hombros alejados de las orejas",
      "Activa el abdomen durante los ejercicios",
      "Usa bandas o pesos muy ligeros"
    ]
  },
  "fuerza-8": {
    title: "Sesión 8 - Fuerza y Equilibrio",
    category: "Fuerza y Equilibrio",
    duration: "40-50 min",
    videoId: "",
    objective: "Sesión completa que integra fuerza de todo el cuerpo con trabajo de equilibrio.",
    exercises: [
      "Calentamiento dinámico",
      "Circuito de fuerza de piernas",
      "Circuito de fuerza de tren superior",
      "Secuencia de equilibrio",
      "Enfriamiento y estiramientos"
    ],
    tips: [
      "Es una sesión larga, hidrátate bien",
      "Puedes dividirla en dos partes si lo necesitas",
      "Felicítate por completar la sesión"
    ]
  }
}

export async function generateStaticParams() {
  return Object.keys(sessionsData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const session = sessionsData[slug]
  if (!session) return { title: "Sesión no encontrada" }
  return {
    title: `${session.title} | Programa de Ejercicio`,
    description: session.objective,
  }
}

export default async function SessionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const session = sessionsData[slug]

  if (!session) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Button asChild variant="ghost" className="mb-4 -ml-2 text-base">
            <Link href="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Volver al inicio
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            {session.title}
          </h1>
          <div className="mt-2 flex items-center gap-4 text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {session.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {session.duration}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Video Section */}
          <Card className="overflow-hidden rounded-2xl">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted flex items-center justify-center">
                {session.videoId ? (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${session.videoId}`}
                    title={session.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="mx-auto mb-4 rounded-full bg-primary/10 p-4 w-fit">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-lg font-medium text-muted-foreground">
                      Vídeo próximamente
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Aquí aparecerá el vídeo guiado de esta sesión
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Objective */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                Objetivo de la sesión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {session.objective}
              </p>
            </CardContent>
          </Card>

          {/* Exercises */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="rounded-lg bg-emerald-100 p-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                </div>
                Ejercicios incluidos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {session.exercises.map((exercise, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{exercise}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="rounded-lg bg-amber-100 p-2">
                  <Lightbulb className="h-5 w-5 text-amber-600" />
                </div>
                Consejos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {session.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Back button */}
          <div className="pt-4">
            <Button asChild size="lg" className="w-full rounded-xl text-lg">
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver a todas las sesiones
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
