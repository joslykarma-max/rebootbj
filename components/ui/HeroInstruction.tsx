'use client'
// components/ui/HeroInstruction.tsx
// Texte hero "Le Bénin, vu de l'espace." + indication scroll — visible au niveau 0

import { useStore } from '@/store/useStore'

export default function HeroInstruction() {
  const { layer } = useStore()
  const visible = layer === 0

  return (
    <>
      {/* Texte hero bas gauche */}
      <div
        style={{
          position: 'fixed',
          bottom: 72,
          left: 52,
          zIndex: 100,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.6s, transform 0.6s',
          pointerEvents: visible ? 'all' : 'none',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(32px, 5vw, 64px)',
            fontWeight: 900,
            letterSpacing: '-2px',
            lineHeight: 0.95,
            marginBottom: 12,
          }}
        >
          Le Bénin,
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.35)' }}>
            vu de l&apos;espace.
          </em>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 9,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)',
          }}
        >
          <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.15)' }} />
          Défiler pour plonger
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'fixed',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: 24,
            height: 36,
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 12,
            position: 'relative',
          }}
        >
          <div
            style={{
              width: 3,
              height: 6,
              background: 'rgba(255,255,255,0.4)',
              borderRadius: 2,
              position: 'absolute',
              left: '50%',
              top: 6,
              transform: 'translateX(-50%)',
              animation: 'scrollDot 1.8s ease-in-out infinite',
            }}
          />
        </div>
        <div
          style={{
            fontSize: 8,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.15)',
          }}
        >
          Molette · Scroll · Touch
        </div>
      </div>
    </>
  )
}
