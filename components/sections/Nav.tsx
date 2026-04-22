'use client'
import { useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'

type Props = { onReserve: () => void }

export default function Nav({ onReserve }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const user = useStore(s => s.user)
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">REBOOT<span>.BJ</span></div>
      <ul className="nav-links">
        <li><a href="#histoire" onClick={e => { e.preventDefault(); scroll('histoire') }}>Histoire</a></li>
        <li><a href="#culture" onClick={e => { e.preventDefault(); scroll('culture') }}>Culture</a></li>
        <li><a href="#destinations" onClick={e => { e.preventDefault(); scroll('destinations') }}>Destinations</a></li>
      </ul>
      {user
        ? <a className="nav-cta" href="/dashboard">Mon espace</a>
        : <button className="nav-cta" onClick={onReserve}>On fait connaissance ?</button>}
    </nav>
  )
}
