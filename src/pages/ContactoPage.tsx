import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ChevronLeft, Send, CheckCircle2 } from 'lucide-react';

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Contacto</CardTitle>
            <CardDescription className="text-lg">
              ¿Tienes alguna duda o sugerencia? Envíanos un mensaje y te responderemos lo antes posible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSuccess ? (
              <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg text-center border border-green-200 dark:border-green-800 flex flex-col items-center gap-4">
                <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">¡Mensaje enviado con éxito!</h3>
                  <p className="text-muted-foreground">
                    Gracias por contactarnos. Te responderemos muy pronto.
                  </p>
                </div>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none font-semibold">
                    Nombre completo
                  </label>
                  <Input id="name" required placeholder="Ej. Ana Pérez" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none font-semibold">
                    Correo electrónico
                  </label>
                  <Input id="email" type="email" required placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none font-semibold">
                    Tu mensaje
                  </label>
                  <textarea 
                    id="message" 
                    required 
                    rows={5}
                    placeholder="Escribe tu mensaje aquí..."
                    className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full gap-2 text-md h-12" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      Enviar mensaje
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
