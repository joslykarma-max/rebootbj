'use client'
import { ALERTS } from '@/data/dashboard'

const CAT_ICON: Record<string, string> = {
  evenement: '🎭',
  meteo: '🌤️',
  nature: '🌿',
  pratique: 'ℹ️',
}

export default function Alertes() {
  return (
    <div className="db-page">
      <h1 className="db-h1">Alertes Bénin</h1>
      <p className="db-sub">Événements, saisons, infos pratiques mises à jour régulièrement.</p>

      <div className="db-alerts">
        {ALERTS.map(a => (
          <div key={a.id} className="db-alert">
            <div className="db-alert-cat">{CAT_ICON[a.cat]} {a.cat}</div>
            <div className="db-alert-title">{a.title}</div>
            <div className="db-alert-body">{a.body}</div>
            <div className="db-alert-date">{a.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
