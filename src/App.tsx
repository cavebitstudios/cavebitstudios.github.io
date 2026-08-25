import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { ContactPage } from './pages/ContactPage'
import { GameDetailPage } from './pages/GameDetailPage'
import { GamesPage } from './pages/GamesPage'
import { HomePage } from './pages/HomePage'
import { JournalArticlePage } from './pages/JournalArticlePage'
import { JournalPage } from './pages/JournalPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PressPage } from './pages/PressPage'
import { StudioPage } from './pages/StudioPage'
import { captureCampaign } from './lib/campaignTracking'

export function App() {
  useEffect(() => {
    captureCampaign()
  }, [])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="games" element={<GamesPage />} />
          <Route path="games/:slug" element={<GameDetailPage />} />
          <Route path="studio" element={<StudioPage />} />
          <Route path="updates" element={<JournalPage />} />
          <Route path="updates/:slug" element={<JournalArticlePage />} />
          <Route path="journal" element={<Navigate to="/updates" replace />} />
          <Route path="press" element={<PressPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
