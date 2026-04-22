'use client'
// components/ui/Breadcrumb.tsx
// Fil d'ariane : Afrique > Afrique de l'Ouest > Bénin > Destination

import { useStore } from '@/store/useStore'

export default function Breadcrumb({ onNav }: { onNav: (n: 0 | 1 | 2) => void }) {
  const { layer, activeDest, panelOpen } = useStore()

  const visible = layer > 0 || panelOpen

  const segments = [
    { label: 'Afrique', show: true, active: layer === 0 && !panelOpen, onClick: () => onNav(0) },
    { label: "Afrique de l'Ouest", show: layer >= 1, active: layer === 1 && !panelOpen, onClick: () => onNav(1) },
    { label: 'Bénin', show: layer >= 2, active: layer === 2 && !panelOpen, onClick: () => onNav(2) },
  ]

  return (
    <div
      style={{
        position: 'fixed',
        top: 84,
        left: 52,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s',
      }}
    >
      {segments.map((seg, i) =>
        seg.show ? (
          <span key={seg.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {i > 0 && (
              <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: 9 }}>›</span>
            )}
            <span
              onClick={seg.onClick}
              style={{
                fontSize: 9,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: seg.active ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)',
                cursor: 'none',
                transition: 'color 0.2s',
              }}
            >
              {seg.label}
            </span>
          </span>
        ) : null
      )}
      {panelOpen && activeDest && (
        <>
          <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: 9 }}>›</span>
          <span
            style={{
              fontSize: 9,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            {activeDest.charAt(0).toUpperCase() + activeDest.slice(1)}
          </span>
        </>
      )}
    </div>
  )
}
