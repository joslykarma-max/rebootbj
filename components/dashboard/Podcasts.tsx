'use client'
import { useState } from 'react'
import { useStore } from '@/store/useStore'
import { EPISODES } from '@/data/dashboard'

function fmt(s: number) {
  const m = Math.floor(s / 60); const sec = s % 60
  return `${m}:${String(sec).padStart(2, '0')}`
}

export default function Podcasts() {
  const user = useStore(s => s.user)!
  const [active, setActive] = useState<string | null>(null)
  const ep = EPISODES.find(e => e.id === active)

  return (
    <div className="db-page">
      <h1 className="db-h1">Podcasts</h1>
      <p className="db-sub">Plongez dans l&apos;histoire et la culture du Bénin.</p>

      <div className="db-ep-list">
        {EPISODES.map(e => {
          const locked = e.premium && !user.premium
          return (
            <button key={e.id} className={`db-ep${active === e.id ? ' on' : ''}${locked ? ' locked' : ''}`} onClick={() => !locked && setActive(e.id)}>
              <div className="db-ep-cover" style={{ backgroundImage: `url(${e.cover})` }}>
                {locked && <div className="db-ep-lock">🔒</div>}
              </div>
              <div className="db-ep-info">
                <div className="db-ep-title">{e.title}</div>
                <div className="db-ep-meta">{e.author} · {fmt(e.duration)}{e.premium ? ' · Premium' : ''}</div>
                <div className="db-ep-desc">{e.desc}</div>
              </div>
            </button>
          )
        })}
      </div>

      {ep && (
        <div className="db-player">
          <div className="db-player-title">▶ {ep.title}</div>
          <div className="db-player-meta">{ep.author} · {fmt(ep.duration)}</div>
          <div className="db-player-bar"><div className="db-player-fill" style={{ width: '0%' }} /></div>
          <div className="db-sub" style={{ fontSize: 12, marginTop: 8 }}>Lecteur audio — intégration du flux à venir.</div>
        </div>
      )}
    </div>
  )
}
