import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="page-centered">
      <div className="glow"></div>
      <div className="nf-content">
        <div className="nf-code">404</div>
        <div className="nf-title">Страница не найдена</div>
        <div className="nf-desc">
          Возможно, ссылка устарела или уже недействительна
        </div>
        <button className="nf-btn" onClick={() => navigate('/')}>
          На главную
        </button>
      </div>
    </div>
  )
}
