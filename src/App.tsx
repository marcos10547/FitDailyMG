import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/navbar'
import HomePage from '@/pages/HomePage'
import PlanificacionPage from '@/pages/PlanificacionPage'
import MensualPage from '@/pages/MensualPage'
import HoyPage from '@/pages/HoyPage'
import BibliotecaPage from '@/pages/BibliotecaPage'
import SeguimientoPage from '@/pages/SeguimientoPage'
import SobrePage from '@/pages/SobrePage'
import ContactoPage from '@/pages/ContactoPage'
import VideoDetailPage from '@/pages/VideoDetailPage'
import SessionPage from '@/pages/SessionPage'

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: any}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red', fontFamily: 'monospace' }}>
          <h1>Algo salió mal en el renderizado</h1>
          <pre>{this.state.error?.toString()}</pre>
          <pre>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planificacion" element={<PlanificacionPage />} />
        <Route path="/mensual" element={<MensualPage />} />
        <Route path="/hoy" element={<HoyPage />} />
        <Route path="/biblioteca" element={<BibliotecaPage />} />
        <Route path="/seguimiento" element={<SeguimientoPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        
        {/* Dynamic Details */}
        <Route path="/videos/:id" element={<VideoDetailPage />} />
        <Route path="/sesion/:slug" element={<SessionPage />} />
      </Routes>
    </ErrorBoundary>
  )
}
