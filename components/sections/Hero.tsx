'use client'

type Props = { onReserve: () => void }

export default function Hero({ onReserve }: Props) {
  const scrollDown = () => document.getElementById('histoire')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="kente" />
      <div className="hero-glow" />
      <div className="hero-bj">BJ</div>
      <div className="hero-content">
        <div className="hero-eyebrow">Reboot BJ — Agence de tourisme premium · Cotonou, Bénin</div>
        <h1 className="hero-title">
          Le Bénin<br />
          <em>autrement.</em><br />
          <span className="l2">Vivez-le.</span>
        </h1>
        <p className="hero-desc">
          Histoire millénaire, culture Vodoun, nature sauvage, plages oubliées.
          Le Bénin est le secret le mieux gardé de l&apos;Afrique de l&apos;Ouest — jusqu&apos;à aujourd&apos;hui.
        </p>
        <div className="hero-actions">
          <button className="btn-hero" onClick={onReserve}>Commencer l&apos;exploration</button>
          <button className="btn-gh" onClick={scrollDown}>
            Découvrir l&apos;histoire <span>→</span>
          </button>
        </div>
      </div>
      <div className="hero-scroll">Défiler</div>
    </section>
  )
}
