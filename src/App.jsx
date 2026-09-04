import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from '@/router'
import CookieBanner from '@/components/CookieBanner'
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary'
import { AppCrashFallback } from '@/shared/ui/AppCrashFallback'

export default function App() {
  return (
    <ErrorBoundary fallback={<AppCrashFallback />}>
      <BrowserRouter>
        <AppRouter />
        <CookieBanner />
      </BrowserRouter>
    </ErrorBoundary>
  )
}
