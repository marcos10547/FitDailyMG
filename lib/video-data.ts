import { VideoMetadata } from './types';

export const VIDEOS: VideoMetadata[] = [
  {
    id: 'stretching-1',
    title: 'Estiramientos para la espalda',
    duration: 15,
    category: 'stretching',
    level: 'principiante',
    objective: 'Reducir tensión muscular en espalda y hombros',
    description: 'Una rutina suave de estiramientos diseñada para aliviar la tensión acumulada en la espalda, especialmente efectiva después del trabajo o ejercicio.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Reduce la rigidez muscular',
      'Mejora la flexibilidad',
      'Alivia el dolor de espalda',
      'Promueve la relajación'
    ],
    musclesInvolved: [
      'Espalda latissimus dorsi',
      'Trapecio',
      'Romboides',
      'Flexores de cadera'
    ]
  },
  {
    id: 'mobility-1',
    title: 'Movilidad de cadera y espalda',
    duration: 20,
    category: 'mobility',
    level: 'principiante',
    objective: 'Aumentar el rango de movimiento en caderas y espalda',
    description: 'Ejercicios dinámicos para mejorar la movilidad articular y preparar el cuerpo para movimientos más complejos.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Aumenta el rango de movimiento',
      'Mejora la funcionalidad',
      'Prepara para ejercicio',
      'Reduce lesiones'
    ],
    musclesInvolved: [
      'Glúteos',
      'Flexores de cadera',
      'Espalda baja',
      'Oblicuos'
    ]
  },
  {
    id: 'balance-1',
    title: 'Ejercicios de equilibrio básicos',
    duration: 18,
    category: 'balance',
    level: 'principiante',
    objective: 'Fortalecer estabilidad y mejorar equilibrio',
    description: 'Ejercicios de equilibrio seguros y efectivos para mejorar la estabilidad del core y la propiocepción.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Mejora el equilibrio',
      'Fortalece core',
      'Reduce caídas',
      'Aumenta confianza'
    ],
    musclesInvolved: [
      'Core profundo',
      'Estabilizadores de espalda',
      'Glúteos',
      'Músculos del pie'
    ]
  },
  {
    id: 'stretching-2',
    title: 'Estiramientos para piernas',
    duration: 20,
    category: 'stretching',
    level: 'principiante',
    objective: 'Mejorar flexibilidad en piernas',
    description: 'Una secuencia completa de estiramientos para isquiotibiales, cuádriceps y pantorrillas.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Mejora flexibilidad de piernas',
      'Reduce tensión muscular',
      'Mejora circulación',
      'Prepara para cardio'
    ],
    musclesInvolved: [
      'Isquiotibiales',
      'Cuádriceps',
      'Pantorrillas',
      'Glúteos'
    ]
  },
  {
    id: 'mobility-2',
    title: 'Movilidad de hombros y cuello',
    duration: 15,
    category: 'mobility',
    level: 'principiante',
    objective: 'Mejorar movilidad articular en zona superior',
    description: 'Ejercicios específicos para liberar tensión en hombros, cuello y zona pectoral.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Libera tensión cervical',
      'Mejora postura',
      'Aumenta rango hombro',
      'Alivia dolor cuello'
    ],
    musclesInvolved: [
      'Trapecio',
      'Deltoides',
      'Pectorales',
      'Músculos del cuello'
    ]
  },
  {
    id: 'balance-2',
    title: 'Equilibrio intermedio',
    duration: 22,
    category: 'balance',
    level: 'intermedio',
    objective: 'Desafiar equilibrio con ejercicios más complejos',
    description: 'Secuencia intermedia con ejercicios de equilibrio más desafiantes para mejora progresiva.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Mayor desafío',
      'Mejora propiocepción',
      'Fortalece core',
      'Aumenta coordinación'
    ],
    musclesInvolved: [
      'Core completo',
      'Estabilizadores',
      'Glúteos',
      'Músculos de la pierna'
    ]
  },
  {
    id: 'stretching-3',
    title: 'Estiramientos para relajación profunda',
    duration: 25,
    category: 'stretching',
    level: 'intermedio',
    objective: 'Relajación profunda y estiramiento completo del cuerpo',
    description: 'Una rutina de estiramientos más larga y profunda para máxima relajación y recuperación.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Relajación profunda',
      'Reduce estrés',
      'Mejora sueño',
      'Recuperación activa'
    ],
    musclesInvolved: [
      'Todos los grupos musculares',
      'Espalda completa',
      'Piernas',
      'Brazos'
    ]
  },
  {
    id: 'mobility-3',
    title: 'Rutina completa de movilidad',
    duration: 30,
    category: 'mobility',
    level: 'intermedio',
    objective: 'Rutina completa de movilidad articular',
    description: 'Una secuencia completa que trabaja todas las articulaciones principales del cuerpo.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Mejora global',
      'Mejor funcionalidad',
      'Prepara bien para ejercicio',
      'Previene lesiones'
    ],
    musclesInvolved: [
      'Cadera',
      'Hombros',
      'Espalda',
      'Cuello',
      'Muñecas',
      'Tobillos'
    ]
  }
];

export function getVideosByCategory(category: string): VideoMetadata[] {
  return VIDEOS.filter(video => video.category === category);
}

export function getVideoById(id: string): VideoMetadata | undefined {
  return VIDEOS.find(video => video.id === id);
}

export function getAllCategories(): string[] {
  const categories = new Set(VIDEOS.map(video => video.category));
  return Array.from(categories);
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    stretching: 'Estiramientos',
    mobility: 'Movilidad',
    balance: 'Equilibrio',
    gym: 'Gimnasio',
    recovery: 'Recuperación'
  };
  return labels[category] || category;
}
