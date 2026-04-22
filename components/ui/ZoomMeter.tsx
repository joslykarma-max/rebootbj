'use client'
// components/ui/ZoomMeter.tsx
// Indicateur de zoom vertical — barre droite, % affiché

import { useStore } from '@/store/useStore'

export default function ZoomMeter() {
  const { layer } = useStore()
  const pct = Math.round((layer / 2) * 100)

  return (
    <div
      style={{
        position: 'fixed',
        right: 52,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        opacity: 1,
        transition: 'opacity 0.5s',
      }}
    >
      <div
        style={{
          fontSize: 8,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.2)',
          writingMode: 'vertical-rl',
        }}
      >
        Zoom
      </div>
      <div
        style={{
          width: 1,
          height: 140,
          background: 'rgba(255,255,255,0.08)',
          position: 'relative',
        }}
      >
        {/* Barre de remplissage */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: `${pct}%`,
            background: '#fff',
            transition: 'height 0.8s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        />
        {/* Dot indicateur */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 5,
            height: 5,
            background: '#fff',
            borderRadius: '50%',
            bottom: `${pct}%`,
            transition: 'bottom 0.8s cubic-bezier(0.25,0.46,0.45,0.94)',
            boxShadow: '0 0 8px rgba(255,255,255,0.5)',
          }}
        />
      </div>
      <div
        style={{
          fontSize: 9,
          letterSpacing: '1px',
          color: 'rgba(255,255,255,0.25)',
          marginTop: 4,
        }}
      >
        {pct}%
      </div>
    </div>
  )
}
