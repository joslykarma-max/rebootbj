'use client'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'

export default function Hero() {
  const router = useRouter()
  const user = useStore(s => s.user)
  const scrollDown = () => document.getElementById('histoire')?.scrollIntoView({ behavior: 'smooth' })
  const primary = () => {
    if (user) scrollDown()
    else router.push('/bienvenue')
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-vignette" />
      <div className="hero-content">
        <div className="hero-eyebrow">
          {user ? `Bonjour ${user.prenom} · ravi de vous revoir` : 'Reboot BJ · Cotonou'}
        </div>
        <h1 className="hero-title">
          Vivez le <em>Bénin.</em>
        </h1>
        <p className="hero-desc">
          Histoire millénaire, culture Vodoun, nature sauvage.<br/>
          Le secret le mieux gardé d&apos;Afrique de l&apos;Ouest.
        </p>
        <div className="hero-actions">
          <button className="btn-hero" onClick={primary}>
            {user ? 'Reprendre l’exploration' : 'On fait connaissance ?'}
          </button>
          <button className="btn-gh" onClick={() => router.push(user ? '/dashboard' : '/bienvenue')}>
            {user ? 'Mon espace' : 'Découvrir'} <span>→</span>
          </button>
        </div>
      </div>
      <div className="hero-scroll">Défiler</div>
    </section>
  )
}
