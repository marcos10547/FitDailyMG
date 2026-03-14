import { VideoMetadata } from './types';

export const VIDEOS: VideoMetadata[] = [
  // === MOVILIDAD ===
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
  },

  // === EQUILIBRIO ===
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
    id: 'balance-3',
    title: 'Equilibrio dinámico y coordinación',
    duration: 25,
    category: 'balance',
    level: 'intermedio',
    objective: 'Mejorar equilibrio en movimiento y coordinación corporal',
    description: 'Ejercicios que combinan equilibrio con desplazamientos y cambios de dirección para mejorar la coordinación.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Equilibrio en movimiento',
      'Mejora la coordinación',
      'Fortalece tobillos',
      'Previene caídas'
    ],
    musclesInvolved: [
      'Estabilizadores de tobillo',
      'Core',
      'Glúteos',
      'Cuádriceps'
    ]
  },

  // === FUERZA FUNCIONAL ===
  {
    id: 'functional-1',
    title: 'Fuerza funcional de tren inferior',
    duration: 25,
    category: 'functional-strength',
    level: 'principiante',
    objective: 'Fortalecer piernas y glúteos con ejercicios funcionales',
    description: 'Ejercicios básicos de fuerza para piernas usando el peso corporal, ideales para mejorar la funcionalidad en el día a día.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Fortalece piernas',
      'Mejora la funcionalidad diaria',
      'Aumenta la estabilidad',
      'Previene sarcopenia'
    ],
    musclesInvolved: [
      'Cuádriceps',
      'Isquiotibiales',
      'Glúteos',
      'Pantorrillas'
    ]
  },
  {
    id: 'functional-2',
    title: 'Fuerza funcional de tren superior',
    duration: 20,
    category: 'functional-strength',
    level: 'principiante',
    objective: 'Fortalecer brazos, hombros y espalda con movimientos funcionales',
    description: 'Ejercicios de fuerza para tren superior usando bandas elásticas y peso corporal, enfocados en movimientos cotidianos.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Fortalece brazos y hombros',
      'Mejora la postura',
      'Facilita tareas diarias',
      'Previene lesiones'
    ],
    musclesInvolved: [
      'Deltoides',
      'Bíceps',
      'Tríceps',
      'Dorsal ancho'
    ]
  },
  {
    id: 'functional-3',
    title: 'Circuito de fuerza funcional completo',
    duration: 35,
    category: 'functional-strength',
    level: 'intermedio',
    objective: 'Trabajar fuerza de todo el cuerpo con ejercicios integrados',
    description: 'Circuito completo que combina ejercicios de tren superior e inferior con movimientos funcionales para una sesión integral.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Fortalecimiento global',
      'Mejora resistencia muscular',
      'Quema calórica eficiente',
      'Mejora capacidad funcional'
    ],
    musclesInvolved: [
      'Todo el cuerpo',
      'Core',
      'Piernas',
      'Brazos y espalda'
    ]
  },

  // === ESPALDA SANA ===
  {
    id: 'back-1',
    title: 'Movilidad y alivio de espalda',
    duration: 20,
    category: 'healthy-back',
    level: 'principiante',
    objective: 'Reducir tensión y mejorar movilidad de la columna',
    description: 'Rutina suave de ejercicios de movilidad y estiramientos para aliviar tensión en la espalda y mejorar la flexibilidad de la columna.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Alivia dolor de espalda',
      'Mejora movilidad de columna',
      'Reduce rigidez',
      'Promueve relajación'
    ],
    musclesInvolved: [
      'Erector de la columna',
      'Trapecio',
      'Romboides',
      'Flexores de cadera'
    ]
  },
  {
    id: 'back-2',
    title: 'Fortalecimiento lumbar seguro',
    duration: 25,
    category: 'healthy-back',
    level: 'principiante',
    objective: 'Fortalecer la zona lumbar de forma controlada y segura',
    description: 'Ejercicios de activación y fortalecimiento para la musculatura lumbar, diseñados para proteger la espalda baja.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Fortalece zona lumbar',
      'Mejora la estabilidad',
      'Previene lesiones',
      'Reduce molestias'
    ],
    musclesInvolved: [
      'Multífidos',
      'Transverso del abdomen',
      'Erector de la columna',
      'Glúteos'
    ]
  },
  {
    id: 'back-3',
    title: 'Espalda sana: sesión completa',
    duration: 30,
    category: 'healthy-back',
    level: 'intermedio',
    objective: 'Sesión integral para mantener una espalda sana y funcional',
    description: 'Combina movilidad, fortalecimiento y estiramientos en una sesión completa para cuidar tu espalda de forma integral.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    benefits: [
      'Cuidado integral de espalda',
      'Mejora postura',
      'Fortalece musculatura de soporte',
      'Reduce tensión acumulada'
    ],
    musclesInvolved: [
      'Espalda completa',
      'Core',
      'Flexores de cadera',
      'Glúteos'
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
    mobility: 'Movilidad',
    balance: 'Equilibrio',
    'functional-strength': 'Fuerza Funcional',
    'healthy-back': 'Espalda Sana',
    gym: 'Gimnasio',
    recovery: 'Recuperación'
  };
  return labels[category] || category;
}
