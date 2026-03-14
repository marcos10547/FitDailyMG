'use client';

import { useParams, useRouter } from 'next/navigation';
import { getVideoById } from '@/lib/video-data';
import { VideoDetail } from '@/components/video-detail';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function VideoPage() {
  const params = useParams();
  const router = useRouter();
  const videoId = params.id as string;
  const video = getVideoById(videoId);

  if (!video) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Video no encontrado</h1>
          <p className="text-muted-foreground">El video que buscas no existe.</p>
          <Button onClick={() => router.push('/videos')}>
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
          onClick={() => router.back()}
          className="mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Atrás
        </Button>
        <VideoDetail 
          video={video}
          onBack={() => router.back()}
        />
      </div>
    </main>
  );
}
