'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'

type Props = {
  eyebrow: string
  title: React.ReactNode
  lead?: string
  heroImg?: string
  children: React.ReactNode
}

export default function EspaceLayout({ eyebrow, title, lead, heroImg, children }: Props) {
  const router = useRouter()
  const user = useStore(s => s.user)
  const authReady = useStore(s => s.authReady)

  useEffect(() => {
    if (authReady && !user) router.replace('/bienvenue')
  }, [authReady, user, router])

  if (!authReady || !user) {
    return <div className="esp-loading">…</div>
  }

  return (
    <main className="ep-shell">
      <header className="ep-head">
        <a href="/espace" className="ep-back" aria-label="Retour au portail">
          <span>←</span> Mon espace
        </a>
        <a href="/" className="ep-logo"><img src="/logo.png" alt="Reboot BJ" /></a>
        <div className="ep-user">{user.prenom}</div>
      </header>

      <section className="ep-hero" style={heroImg ? { backgroundImage: `url(${heroImg})` } : undefined}>
        <div className="ep-hero-veil" />
        <div className="ep-hero-content">
          <div className="ep-eyebrow">{eyebrow}</div>
          <h1 className="ep-title">{title}</h1>
          {lead && <p className="ep-lead">{lead}</p>}
        </div>
      </section>

      <div className="ep-body">{children}</div>
    </main>
  )
}
