import React from 'react'

export function AppCrashFallback({ error, onReset }) {
  return (
    <main className="page">
      <div className="card notfound-card">
        <h2>Произошла ошибка интерфейса</h2>
        <p className="page-lead">
          Обновите страницу. Если проблема повторяется, попробуйте позже.
        </p>
        {error?.message ? (
          <p className="chat-error-text">Детали: {error.message}</p>
        ) : null}
        <div className="landing-actions">
          <button type="button" onClick={onReset}>
            Попробовать снова
          </button>
          <button
            type="button"
            className="secondary-btn"
            onClick={() => window.location.reload()}
          >
            Обновить страницу
          </button>
        </div>
      </div>
    </main>
  )
}
