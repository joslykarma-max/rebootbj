'use client'
// components/layers/LayerSpace.tsx
// Niveau 0 — Globe 3D WebGL avec vraie carte du Bénin + nébuleuses

import dynamic from 'next/dynamic'

// Import dynamique (pas de SSR — WebGL nécessite le browser)
const Globe3D = dynamic(() => import('@/components/globe/Globe3D'), {
  ssr: false,
  loading: () => null,
})

export default function LayerSpace() {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {/* Nébuleuses en arrière-plan */}
      {[
        { w: 600, h: 400, bg: '#0A2010', top: '10%', left: '5%', dur: '18s', delay: '0s' },
        { w: 400, h: 300, bg: '#081520', top: '60%', right: '10%', dur: '22s', delay: '-8s' },
        { w: 300, h: 200, bg: '#180808', top: '30%', right: '20%', dur: '15s', delay: '-4s' },
      ].map((n, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: n.w,
            height: n.h,
            background: n.bg,
            borderRadius: '50%',
            filter: 'blur(80px)',
            opacity: 0.06,
            animation: `drift ${n.dur} linear infinite alternate`,
            animationDelay: n.delay,
            top: n.top,
            left: 'left' in n ? n.left : undefined,
            right: 'right' in n ? (n as { right: string }).right : undefined,
          }}
        />
      ))}

      {/* Globe 3D — plein écran */}
      <Globe3D />
    </div>
  )
}
