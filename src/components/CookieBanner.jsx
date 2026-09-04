import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'livedesk_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true)
      }
    } catch {
      // localStorage unavailable (e.g. private mode) — don't show banner
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ accepted_at: new Date().toISOString(), version: 1 })
      )
    } catch {
      /* best-effort */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="cookie-banner"
      role="region"
      aria-label="Уведомление об использовании cookies"
    >
      <div className="cookie-banner-text">
        Мы используем технические cookies для авторизации и работы сайта.
        Аналитические и рекламные cookies не используются.{' '}
        <Link to="/cookies" className="cookie-banner-link">
          Подробнее
        </Link>
      </div>
      <button
        type="button"
        className="cookie-banner-btn"
        onClick={accept}
        aria-label="Принять условия использования cookies"
      >
        Понятно
      </button>
    </div>
  )
}
