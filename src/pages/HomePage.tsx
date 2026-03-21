import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompletedDays } from '@/hooks/use-completed-days'
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
  const navigate = useNavigate();
  const now = new Date()
  const { completedDays, addCompletedDay } = useCompletedDays()
  
  const monthPlan = useMemo(() => {
    return generateMonthPlan(now.getFullYear(), now.getMonth())
  }, [now])
  
  const todaysPlan = useMemo(() => {
    const plan = getTodaysPlan(monthPlan);
    if (plan) {
      plan.completed = completedDays.has(plan.date.toISOString().split('T')[0]);
    }
    return plan;
  }, [monthPlan, completedDays]);

  const currentWeek = useMemo(() => {
    const week = getCurrentWeek(monthPlan);
    if (week) {
      week.days.forEach(d => {
        d.completed = completedDays.has(d.date.toISOString().split('T')[0]);
      });
    }
    return week;
  }, [monthPlan, completedDays]);

  const handleCompleteSession = (dayPlan: any) => {
    const dateStr = dayPlan.date.toISOString().split('T')[0]
    addCompletedDay(dateStr)
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
          <VideoLibrary onSelectVideo={(id) => navigate(`/videos/${id}`)} />
        </section>

        <section id="benefits" className="scroll-mt-20">
          <EducationalSection />
        </section>
      </div>
      <Footer />
    </main>
  )
}
