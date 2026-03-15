import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap, BarChart3, Calendar, Video } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/logo-full.png" 
            alt="FitDailyMG Logo" 
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <Link to="/">
            <Button variant="ghost" size="sm">
              Inicio
            </Button>
          </Link>
          <Link to="/videos">
            <Button variant="ghost" size="sm" className="gap-2">
              <Video className="w-4 h-4" />
              Videos
            </Button>
          </Link>
          <Link to="/month">
            <Button variant="ghost" size="sm" className="gap-2">
              <Calendar className="w-4 h-4" />
              Planificación
            </Button>
          </Link>
          <Link to="/progress">
            <Button variant="ghost" size="sm" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              Progreso
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-2 mt-8">
                <Link to="/">
                  <Button variant="ghost" className="w-full justify-start">
                    Inicio
                  </Button>
                </Link>
                <Link to="/videos">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Video className="w-4 h-4" />
                    Videos
                  </Button>
                </Link>
                <Link to="/month">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Calendar className="w-4 h-4" />
                    Planificación
                  </Button>
                </Link>
                <Link to="/progress">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Progreso
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
