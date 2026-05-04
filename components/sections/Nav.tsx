'use client'
import { useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const user = useStore(s => s.user)

  const scroll = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
        <a href="/" className="nav-logo-img">
          <img src="/logo.png" alt="Reboot BJ" />
        </a>
        <ul className="nav-links">
          <li><a href="#histoire" onClick={e => { e.preventDefault(); scroll('histoire') }}>Histoire</a></li>
          <li><a href="#culture" onClick={e => { e.preventDefault(); scroll('culture') }}>Culture</a></li>
          <li><a href="#destinations" onClick={e => { e.preventDefault(); scroll('destinations') }}>Destinations</a></li>
        </ul>
        <div className="nav-right">
          {user
            ? <a className="nav-cta" href="/espace">Mon espace</a>
            : <a className="nav-cta" href="/bienvenue">On fait connaissance ?</a>}
          <button
            className={`nav-burger${open ? ' open' : ''}`}
            aria-label="Menu"
            onClick={() => setOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`nav-mobile-overlay${open ? ' open' : ''}`}>
        <ul>
          <li><a href="#histoire" onClick={e => { e.preventDefault(); scroll('histoire') }}>Histoire</a></li>
          <li><a href="#culture" onClick={e => { e.preventDefault(); scroll('culture') }}>Culture</a></li>
          <li><a href="#destinations" onClick={e => { e.preventDefault(); scroll('destinations') }}>Destinations</a></li>
        </ul>
        {user
          ? <a className="nav-mobile-cta" href="/espace" onClick={() => setOpen(false)}>Mon espace</a>
          : <a className="nav-mobile-cta" href="/bienvenue" onClick={() => setOpen(false)}>On fait connaissance ?</a>}
      </div>
    </>
  )
}
