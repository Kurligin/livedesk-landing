import React from 'react'
import { Link } from 'react-router-dom'

import { LEGAL_CONFIG } from '@/legal/config'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-col site-footer-col--brand">
          <div className="site-footer-brand">LiveDesk</div>
          <p className="site-footer-tagline">
            Видеоконференции, стримы и AI-ассистент. Сервис в режиме открытого
            тестирования.
          </p>
        </div>

        <div className="site-footer-col">
          <div className="site-footer-heading">Документы</div>
          <ul>
            <li>
              <Link to="/terms">Пользовательское соглашение</Link>
            </li>
            <li>
              <Link to="/privacy">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link to="/cookies">Файлы cookie</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer-col">
          <div className="site-footer-heading">Контакты</div>
          <ul>
            <li>
              Email:{' '}
              <a href={`mailto:${LEGAL_CONFIG.CONTACT_EMAIL}`}>
                {LEGAL_CONFIG.CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>© {year} LiveDesk. Все права защищены.</span>
      </div>
    </footer>
  )
}
