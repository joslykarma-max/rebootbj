'use client'
// components/Scene.tsx
// Orchestrateur principal — gère les 3 layers, écoute scroll/touch, contrôle le zoom

import { useEffect, useRef, useState } from 'react'
import { useStore } from '@/store/useStore'

import LayerSpace from './layers/LayerSpace'
import LayerMap from './layers/LayerMap'
import LayerDest from './layers/LayerDest'
import Cursor from './ui/Cursor'
import Nav from './ui/Nav'
import Breadcrumb from './ui/Breadcrumb'
import ZoomMeter from './ui/ZoomMeter'
import Coords from './ui/Coords'
import HeroInstruction from './ui/HeroInstruction'
import Panel from './ui/Panel'
import Contact from './ui/Contact'

// Échelles de zoom par layer
const ZOOM_SCALES = [1, 2.4, 5.5]
const THRESHOLD = 180

export default function Scene() {
  const { layer, animating, panelOpen, setLayer, setAnimating, addScroll, scrollAcc, openDest } = useStore()
  const [loaded, setLoaded] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const touchStartY = useRef(0)

  // ── LOADER ──
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2800)
    return () => clearTimeout(timer)
  }, [])

  // ── Navigation layer ──
  const goLayer = (n: 0 | 1 | 2, destId?: string) => {
    if (animating) return
    setAnimating(true)
    setLayer(n)
    if (destId) openDest(destId)
    setTimeout(() => setAnimating(false), 1400)
  }

  // ── Scroll wheel ──
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (panelOpen || animating) return
      addScroll(e.deltaY)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [panelOpen, animating, addScroll])

  // ── Déclencher changement de layer quand seuil atteint ──
  useEffect(() => {
    if (animating || panelOpen) return
    if (scrollAcc > THRESHOLD && layer < 2) {
      goLayer((layer + 1) as 0 | 1 | 2)
    } else if (scrollAcc < -THRESHOLD && layer > 0) {
      goLayer((layer - 1) as 0 | 1 | 2)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollAcc])

  // ── Touch mobile ──
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (panelOpen || animating) return
      const delta = touchStartY.current - e.changedTouches[0].clientY
      if (Math.abs(delta) > 50) {
        if (delta > 0 && layer < 2) goLayer((layer + 1) as 0 | 1 | 2)
        else if (delta < 0 && layer > 0) goLayer((layer - 1) as 0 | 1 | 2)
      }
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layer, panelOpen, animating])

  const scale = ZOOM_SCALES[layer] ?? 1

  return (
    <>
      {/* ── LOADER ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#000',
          zIndex: 900,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: loaded ? 0 : 1,
          pointerEvents: loaded ? 'none' : 'all',
          transition: 'opacity 1.2s ease',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 52,
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1,
            marginBottom: 6,
            overflow: 'hidden',
          }}
        >
          {'Reboot BJ'.split('').map((char, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                transform: 'translateY(100%)',
                animation: `slideUp 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${0.1 + i * 0.08}s forwards`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        <div
          style={{
            fontSize: 9,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)',
            marginBottom: 60,
            opacity: 0,
            animation: 'fadeIn 0.6s ease 0.8s forwards',
          }}
        >
          Bénin · Afrique de l&apos;Ouest
        </div>
        <div
          style={{
            width: 200,
            height: 1,
            background: 'rgba(255,255,255,0.08)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: '#fff',
              animation: 'trackFill 2.2s cubic-bezier(0.4,0,0.2,1) 0.5s forwards',
            }}
          />
        </div>
      </div>

      {/* ── HAZE atmosphérique ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 50,
          opacity: layer > 0 ? 1 : 0,
          transition: 'opacity 1s',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(20,40,10,.3) 0%, transparent 60%)',
        }}
      />

      {/* ── BARRE PROGRESSION ── */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 1,
          background: 'rgba(255,255,255,0.2)',
          zIndex: 999,
          width: `${Math.round((layer / 2) * 100)}%`,
          transition: 'width 0.8s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
      />

      {/* ── UI FIXE ── */}
      <Nav onReserve={() => setContactOpen(true)} />
      <Breadcrumb onNav={goLayer} />
      <ZoomMeter />
      <Coords />
      <HeroInstruction />
      <Cursor />

      {/* ── SCÈNE PRINCIPALE ── */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transformOrigin: 'center center',
            transform: `scale(${scale})`,
            transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)',
            willChange: 'transform',
          }}
        >
          {/* Layer 0 — Espace */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: layer === 0 ? 1 : 0,
              transition: 'opacity 0.6s ease',
              pointerEvents: layer === 0 ? 'all' : 'none',
            }}
          >
            <LayerSpace />
          </div>

          {/* Layer 1 — Carte Afrique de l'Ouest */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: layer >= 1 ? 1 : 0,
              transition: 'opacity 0.6s ease',
              pointerEvents: layer >= 1 && !panelOpen ? 'all' : 'none',
            }}
          >
            <LayerMap />
          </div>

          {/* Layer 2 — Destination immersive */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: panelOpen ? 1 : 0,
              transition: 'opacity 0.6s ease',
              pointerEvents: 'none',
            }}
          >
            <LayerDest />
          </div>
        </div>
      </div>

      {/* ── PANEL DESTINATION ── */}
      <Panel onReserve={() => setContactOpen(true)} />

      {/* ── MODAL CONTACT ── */}
      <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
