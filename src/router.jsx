import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const LandingPage = lazy(() => import('@/pages/LandingPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
const LegalPage = lazy(() => import('@/pages/LegalPage'))
const LegalIndexPage = lazy(() =>
  import('@/pages/LegalPage').then((m) => ({ default: m.LegalIndexPage }))
)

function RouteLoader() {
  return (
    <main className="page">
      <div className="card">
        <p className="page-lead">Загрузка...</p>
      </div>
    </main>
  )
}

export default function AppRouter() {
  return (
    <Suspense fallback={<RouteLoader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/legal" element={<LegalIndexPage />} />
        <Route path="/terms" element={<LegalPage kind="terms" />} />
        <Route path="/privacy" element={<LegalPage kind="privacy" />} />
        <Route path="/cookies" element={<LegalPage kind="cookies" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
