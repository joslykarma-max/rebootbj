'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'
import { logout } from '@/lib/auth'

type Tile = {
  title: string
  subtitle: string
  desc: string
  href: string
  img: string
  disabled?: boolean
}

const TILES: Tile[] = [
  {
    title: 'Découvrir',
    subtitle: 'Histoire',
    desc: 'Le royaume du Dahomey, les Agojie, les rois d’Abomey.',
    href: '/espace/decouvrir',
    img: 'https://images.unsplash.com/photo-1533234427049-9e9bb093186d?w=1200&auto=format&fit=crop&q=70',
  },
  {
    title: 'Ressentir',
    subtitle: 'Culture',
    desc: 'Vodoun, musique, gastronomie, artisanat.',
    href: '/espace/ressentir',
    img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&auto=format&fit=crop&q=70',
  },
  {
    title: 'Explorer',
    subtitle: 'Destinations',
    desc: 'Abomey, Ganvié, Pendjari, Ouidah, Atacora, Cotonou.',
    href: '/espace/explorer',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=70',
  },
  {
    title: 'Appartenir',
    subtitle: 'Communauté locale',
    desc: 'Rencontrez celles et ceux qui vivent le Bénin avec vous.',
    href: '/espace/appartenir',
    img: 'https://images.unsplash.com/photo-1577185906981-5a60da3fbaa3?w=1200&auto=format&fit=crop&q=70',
  },
  {
    title: 'Vivre',
    subtitle: 'Réservation & 360°',
    desc: 'Planifiez votre voyage, immergez-vous en VR.',
    href: '/espace/vivre',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=70',
  },
  {
    title: 'Écouter',
    subtitle: 'Podcasts & sons',
    desc: 'Musique, histoires narrées, ambiances du Bénin.',
    href: '/espace/ecouter',
    img: 'https://images.unsplash.com/photo-1580637250481-b78db3e6f84b?w=1200&auto=format&fit=crop&q=70',
  },
  {
    title: 'Apprendre',
    subtitle: 'Quiz & savoirs',
    desc: 'Faits culturels, langue Fon, chronologie royale.',
    href: '/espace/apprendre',
    img: 'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=1200&auto=format&fit=crop&q=70',
  },
  {
    title: 'Grandir',
    subtitle: 'Enfants & familles',
    desc: 'Histoires illustrées, jeux, vocabulaire Fon pour les petits.',
    href: '/espace/grandir',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=70',
  },
]

export default function Espace() {
  const router = useRouter()
  const user = useStore(s => s.user)
  const authReady = useStore(s => s.authReady)

  useEffect(() => {
    if (authReady && !user) router.replace('/bienvenue')
  }, [authReady, user, router])

  if (!authReady || !user) {
    return <div className="esp-loading">…</div>
  }

  const go = (t: Tile) => {
    if (t.disabled) return
    router.push(t.href)
  }

  const handleLogout = async () => {
    await logout()
    router.replace('/')
  }

  return (
    <main className="esp-shell">
      <header className="esp-head">
        <a href="/" className="esp-logo"><img src="/logo.png" alt="Reboot BJ" /></a>
        <div className="esp-user">
          <div className="esp-greet">
            Bonjour, <em>{user.prenom}</em>.
          </div>
          <button className="esp-logout" onClick={handleLogout}>Déconnexion</button>
        </div>
      </header>

      <div className="esp-grid">
        {TILES.map(t => (
          <button
            key={t.title}
            className={`esp-tile${t.disabled ? ' disabled' : ''}`}
            onClick={() => go(t)}
            disabled={t.disabled}
          >
            <div className="esp-tile-img" style={{ backgroundImage: `url(${t.img})` }} />
            <div className="esp-tile-veil" />
            <div className="esp-tile-content">
              <div className="esp-tile-sub">{t.subtitle}</div>
              <div className="esp-tile-title">{t.title}</div>
              <div className="esp-tile-desc">{t.desc}</div>
              {t.disabled && <div className="esp-tile-soon">Bientôt</div>}
            </div>
          </button>
        ))}
      </div>
    </main>
  )
}
