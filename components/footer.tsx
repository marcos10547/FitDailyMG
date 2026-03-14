import { Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="px-4 py-12 border-t bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">FitDailyMG</h3>
            <p className="text-sm text-muted-foreground">
              Tu planificador automático de ejercicios inteligente
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-muted-foreground hover:text-foreground">
                  Biblioteca de videos
                </Link>
              </li>
              <li>
                <Link href="/month" className="text-muted-foreground hover:text-foreground">
                  Planificación mensualñ
                </Link>
              </li>
              <li>
                <Link href="/progress" className="text-muted-foreground hover:text-foreground">
                  Mi progreso
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Categorías</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Gimnasio</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Estiramientos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Movilidad</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Equilibrio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Información</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Sobre nosotros</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contacto</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacidad</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4 md:mb-0">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-rose-500" fill="currentColor" />
            <span>para tu salud</span>
          </div>
          <div className="text-xs text-muted-foreground">
            © 2024 FitDailyMG. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
