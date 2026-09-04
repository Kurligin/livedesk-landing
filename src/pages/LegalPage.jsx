import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

import termsRaw from '@/legal/terms_of_service.md?raw'
import privacyRaw from '@/legal/privacy_policy.md?raw'
import cookiesRaw from '@/legal/cookie_policy.md?raw'
import { applyPlaceholders } from '@/legal/config'

const DEMO_NOTICE =
  'Демонстрационная публикация: реквизиты оператора заменены на условные.'

const DOCS = {
  terms: { title: 'Пользовательское соглашение', source: termsRaw },
  privacy: { title: 'Политика конфиденциальности', source: privacyRaw },
  cookies: { title: 'Файлы cookie', source: cookiesRaw }
}

marked.setOptions({ gfm: true, breaks: false })

function renderMarkdown(source) {
  const rawHtml = marked.parse(applyPlaceholders(source))
  // Content is repo-owned, but sanitize anyway as defense-in-depth.
  return DOMPurify.sanitize(rawHtml)
}

export default function LegalPage({ kind }) {
  const doc = DOCS[kind]

  const html = useMemo(() => {
    if (!doc) return ''
    return renderMarkdown(doc.source)
  }, [doc])

  if (!doc) {
    return (
      <main className="legal-shell">
        <div className="legal-card">
          <h1>Документ не найден</h1>
          <p>
            <Link to="/legal">Назад к списку</Link>
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="legal-shell">
      <div className="legal-card">
        <nav className="legal-nav">
          <Link to="/">← На главную</Link>
          <span className="legal-nav-sep">·</span>
          <Link to="/legal">Все документы</Link>
        </nav>
        <p className="legal-lead">{DEMO_NOTICE}</p>
        <article
          className="legal-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  )
}

export function LegalIndexPage() {
  return (
    <main className="legal-shell">
      <div className="legal-card">
        <nav className="legal-nav">
          <Link to="/">← На главную</Link>
        </nav>
        <h1>Юридические документы</h1>
        <p className="legal-lead">
          Полные тексты соглашений, политик и уведомлений, регулирующих
          использование сервиса LiveDesk. {DEMO_NOTICE}
        </p>
        <ul className="legal-index">
          <li>
            <Link to="/terms">Пользовательское соглашение (оферта)</Link>
            <p>Условия использования сервиса, тарифы, возврат средств.</p>
          </li>
          <li>
            <Link to="/privacy">Политика обработки персональных данных</Link>
            <p>Какие данные мы собираем, для чего и кому передаём.</p>
          </li>
          <li>
            <Link to="/cookies">Файлы cookie</Link>
            <p>Какие cookies используются и для чего.</p>
          </li>
        </ul>
      </div>
    </main>
  )
}
