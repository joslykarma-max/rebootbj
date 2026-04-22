'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'
import { logout } from '@/lib/auth'
import Accueil from '@/components/dashboard/Accueil'
import Planificateur from '@/components/dashboard/Planificateur'
import Quiz from '@/components/dashboard/Quiz'
import Podcasts from '@/components/dashboard/Podcasts'
import Communaute from '@/components/dashboard/Communaute'
import Alertes from '@/components/dashboard/Alertes'
import Compte from '@/components/dashboard/Compte'

type Section = 'accueil' | 'planificateur' | 'quiz' | 'podcasts' | 'communaute' | 'alertes' | 'compte'

const NAV: { id: Section; label: string; icon: string }[] = [
  { id: 'accueil', label: 'Accueil', icon: '🏠' },
  { id: 'planificateur', label: 'Planificateur IA', icon: '🗺️' },
  { id: 'quiz', label: 'Quiz', icon: '🎯' },
  { id: 'podcasts', label: 'Podcasts', icon: '🎧' },
  { id: 'communaute', label: 'Communauté', icon: '💬' },
  { id: 'alertes', label: 'Alertes', icon: '🔔' },
  { id: 'compte', label: 'Mon Compte', icon: '👤' },
]

export default function DashboardPage() {
  const router = useRouter()
  const user = useStore(s => s.user)
  const authReady = useStore(s => s.authReady)
  const [section, setSection] = useState<Section>('accueil')

  useEffect(() => {
    if (authReady && !user) router.replace('/')
  }, [authReady, user, router])

  if (!authReady || !user) {
    return <div className="db-loading">Chargement…</div>
  }

  const handleLogout = async () => {
    await logout()
    router.replace('/')
  }

  return (
    <div className="db-shell">
      <aside className="db-side">
        <div className="db-logo">REBOOT<span>.BJ</span></div>
        <div className="db-user">
          <div className="db-avatar">{user.prenom.charAt(0).toUpperCase()}</div>
          <div>
            <div className="db-name">{user.prenom}</div>
            <div className="db-level">{user.niveau} · {user.xp} XP</div>
          </div>
        </div>
        <nav className="db-nav">
          {NAV.map(n => (
            <button
              key={n.id}
              className={`db-nav-item${section === n.id ? ' active' : ''}`}
              onClick={() => setSection(n.id)}
            >
              <span className="db-nav-icon">{n.icon}</span>
              <span>{n.label}</span>
            </button>
          ))}
        </nav>
        <button className="db-logout" onClick={handleLogout}>Déconnexion</button>
      </aside>

      <main className="db-main">
        {section === 'accueil' && <Accueil onNavigate={setSection} />}
        {section === 'planificateur' && <Planificateur />}
        {section === 'quiz' && <Quiz />}
        {section === 'podcasts' && <Podcasts />}
        {section === 'communaute' && <Communaute />}
        {section === 'alertes' && <Alertes />}
        {section === 'compte' && <Compte />}
      </main>

      <nav className="db-tabs-mobile">
        {NAV.map(n => (
          <button
            key={n.id}
            className={`db-tab${section === n.id ? ' active' : ''}`}
            onClick={() => setSection(n.id)}
          >
            <span>{n.icon}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
