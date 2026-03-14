import { useState, useMemo } from 'react'
import { generateMonthPlan, getTodaysPlan, getCurrentWeek } from '@/lib/scheduling'
import { TodaySession } from '@/components/today-session'
import { WeeklyScheduleAuto } from '@/components/weekly-schedule-auto'
import { VideoLibrary } from '@/components/video-library'
import { ProgressTracking } from '@/components/progress-tracking'
import { EducationalSection } from '@/components/educational-section'
import { FeaturesSection } from '@/components/features-section'
import { HeroSection } from '@/components/hero-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  const now = new Date()
  const [completedDays, setCompletedDays] = useState<Set<string>>(new Set())
  
  const monthPlan = useMemo(() => {
    return generateMonthPlan(now.getFullYear(), now.getMonth())
  }, [now])
  
  const todaysPlan = getTodaysPlan(monthPlan)
  const currentWeek = getCurrentWeek(monthPlan)

  const handleCompleteSession = (dayPlan: any) => {
    const dateStr = dayPlan.date.toISOString().split('T')[0]
    const newCompleted = new Set(completedDays)
    newCompleted.add(dateStr)
    setCompletedDays(newCompleted)
  }

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        <section>
          <FeaturesSection />
        </section>

        <section id="today-session" className="scroll-mt-20">
          {todaysPlan && <TodaySession dayPlan={todaysPlan} onComplete={handleCompleteSession} />}
        </section>

        <section>
          {currentWeek && <WeeklyScheduleAuto weekPlan={currentWeek} />}
        </section>

        <section>
          <ProgressTracking 
            completedDays={completedDays} 
            currentMonth={now.getMonth()}
            currentYear={now.getFullYear()}
          />
        </section>

        <section id="videos" className="scroll-mt-20">
          <VideoLibrary />
        </section>

        <section id="benefits" className="scroll-mt-20">
          <EducationalSection />
        </section>
      </div>
      <Footer />
    </main>
  )
}
