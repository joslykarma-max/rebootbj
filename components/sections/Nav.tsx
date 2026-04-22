'use client'

type Props = { onReserve: () => void }

export default function Nav({ onReserve }: Props) {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav>
      <div className="nav-logo">REBOOT<span>.BJ</span></div>
      <ul className="nav-links">
        <li><a href="#histoire" onClick={e => { e.preventDefault(); scroll('histoire') }}>Histoire</a></li>
        <li><a href="#culture" onClick={e => { e.preventDefault(); scroll('culture') }}>Culture</a></li>
        <li><a href="#destinations" onClick={e => { e.preventDefault(); scroll('destinations') }}>Destinations</a></li>
        <li><a href="#vr" onClick={e => { e.preventDefault(); scroll('vr') }}>Tourisme VR</a></li>
      </ul>
      <button className="nav-cta" onClick={onReserve}>Créer un compte</button>
    </nav>
  )
}
