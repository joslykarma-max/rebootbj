'use client'
import { useEffect, useRef, useState } from 'react'

import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import StatsStrip from '@/components/sections/StatsStrip'
import Histoire from '@/components/sections/Histoire'
import Culture from '@/components/sections/Culture'
import Destinations from '@/components/sections/Destinations'
import VRSection from '@/components/sections/VRSection'
import Footer from '@/components/sections/Footer'
import AuthModal from '@/components/modals/AuthModal'
import LockedModal from '@/components/modals/LockedModal'

export default function Home() {
  const [authOpen, setAuthOpen] = useState(false)
  const [lockedOpen, setLockedOpen] = useState(false)
  const [lockedTitle, setLockedTitle] = useState('')

  const progressRef = useRef<HTMLDivElement>(null)

  // ── Barre de progression scroll ──
  useEffect(() => {
    const onScroll = () => {
      const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (progressRef.current) progressRef.current.style.width = (p * 100) + '%'
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Reveal au scroll (IntersectionObserver) ──
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const openLock = (name: string) => { setLockedTitle(name); setLockedOpen(true) }
  const closeLockOpenAuth = () => { setLockedOpen(false); setTimeout(() => setAuthOpen(true), 200) }

  return (
    <>
      {/* Grain texture */}
      <div id="grain" />

      {/* Barre de progression */}
      <div id="progress" ref={progressRef} style={{ width: 0 }} />

      <Nav onReserve={() => setAuthOpen(true)} />
      <Hero onReserve={() => setAuthOpen(true)} />
      <StatsStrip />
      <Histoire onLock={openLock} />
      <Culture />
      <Destinations onLock={openLock} />
      <VRSection onLock={openLock} />
      <Footer onReserve={() => setAuthOpen(true)} />

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      <LockedModal
        open={lockedOpen}
        title={lockedTitle}
        onClose={() => setLockedOpen(false)}
        onUnlock={closeLockOpenAuth}
      />
    </>
  )
}
