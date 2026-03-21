import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { EducationalSection } from '@/components/educational-section';

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Sobre FitDailyMG</h1>
          <p className="text-lg text-muted-foreground">
            Aprende sobre nuestra metodología y los beneficios que te ofrecemos
          </p>
        </div>

        <EducationalSection />
      </div>
    </main>
  );
}
