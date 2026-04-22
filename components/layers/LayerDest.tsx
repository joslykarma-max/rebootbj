'use client'
// components/layers/LayerDest.tsx
// Niveau 2 — Fond immersif par destination active (emoji géant + gradient)

import { useStore } from '@/store/useStore'
import { DESTINATIONS_MAP } from '@/data/destinations'

export default function LayerDest() {
  const { activeDest } = useStore()
  const dest = activeDest ? DESTINATIONS_MAP[activeDest] : null

  if (!dest) return null

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {/* Fond gradient destination */}
      <div style={{ position: 'absolute', inset: 0, background: dest.bg }} />

      {/* Emoji géant translucide */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <span
          style={{
            fontSize: 240,
            opacity: 0.04,
            userSelect: 'none',
            animation: 'float 8s ease-in-out infinite',
          }}
        >
          {dest.emoji}
        </span>
      </div>

      {/* Nom destination géant */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'min(14vw, 140px)',
            fontWeight: 900,
            color: 'rgba(255,255,255,0.035)',
            letterSpacing: -4,
            lineHeight: 1,
            textAlign: 'center',
          }}
        >
          {dest.title.toUpperCase()}
        </div>
      </div>

      {/* Gradient vignette bas */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(to top, rgba(5,4,2,1), transparent)',
        }}
      />
    </div>
  )
}
