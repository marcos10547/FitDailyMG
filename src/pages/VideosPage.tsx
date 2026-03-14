import { useNavigate } from 'react-router-dom';
import { VideoLibrary } from '@/components/video-library';

export default function VideosPage() {
  const navigate = useNavigate();

  const handleSelectVideo = (videoId: string) => {
    navigate(`/videos/${videoId}`);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Biblioteca de ejercicios</h1>
          <p className="text-lg text-muted-foreground">
            Explora nuestro catálogo completo de videos de movilidad, estiramientos y equilibrio
          </p>
        </div>
        <VideoLibrary onSelectVideo={handleSelectVideo} />
      </div>
    </main>
  );
}
