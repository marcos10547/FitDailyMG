import { VideoMetadata } from '@/lib/types';
import { getCategoryLabel } from '@/lib/video-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Target, Award, Zap } from 'lucide-react';

interface VideoDetailProps {
  video: VideoMetadata;
  onBack?: () => void;
}

export function VideoDetail({ video, onBack }: VideoDetailProps) {
  return (
    <div className="space-y-6">
      {/* Video player */}
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={video.videoUrl}
          title={video.title}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      {/* Información principal */}
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">{video.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{video.objective}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline">
              {getCategoryLabel(video.category)}
            </Badge>
            <Badge variant="secondary">
              {video.level === 'principiante' && '🟢 Principiante'}
              {video.level === 'intermedio' && '🟡 Intermedio'}
              {video.level === 'avanzado' && '🔴 Avanzado'}
            </Badge>
          </div>
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-0">
            <CardContent className="pt-6 flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Duración</p>
                <p className="font-semibold">{video.duration} minutos</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0">
            <CardContent className="pt-6 flex items-center gap-3">
              <Target className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Objetivo</p>
                <p className="font-semibold">{getCategoryLabel(video.category)}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Descripción */}
      <Card className="border-0">
        <CardHeader>
          <CardTitle>Descripción</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {video.description}
          </p>
        </CardContent>
      </Card>

      {/* Beneficios */}
      <Card className="border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Beneficios de esta sesión
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {video.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Músculos implicados */}
      <Card className="border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-500" />
            Músculos involucrados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {video.musclesInvolved.map((muscle, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-sm">{muscle}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Botones de acción */}
      <div className="flex gap-3">
        {onBack && (
          <Button 
            variant="outline" 
            onClick={onBack}
            size="lg"
            className="flex-1"
          >
            Volver
          </Button>
        )}
        <Button 
          size="lg"
          className="flex-1"
        >
          Comenzar sesión
        </Button>
      </div>
    </div>
  );
}
