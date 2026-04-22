'use client'
// components/ui/Panel.tsx
// Panneau destination droit — 400px, glisse depuis la droite

import { useStore } from '@/store/useStore'
import { DESTINATIONS_MAP } from '@/data/destinations'

export default function Panel({ onReserve }: { onReserve: () => void }) {
  const { panelOpen, activeDest, closeDest, setCursorMode } = useStore()
  const dest = activeDest ? DESTINATIONS_MAP[activeDest] : null

  const handleClose = () => {
    closeDest()
  }

  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        width: 400,
        background: '#050402',
        zIndex: 200,
        transform: panelOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)',
        overflowY: 'auto',
        borderLeft: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Bouton fermer */}
      <button
        onClick={handleClose}
        onMouseEnter={() => setCursorMode('btn')}
        onMouseLeave={() => setCursorMode('default')}
        style={{
          position: 'fixed',
          top: 24,
          right: 24,
          width: 36,
          height: 36,
          background: 'rgba(255,255,255,0.04)',
          border: 'none',
          color: 'rgba(255,255,255,0.3)',
          cursor: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
          zIndex: 201,
          transition: 'all 0.2s',
        }}
      >
        ×
      </button>

      {dest && (
        <>
          {/* Zone visuelle 220px */}
          <div
            style={{
              height: 220,
              position: 'relative',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: dest.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontSize: 100,
                  opacity: 0.06,
                  userSelect: 'none',
                  animation: 'float 8s ease-in-out infinite',
                }}
              >
                {dest.emoji}
              </span>
            </div>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 72,
                  fontWeight: 900,
                  color: 'rgba(255,255,255,0.04)',
                  letterSpacing: -3,
                  lineHeight: 1,
                }}
              >
                {dest.title.toUpperCase()}
              </span>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 80,
                background: 'linear-gradient(to top, #050402, transparent)',
              }}
            />
          </div>

          {/* Corps du panneau */}
          <div style={{ padding: '36px 36px 48px' }}>
            <div
              style={{
                fontSize: 8,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
                marginBottom: 10,
              }}
            >
              {dest.tag}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 38,
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: -1.5,
                marginBottom: 6,
              }}
            >
              {dest.title}
            </div>
            <div
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.3)',
                fontWeight: 300,
                lineHeight: 1.5,
                marginBottom: 28,
              }}
            >
              {dest.sub}
            </div>
            <div
              style={{
                fontSize: 13,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.45)',
                fontWeight: 300,
                marginBottom: 20,
              }}
            >
              {dest.text}
            </div>
            <div
              style={{
                borderLeft: '1px solid #E8820C',
                padding: '12px 18px',
                margin: '20px 0',
                fontStyle: 'italic',
                fontSize: 12,
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.7,
                background: 'rgba(232,130,12,0.03)',
              }}
            >
              {dest.quote}
            </div>

            {/* Tableau infos pratiques */}
            <div style={{ margin: '24px 0', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {dest.rows.map((row) => (
                <div
                  key={row.k}
                  style={{
                    display: 'flex',
                    gap: 16,
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  <span
                    style={{
                      fontSize: 8,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.18)',
                      minWidth: 72,
                      paddingTop: 1,
                    }}
                  >
                    {row.k}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.45)',
                      fontWeight: 300,
                      lineHeight: 1.5,
                    }}
                  >
                    {row.v}
                  </span>
                </div>
              ))}
            </div>

            {/* Prix */}
            <div
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: 20,
                margin: '24px 0',
                display: 'flex',
                alignItems: 'baseline',
                gap: 10,
              }}
            >
              <span
                style={{
                  fontSize: 8,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.18)',
                }}
              >
                À partir de
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 36,
                  fontWeight: 900,
                  lineHeight: 1,
                }}
              >
                {dest.price}
              </span>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>FCFA</span>
            </div>

            {/* Boutons */}
            <button
              onClick={onReserve}
              onMouseEnter={() => setCursorMode('btn')}
              onMouseLeave={() => setCursorMode('default')}
              style={{
                display: 'block',
                width: '100%',
                padding: 15,
                textAlign: 'center',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                cursor: 'none',
                transition: 'all 0.25s',
                marginBottom: 10,
                border: 'none',
                background: '#fff',
                color: '#000',
              }}
            >
              Réserver ce circuit →
            </button>
            <button
              onClick={handleClose}
              onMouseEnter={() => setCursorMode('btn')}
              onMouseLeave={() => setCursorMode('default')}
              style={{
                display: 'block',
                width: '100%',
                padding: 15,
                textAlign: 'center',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                cursor: 'none',
                transition: 'all 0.25s',
                background: 'none',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.3)',
              }}
            >
              ← Retour à la carte
            </button>
          </div>
        </>
      )}
    </div>
  )
}
