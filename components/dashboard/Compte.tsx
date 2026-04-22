'use client'
import { useStore } from '@/store/useStore'
import { BADGES } from '@/data/dashboard'

export default function Compte() {
  const user = useStore(s => s.user)!

  return (
    <div className="db-page">
      <h1 className="db-h1">Mon Compte</h1>

      <div className="db-card">
        <div className="db-h2">Profil</div>
        <div className="db-kv"><span>Nom</span><b>{user.prenom} {user.nom}</b></div>
        <div className="db-kv"><span>Email</span><b>{user.email}</b></div>
        {user.whatsapp && <div className="db-kv"><span>WhatsApp</span><b>{user.whatsapp}</b></div>}
        {user.pays && <div className="db-kv"><span>Pays</span><b>{user.pays}</b></div>}
        {user.interet && <div className="db-kv"><span>Intérêt</span><b>{user.interet}</b></div>}
        <div className="db-kv"><span>Niveau</span><b>{user.niveau} · {user.xp} XP</b></div>
      </div>

      <div className="db-card">
        <div className="db-h2">Badges ({user.badges.length}/{Object.keys(BADGES).length})</div>
        <div className="db-badges">
          {Object.entries(BADGES).map(([id, b]) => {
            const owned = user.badges.includes(id)
            return (
              <div key={id} className={`db-badge${owned ? ' owned' : ''}`}>
                <div className="db-badge-icon">{owned ? b.icon : '🔒'}</div>
                <div className="db-badge-name">{b.name}</div>
                <div className="db-badge-desc">{b.desc}</div>
              </div>
            )
          })}
        </div>
      </div>

      {!user.premium && (
        <div className="db-card premium">
          <div className="db-h2">✨ Passer Premium</div>
          <div className="db-sub">Podcasts exclusifs, contenus avancés, support prioritaire.</div>
          <div className="db-price">4 900 FCFA/mois · 39 900 FCFA/an</div>
          <a className="db-btn" href="https://wa.me/22900000000?text=Je%20souhaite%20passer%20Premium" target="_blank" rel="noopener noreferrer">Activer Premium</a>
        </div>
      )}
    </div>
  )
}
