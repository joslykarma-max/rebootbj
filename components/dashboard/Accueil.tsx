'use client'
import { useStore } from '@/store/useStore'
import { LEVELS } from '@/data/dashboard'

type Props = { onNavigate: (s: 'planificateur' | 'quiz' | 'podcasts' | 'communaute' | 'alertes' | 'compte') => void }

export default function Accueil({ onNavigate }: Props) {
  const user = useStore(s => s.user)!
  const cur = [...LEVELS].reverse().find(l => user.xp >= l.min)!
  const progress = cur.next ? Math.min(100, ((user.xp - cur.min) / (cur.next - cur.min)) * 100) : 100

  return (
    <div className="db-page">
      <header className="db-head">
        <h1 className="db-h1">Bonjour {user.prenom} 👋</h1>
        <p className="db-sub">Bienvenue dans votre espace Reboot BJ.</p>
      </header>

      <div className="db-xp-card">
        <div className="db-xp-top">
          <div>
            <div className="db-xp-level">{user.niveau}</div>
            <div className="db-xp-val">{user.xp} XP {cur.next ? `· ${cur.next - user.xp} pour ${LEVELS[LEVELS.findIndex(l => l.name === cur.name) + 1]?.name}` : '· niveau max'}</div>
          </div>
          <div className="db-xp-badges">{user.badges.length} 🏅</div>
        </div>
        <div className="db-xp-bar"><div className="db-xp-fill" style={{ width: `${progress}%` }} /></div>
      </div>

      <div className="db-stats">
        <button className="db-stat" onClick={() => onNavigate('quiz')}>
          <div className="db-stat-icon">🎯</div>
          <div className="db-stat-v">Quiz</div>
          <div className="db-stat-l">Tester vos connaissances</div>
        </button>
        <button className="db-stat" onClick={() => onNavigate('podcasts')}>
          <div className="db-stat-icon">🎧</div>
          <div className="db-stat-v">Podcasts</div>
          <div className="db-stat-l">8 épisodes disponibles</div>
        </button>
        <button className="db-stat" onClick={() => onNavigate('planificateur')}>
          <div className="db-stat-icon">🗺️</div>
          <div className="db-stat-v">Planificateur IA</div>
          <div className="db-stat-l">Votre voyage sur mesure</div>
        </button>
      </div>

      <div className="db-section">
        <h2 className="db-h2">Alertes cette semaine</h2>
        <div className="db-cards-row">
          <button className="db-mini-card" onClick={() => onNavigate('alertes')}>
            <div className="db-mini-cat">🎭 Événement</div>
            <div className="db-mini-title">Fête du Vodoun — 10 janvier</div>
          </button>
          <button className="db-mini-card" onClick={() => onNavigate('alertes')}>
            <div className="db-mini-cat">🌿 Nature</div>
            <div className="db-mini-title">Safari Pendjari — pic animalier</div>
          </button>
        </div>
      </div>
    </div>
  )
}
