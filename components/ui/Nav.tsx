'use client'
// components/ui/Nav.tsx
// Barre de navigation fixe — logo gauche, hint centre, bouton réserver droite

import { useStore } from '@/store/useStore'

const VIEWS = ['Vue spatiale', "Afrique de l'Ouest", 'Carte du Bénin']
const HINTS = ['Faites défiler pour zoomer', 'Cliquez sur une destination', 'Explorez le Bénin']

export default function Nav({ onReserve }: { onReserve: () => void }) {
  const { layer, setCursorMode } = useStore()

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '28px 52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 19,
          fontWeight: 900,
          letterSpacing: '-0.5px',
          color: '#fff',
        }}
      >
        Reboot BJ
      </div>

      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 9,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.2)',
        }}
      >
        <span>{VIEWS[layer]}</span>
        <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
        <span>{HINTS[layer]}</span>
      </div>

      <button
        style={{
          fontSize: 9,
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          border: '1px solid rgba(255,255,255,0.18)',
          color: 'rgba(255,255,255,0.5)',
          padding: '10px 22px',
          background: 'none',
          cursor: 'none',
          transition: 'all 0.25s',
          fontFamily: 'var(--font-dm-sans)',
        }}
        onClick={onReserve}
        onMouseEnter={() => setCursorMode('btn')}
        onMouseLeave={() => setCursorMode('default')}
      >
        Réserver
      </button>
    </div>
  )
}
