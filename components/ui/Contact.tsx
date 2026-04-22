'use client'
// components/ui/Contact.tsx
// Modal contact plein écran — formulaire devis + WhatsApp

import { useState } from 'react'
import { useStore } from '@/store/useStore'

export default function Contact({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { setCursorMode } = useStore()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(onClose, 3000)
  }

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(5,4,2,0.97)',
        zIndex: 600,
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
        transition: 'opacity 0.4s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: 460, width: '100%', padding: '56px 48px', position: 'relative' }}>
        <button
          onClick={onClose}
          onMouseEnter={() => setCursorMode('btn')}
          onMouseLeave={() => setCursorMode('default')}
          style={{
            position: 'absolute',
            top: 16,
            right: 0,
            background: 'none',
            border: 'none',
            fontSize: 18,
            color: 'rgba(255,255,255,0.2)',
            cursor: 'none',
            transition: 'color 0.2s',
          }}
        >
          ×
        </button>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 36, marginBottom: 12 }}>✓</div>
            <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 22, marginBottom: 6 }}>
              Envoyé.
            </div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>
              Réponse sous 24h.
            </div>
          </div>
        ) : (
          <>
            <div
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 38,
                fontWeight: 900,
                letterSpacing: -1.5,
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              Parlons de
              <br />
              votre voyage.
            </div>
            <div
              style={{
                fontSize: 9,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.2)',
                marginBottom: 44,
              }}
            >
              Devis gratuit · Réponse sous 24h
            </div>

            <form onSubmit={handleSubmit}>
              {['Votre prénom', 'Email', 'WhatsApp (+229...)'].map((ph, i) => (
                <input
                  key={ph}
                  type={i === 1 ? 'email' : i === 2 ? 'tel' : 'text'}
                  placeholder={ph}
                  required={i < 2}
                  style={{
                    width: '100%',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    padding: '14px 0',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 13,
                    color: '#fff',
                    background: 'none',
                    outline: 'none',
                    fontWeight: 300,
                    marginBottom: 22,
                    cursor: 'none',
                  }}
                />
              ))}

              <select
                style={{
                  width: '100%',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  padding: '14px 0',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 13,
                  color: '#fff',
                  background: '#050402',
                  outline: 'none',
                  fontWeight: 300,
                  marginBottom: 22,
                  cursor: 'none',
                }}
              >
                <option>Votre demande</option>
                <option>Réservation circuit</option>
                <option>Devis sur mesure</option>
                <option>Question générale</option>
              </select>

              <textarea
                rows={3}
                placeholder="Votre message..."
                style={{
                  width: '100%',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  padding: '14px 0',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 13,
                  color: '#fff',
                  background: 'none',
                  outline: 'none',
                  fontWeight: 300,
                  marginBottom: 22,
                  resize: 'none',
                  cursor: 'none',
                }}
              />

              <button
                type="submit"
                onMouseEnter={() => setCursorMode('btn')}
                onMouseLeave={() => setCursorMode('default')}
                style={{
                  width: '100%',
                  background: '#fff',
                  color: '#000',
                  border: 'none',
                  padding: 15,
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  cursor: 'none',
                  transition: 'background 0.2s',
                }}
              >
                Envoyer →
              </button>
            </form>

            <a
              href="https://wa.me/22900000000"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                textAlign: 'center',
                marginTop: 16,
                fontSize: 9,
                letterSpacing: '2px',
                color: '#25D366',
                textDecoration: 'none',
                opacity: 0.5,
              }}
            >
              💬 WhatsApp direct
            </a>
          </>
        )}
      </div>
    </div>
  )
}
