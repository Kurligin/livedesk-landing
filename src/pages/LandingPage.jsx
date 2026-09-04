import React, { useState } from 'react'

import Footer from '@/components/Footer'
import { useToasts, ToastStack } from '@/shared/ui/Toasts'

// Лендинг опубликован без бэкенда: сценарии, которым нужен сервер,
// сообщают об этом вместо неработающего перехода.
const AUTH_UNAVAILABLE = 'Регистрация и вход временно недоступны'
const JOIN_UNAVAILABLE = 'Присоединение к встрече временно недоступно'

export default function LandingPage() {
  const [joinInput, setJoinInput] = useState('')
  const { toasts, addToast, dismiss } = useToasts()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLearnMore = () => {
    scrollToSection('features')
  }

  const handleAuthAction = () => {
    addToast(AUTH_UNAVAILABLE)
  }

  const handleJoin = () => {
    addToast(JOIN_UNAVAILABLE)
  }

  return (
    <>
      {/* Nav */}
      <nav className="landing-nav">
        <a className="landing-nav-brand" href="/">
          <div className="landing-nav-logo">L</div>
          <span className="landing-nav-name">LiveDesk</span>
        </a>
        <div className="landing-nav-links">
          <button
            type="button"
            className="landing-nav-link"
            onClick={() => scrollToSection('features')}
          >
            Возможности
          </button>
          <button
            type="button"
            className="landing-nav-link"
            onClick={() => scrollToSection('pricing')}
          >
            Тарифы
          </button>
          <button
            type="button"
            className="landing-nav-cta"
            onClick={handleAuthAction}
          >
            Войти
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="landing-hero">
        <div className="landing-hero-badge">
          Видеоконференции нового поколения
        </div>
        <h1 className="landing-hero-title">
          Встречи, которые
          <br />
          работают на вас
        </h1>
        <p className="landing-hero-sub">
          Видеозвонки с AI-транскрипцией, демонстрацией экрана и&nbsp;инсайтами
          встречи в реальном времени. Без установки — прямо в браузере.
        </p>
        <div className="landing-hero-actions">
          <button
            type="button"
            className="landing-hero-btn landing-hero-btn-primary"
            onClick={handleAuthAction}
          >
            Попробовать бесплатно
          </button>
          <button
            type="button"
            className="landing-hero-btn landing-hero-btn-secondary"
            onClick={handleLearnMore}
          >
            Узнать больше
          </button>
        </div>
      </section>

      {/* Join bar */}
      <div className="landing-join-bar">
        <div className="landing-join-bar-inner">
          <input
            className="landing-join-input"
            placeholder="Код встречи или ссылка"
            value={joinInput}
            onChange={(e) => setJoinInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
          />
          <button
            type="button"
            className="landing-join-btn"
            onClick={handleJoin}
          >
            Присоединиться
          </button>
        </div>
      </div>

      {/* Features */}
      <section className="landing-features" id="features">
        <div className="landing-features-label">Возможности</div>
        <h2 className="landing-features-title">Всё для продуктивных встреч</h2>
        <div className="landing-features-grid">
          <div className="landing-feature-card">
            <div className="landing-feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="landing-feature-name">HD видеозвонки</div>
            <div className="landing-feature-desc">
              До 200 участников с адаптивным качеством. Работает в любом
              браузере без установки.
            </div>
          </div>
          <div className="landing-feature-card">
            <div className="landing-feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="landing-feature-name">AI Транскрипция</div>
            <div className="landing-feature-desc">
              Автоматический протокол встречи. Речь каждого участника
              распознаётся и сохраняется.
            </div>
          </div>
          <div className="landing-feature-card">
            <div className="landing-feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="landing-feature-name">AI Инсайты</div>
            <div className="landing-feature-desc">
              Темы, вопросы, задачи и резюме генерируются в реальном времени.
              Копилот отвечает на вопросы по встрече.
            </div>
          </div>
          <div className="landing-feature-card">
            <div className="landing-feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="landing-feature-name">Демонстрация экрана</div>
            <div className="landing-feature-desc">
              Показывайте презентации, код или приложения. Качество
              настраивается от 720p до 1080p/60fps.
            </div>
          </div>
          <div className="landing-feature-card">
            <div className="landing-feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="landing-feature-name">Встроенный чат</div>
            <div className="landing-feature-desc">
              Обменивайтесь сообщениями и файлами прямо во время встречи.
              Реакции для быстрого фидбека.
            </div>
          </div>
          <div className="landing-feature-card">
            <div className="landing-feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="landing-feature-name">Шумоподавление</div>
            <div className="landing-feature-desc">
              Интеллектуальный фильтр фоновых шумов. Собеседники слышат только
              ваш голос.
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="landing-pricing" id="pricing">
        <div className="landing-pricing-label">Тарифы</div>
        <h2 className="landing-pricing-title">Выберите подходящий план</h2>
        <p className="landing-pricing-note">
          После оплаты подписка активируется автоматически за 1–2 минуты — все
          функции тарифа сразу становятся доступны в личном кабинете. Никакой
          физической доставки не требуется. Электронный чек придёт на email от
          платёжной системы ЮMoney.
        </p>
        <div className="landing-pricing-grid">
          <div className="landing-pricing-card">
            <div className="landing-pricing-plan">Free</div>
            <div className="landing-pricing-price">0 ₽</div>
            <div className="landing-pricing-desc">Для знакомства</div>
            <ul className="landing-pricing-features">
              <li>До 100 участников</li>
              <li>Видео и аудио</li>
              <li>Демонстрация экрана</li>
              <li>Чат</li>
            </ul>
            <button
              type="button"
              className="landing-pricing-btn landing-pricing-btn-outline"
              onClick={handleAuthAction}
            >
              Начать
            </button>
          </div>
          <div className="landing-pricing-card landing-pricing-card-featured">
            <div className="landing-pricing-plan">Pro</div>
            <div className="landing-pricing-price">
              250 ₽ <span>/мес</span>
            </div>
            <div className="landing-pricing-desc">Для команд</div>
            <ul className="landing-pricing-features">
              <li>Всё из Free</li>
              <li>AI Транскрипция</li>
              <li>До 100 участников</li>
              <li>Шумоподавление</li>
            </ul>
            <button
              type="button"
              className="landing-pricing-btn landing-pricing-btn-primary"
              onClick={handleAuthAction}
            >
              Выбрать
            </button>
          </div>
          <div className="landing-pricing-card">
            <div className="landing-pricing-plan">Pro Max</div>
            <div className="landing-pricing-price">
              800 ₽ <span>/мес</span>
            </div>
            <div className="landing-pricing-desc">Максимум возможностей</div>
            <ul className="landing-pricing-features">
              <li>Всё из Pro</li>
              <li>AI Копилот</li>
              <li>До 200 участников</li>
              <li>Приоритетная поддержка</li>
            </ul>
            <button
              type="button"
              className="landing-pricing-btn landing-pricing-btn-outline"
              onClick={handleAuthAction}
            >
              Выбрать
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="landing-cta">
        <h2 className="landing-cta-title">Готовы к продуктивным встречам?</h2>
        <p className="landing-cta-desc">
          Зарегистрируйтесь бесплатно и создайте первую встречу за 30 секунд.
        </p>
        <button
          type="button"
          className="landing-hero-btn landing-hero-btn-primary"
          onClick={handleAuthAction}
        >
          Начать бесплатно
        </button>
      </section>

      <Footer />

      <ToastStack toasts={toasts} onDismiss={dismiss} />
    </>
  )
}
