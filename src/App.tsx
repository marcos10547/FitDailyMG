import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/navbar'
import HomePage from '@/pages/HomePage'
import MonthPage from '@/pages/MonthPage'
import ProgressPage from '@/pages/ProgressPage'
import VideosPage from '@/pages/VideosPage'
import VideoDetailPage from '@/pages/VideoDetailPage'
import SessionPage from '@/pages/SessionPage'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/month" element={<MonthPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/videos/:id" element={<VideoDetailPage />} />
        <Route path="/sesion/:slug" element={<SessionPage />} />
      </Routes>
    </>
  )
}
