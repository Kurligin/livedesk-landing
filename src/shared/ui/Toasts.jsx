import React, { useCallback, useEffect, useRef, useState } from 'react'

export function useToasts() {
  const [toasts, setToasts] = useState([])
  const timersRef = useRef({})

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
    clearTimeout(timersRef.current[id])
    delete timersRef.current[id]
  }, [])

  const addToast = useCallback(
    (message) => {
      if (!message) return
      const id = Date.now() + Math.random()
      setToasts((prev) => [...prev, { id, message }])
      timersRef.current[id] = setTimeout(() => dismiss(id), 5000)
    },
    [dismiss]
  )

  useEffect(() => {
    const timers = timersRef.current
    return () => Object.values(timers).forEach(clearTimeout)
  }, [])

  return { toasts, addToast, dismiss }
}

export function ToastStack({ toasts, onDismiss }) {
  if (toasts.length === 0) return null
  return (
    <div className="toast-stack">
      {toasts.map((t) => (
        <div key={t.id} className="toast-item">
          <span className="toast-message">{t.message}</span>
          <button
            type="button"
            className="toast-close"
            onClick={() => onDismiss(t.id)}
            aria-label="Закрыть"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}
