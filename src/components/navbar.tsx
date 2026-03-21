import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart3, Calendar, Video, Home, Dumbbell, Map, HelpCircle, Mail, Clock } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Navbar() {
  const location = useLocation();

  const getButtonVariant = (path: string) => {
    return location.pathname === path ? 'default' : 'ghost';
  };
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
        <div className="hidden lg:flex items-center gap-1">
          <Link to="/">
            <Button variant={getButtonVariant("/")} size="sm" className="gap-2">
              <Home className="w-4 h-4" />
              Inicio
            </Button>
          </Link>
          <Link to="/planificacion">
            <Button variant={getButtonVariant("/planificacion")} size="sm" className="gap-2">
              <Dumbbell className="w-4 h-4" />
              Semana
            </Button>
          </Link>
          <Link to="/mensual">
            <Button variant={getButtonVariant("/mensual")} size="sm" className="gap-2">
              <Calendar className="w-4 h-4" />
              Mes
            </Button>
          </Link>
          <Link to="/hoy">
            <Button variant={getButtonVariant("/hoy")} size="sm" className="gap-2">
              <Clock className="w-4 h-4" />
              Hoy
            </Button>
          </Link>
          <Link to="/biblioteca">
            <Button variant={getButtonVariant("/biblioteca")} size="sm" className="gap-2">
              <Video className="w-4 h-4" />
              Biblioteca
            </Button>
          </Link>
          <Link to="/seguimiento">
            <Button variant={getButtonVariant("/seguimiento")} size="sm" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              Seguimiento
            </Button>
          </Link>
          <Link to="/sobre">
            <Button variant={getButtonVariant("/sobre")} size="sm" className="gap-2">
              <HelpCircle className="w-4 h-4" />
              Sobre FitDailyMG
            </Button>
          </Link>
          <Link to="/contacto">
            <Button variant={getButtonVariant("/contacto")} size="sm" className="gap-2">
              <Mail className="w-4 h-4" />
              Contacto
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
                  <Button variant={getButtonVariant("/")} className="w-full justify-start gap-2">
                    <Home className="w-4 h-4" />
                    Inicio
                  </Button>
                </Link>
                <Link to="/planificacion">
                  <Button variant={getButtonVariant("/planificacion")} className="w-full justify-start gap-2">
                    <Dumbbell className="w-4 h-4" />
                    Semana
                  </Button>
                </Link>
                <Link to="/mensual">
                  <Button variant={getButtonVariant("/mensual")} className="w-full justify-start gap-2">
                    <Calendar className="w-4 h-4" />
                    Mes
                  </Button>
                </Link>
                <Link to="/hoy">
                  <Button variant={getButtonVariant("/hoy")} className="w-full justify-start gap-2">
                    <Clock className="w-4 h-4" />
                    Hoy
                  </Button>
                </Link>
                <Link to="/biblioteca">
                  <Button variant={getButtonVariant("/biblioteca")} className="w-full justify-start gap-2">
                    <Video className="w-4 h-4" />
                    Biblioteca
                  </Button>
                </Link>
                <Link to="/seguimiento">
                  <Button variant={getButtonVariant("/seguimiento")} className="w-full justify-start gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Seguimiento
                  </Button>
                </Link>
                <Link to="/sobre">
                  <Button variant={getButtonVariant("/sobre")} className="w-full justify-start gap-2">
                    <HelpCircle className="w-4 h-4" />
                    Sobre FitDailyMG
                  </Button>
                </Link>
                <Link to="/contacto">
                  <Button variant={getButtonVariant("/contacto")} className="w-full justify-start gap-2">
                    <Mail className="w-4 h-4" />
                    Contacto
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
