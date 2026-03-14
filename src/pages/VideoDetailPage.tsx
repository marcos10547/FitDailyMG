import { useParams, useNavigate } from 'react-router-dom';
import { getVideoById } from '@/lib/video-data';
import { VideoDetail } from '@/components/video-detail';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function VideoDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const video = getVideoById(id || '');

  if (!video) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Video no encontrado</h1>
          <p className="text-muted-foreground">El video que buscas no existe.</p>
          <Button onClick={() => navigate('/videos')}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Volver a la biblioteca
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Atrás
        </Button>
        <VideoDetail 
          video={video}
          onBack={() => navigate(-1)}
        />
      </div>
    </main>
  );
}
