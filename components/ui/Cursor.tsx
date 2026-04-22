'use client'
// components/ui/Cursor.tsx
// Curseur custom 3 anneaux concentriques avec lag organique (lerp 0.14)

import { useEffect, useRef } from 'react'
import { useStore } from '@/store/useStore'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const { cursorMode, cursorLabel } = useStore()

  const mx = useRef(0)
  const my = useRef(0)
  const lx = useRef(0)
  const ly = useRef(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX
      my.current = e.clientY
    }
    document.addEventListener('mousemove', onMove)

    let raf: number
    const loop = () => {
      lx.current += (mx.current - lx.current) * 0.14
      ly.current += (my.current - ly.current) * 0.14
      if (cursorRef.current) {
        cursorRef.current.style.left = Math.round(lx.current) + 'px'
        cursorRef.current.style.top = Math.round(ly.current) + 'px'
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  const isPoi = cursorMode === 'poi'
  const isBtn = cursorMode === 'btn'

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        zIndex: 9999,
        pointerEvents: 'none',
        left: 0,
        top: 0,
      }}
    >
      {/* Anneau 1 — dot central */}
      <div
        className="cur-ring"
        style={{
          width: isPoi ? 10 : 8,
          height: isPoi ? 10 : 8,
          background: isPoi ? '#E8820C' : '#fff',
          opacity: 0.9,
        }}
      />
      {/* Anneau 2 — cercle moyen */}
      <div
        className="cur-ring"
        style={{
          width: isPoi || isBtn ? 52 : 36,
          height: isPoi || isBtn ? 52 : 36,
          background: 'none',
          border: `1px solid ${
            isPoi
              ? 'rgba(232,130,12,0.5)'
              : isBtn
              ? 'rgba(255,255,255,0.6)'
              : 'rgba(255,255,255,0.35)'
          }`,
        }}
      />
      {/* Anneau 3 — cercle extérieur */}
      <div
        className="cur-ring"
        style={{
          width: isPoi ? 90 : 72,
          height: isPoi ? 90 : 72,
          background: 'none',
          border: `1px solid ${
            isPoi ? 'rgba(232,130,12,0.12)' : 'rgba(255,255,255,0.08)'
          }`,
        }}
      />
      {/* Label POI */}
      <div
        style={{
          position: 'absolute',
          transform: 'translate(24px, -50%)',
          top: 0,
          left: 0,
          fontSize: 9,
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
          whiteSpace: 'nowrap',
          opacity: isPoi ? 1 : 0,
          transition: 'opacity 0.25s',
          pointerEvents: 'none',
        }}
      >
        {cursorLabel}
      </div>
    </div>
  )
}
