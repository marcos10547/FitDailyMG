import { useState } from 'react';
import { VIDEOS, getCategoryLabel, getAllCategories } from '@/lib/video-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Activity, Zap, Shield, Clock, LayoutGrid } from 'lucide-react';

interface VideoLibraryProps {
  onSelectVideo?: (videoId: string) => void;
}

function getCategoryIcon(category: string) {
  switch (category) {
    case 'back-mobility':
      return <Shield className="w-4 h-4" />; // Spine/Back icon
    case 'balance-coord':
      return <Activity className="w-4 h-4" />; // Balance icon
    default:
      return <LayoutGrid className="w-4 h-4" />;
  }
}

function getCategoryGradient(category: string) {
  switch (category) {
    case 'back-mobility':
      return 'from-emerald-100 to-green-50 dark:from-emerald-900 dark:to-green-950';
    case 'balance-coord':
      return 'from-blue-100 to-cyan-50 dark:from-blue-900 dark:to-cyan-950';
    default:
      return 'from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-950';
  }
}

export function VideoLibrary({ onSelectVideo }: VideoLibraryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Only use the two main categories requested
  const categories = ['back-mobility', 'balance-coord'];
  
  const filteredVideos = selectedCategory 
    ? VIDEOS.filter(v => v.category === selectedCategory)
    : VIDEOS;

  return (
    <div className="space-y-6">
      <Card className="border-0">
        <CardHeader>
          <CardTitle className="text-2xl">Biblioteca de ejercicios</CardTitle>
          <CardDescription>
            Explora nuestra colección de sesiones de espalda sana, movilidad, equilibrio y coordinación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(null)}
              size="sm"
            >
              Todos ({VIDEOS.length})
            </Button>
            {categories.map(category => {
              const count = VIDEOS.filter(v => v.category === category).length;
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  <span className="mr-2">{getCategoryIcon(category)}</span>
                  {getCategoryLabel(category)} ({count})
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVideos.map(video => (
          <Card 
            key={video.id} 
            className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onSelectVideo?.(video.id)}
          >
            <div className={`h-40 bg-gradient-to-br ${getCategoryGradient(video.category)} flex items-center justify-center rounded-t-lg border-b`}>
              <div className="text-center">
                <div className="text-4xl mb-2">{getCategoryIcon(video.category)}</div>
                <p className="text-sm font-medium text-muted-foreground">
                  {getCategoryLabel(video.category)}
                </p>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{video.title}</CardTitle>
              <CardDescription className="text-sm">{video.objective}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between pb-4">
              <div className="space-y-3">
                <div>
                  <Badge variant="secondary" className="text-xs">
                    {video.level === 'principiante' && '🟢 Principiante'}
                    {video.level === 'intermedio' && '🟡 Intermedio'}
                    {video.level === 'avanzado' && '🔴 Avanzado'}
                  </Badge>
                </div>
              </div>
              <Button
                onClick={() => onSelectVideo?.(video.id)}
                className="w-full mt-4"
                size="sm"
              >
                Ver video
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <Card className="text-center py-12">
          <p className="text-muted-foreground">No hay videos en esta categoría</p>
        </Card>
      )}
    </div>
  );
}
