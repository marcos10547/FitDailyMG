import { VideoMetadata } from './types';

export const VIDEOS: VideoMetadata[] = [
  // === ESPALDA SANA Y MOVILIDAD ===
  {
    id: 'back-mobility-1',
    title: 'ESPALDA SANA 1: Flexores Cadera',
    duration: 35, // Not displayed but kept in data for internal logic if needed
    category: 'back-mobility',
    level: 'principiante',
    objective: 'Aumenta la movilidad de la cadera liberando la tensión en los flexores principales.',
    description: 'Esta sesión detallada se centra en ejercicios que liberan la tensión en los flexores de la cadera y músculos lumbares asociados, mejorando tu postura y alivio lumbar.',
    videoUrl: 'https://www.youtube.com/embed/vC0cwSi-wI4',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Liberación de flexores de cadera',
      'Reducción de tensión lumbar',
      'Mejora de la alineación pélvica',
      'Mayor fluidez de movimiento'
    ],
    musclesInvolved: [
      'Psoas ilíaco',
      'Glúteo mayor',
      'Erectores espinales',
      'Cuádriceps'
    ]
  },
  {
    id: 'back-mobility-2',
    title: 'ESPALDA SANA 2: Movilidad Escapular - Torácia',
    duration: 35,
    category: 'back-mobility',
    level: 'principiante',
    objective: 'Desbloquear la zona torácica y mejorar la mecánica de la escápula.',
    description: 'Sesión centrada en desbloquear la zona torácica y mejorar la mecánica de la escápula para una columna más fuerte, funcional y libre de bloqueos.',
    videoUrl: 'https://www.youtube.com/embed/eEv6gTjviNo',
    thumbnail: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Mejora de la movilidad torácica',
      'Desbloqueo escapular',
      'Mejora de la postura de hombros',
      'Respiración más profunda'
    ],
    musclesInvolved: [
      'Romboides',
      'Serrato anterior',
      'Trapecio inferior',
      'Paravertebrales torácicos'
    ]
  },
  {
    id: 'back-mobility-3',
    title: 'ESPALDA SANA 3: Aperturas posteriores',
    duration: 35,
    category: 'back-mobility',
    level: 'principiante',
    objective: 'Abrir y fortalecer la cadena posterior para mejorar la postura.',
    description: 'Ejercicios para abrir y fortalecer la cadena posterior, contrarrestando las posturas sedentarias y mejorando la postura general del cuerpo.',
    videoUrl: 'https://www.youtube.com/embed/llYfRoWbEK4',
    thumbnail: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Apertura de cadena anterior',
      'Fortalecimiento de cadena posterior',
      'Mejora de la cifosis torácica',
      'Alivio de tensión en cuello'
    ],
    musclesInvolved: [
      'Isquiotibiales',
      'Erectores de columna',
      'Deltoides posterior',
      'Glúteos'
    ]
  },
  {
    id: 'back-mobility-4',
    title: 'ESPALDA SANA 4: Trabajo en pared',
    duration: 35,
    category: 'back-mobility',
    level: 'principiante',
    objective: 'Utilizar la pared para mejorar el rango de movimiento y la fuerza.',
    description: 'Una serie de ejercicios que utilizan la pared para mejorar el rango de movimiento y la fuerza sin necesidad de material complejo, proporcionando una base estable.',
    videoUrl: 'https://www.youtube.com/embed/-Jt4iGPHORM',
    thumbnail: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Feedback táctil de la pared',
      'Mejora del rango articular',
      'Alineación asistida',
      'Fortalecimiento funcional'
    ],
    musclesInvolved: [
      'Hombros',
      'Toda la columna vertebral',
      'Cadenas laterales',
      'Cadera'
    ]
  },
  {
    id: 'back-mobility-5',
    title: 'ESPALDA SANA 5: Completa',
    duration: 35,
    category: 'back-mobility',
    level: 'intermedio',
    objective: 'Rutina integral que trabaja toda la columna vertebral.',
    description: 'Una rutina integral que trabaja y moviliza toda la columna vertebral y sus músculos asociados para una sensación general de alivio y bienestar profundo.',
    videoUrl: 'https://www.youtube.com/embed/JDFBiE2N9FE',
    thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Movilización integral de columna',
      'Bienestar profundo sostenido',
      'Mejora de la fluidez diaria',
      'Equilibrio muscular total'
    ],
    musclesInvolved: [
      'Core',
      'Paravertebrales',
      'Cadenas cruzadas',
      'Estabilizadores profundos'
    ]
  },

  // === EQUILIBRIO Y COORDINACIÓN ===
  {
    id: 'balance-coord-1',
    title: 'Equilibrio Unilateral Dinámico',
    duration: 30,
    category: 'balance-coord',
    level: 'principiante',
    objective: 'Mejorar la estabilidad y el control del núcleo en una sola pierna.',
    description: 'Ejercicios enfocados a mejorar la estabilidad y el control del núcleo trabajando de forma unilateral, lo cual es clave para la prevención de caídas.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Estabilidad unilateral',
      'Control de core',
      'Fortalecimiento de tobillo',
      'Concentración mental'
    ],
    musclesInvolved: [
      'Abdominales profundos',
      'Estabilizadores de tobillo',
      'Glúteo medio',
      'Multífidos'
    ]
  },
  {
    id: 'balance-coord-2',
    title: 'Coordinación Mano-Ojo y Pies',
    duration: 30,
    category: 'balance-coord',
    level: 'intermedio',
    objective: 'Agudizar los reflejos y la coordinación mano-pie.',
    description: 'Rutina rápida para agudizar los reflejos y la coordinación mano-pie, estimulando la conexión mente-cuerpo y la agilidad.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Agilidad mental y física',
      'Reflejos mejorados',
      'Coordinación compleja',
      'Estimulación cognitiva'
    ],
    musclesInvolved: [
      'Sistema propioceptivo',
      'Músculos oculares',
      'Pantorrillas',
      'Antebrazos'
    ]
  },
  {
    id: 'balance-coord-3',
    title: 'Propriocepción Consciente',
    duration: 30,
    category: 'balance-coord',
    level: 'principiante',
    objective: 'Mejorar la conciencia corporal y la estabilidad articular.',
    description: 'Ejercicios enfocados en mejorar la conciencia corporal y la estabilidad articular a través de movimientos lentos y controlados.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1522898467493-49726bf28798?auto=format&fit=crop&w=400&q=80',
    benefits: [
      'Conciencia corporal profunda',
      'Estabilidad articular',
      'Prevención de lesiones',
      'Calma y control'
    ],
    musclesInvolved: [
      'Receptores propioceptivos',
      'Core',
      'Músculos intrínsecos del pie',
      'Rodilla'
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
    'back-mobility': 'Espalda Sana y Movilidad',
    'balance-coord': 'Equilibrio y Coordinación',
    mobility: 'Movilidad',
    balance: 'Equilibrio',
    'functional-strength': 'Fuerza Funcional',
    'healthy-back': 'Espalda Sana',
    gym: 'Gimnasio',
    recovery: 'Recuperación'
  };
  return labels[category] || category;
}
