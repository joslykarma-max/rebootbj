'use client'

type Props = { onReserve: () => void }

export default function Hero({ onReserve }: Props) {
  const scrollDown = () => document.getElementById('histoire')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-vignette" />
      <div className="hero-content">
        <div className="hero-eyebrow">Reboot BJ · Cotonou</div>
        <h1 className="hero-title">
          Vivez le <em>Bénin.</em>
        </h1>
        <p className="hero-desc">
          Histoire millénaire, culture Vodoun, nature sauvage.<br/>
          Le secret le mieux gardé d&apos;Afrique de l&apos;Ouest.
        </p>
        <div className="hero-actions">
          <button className="btn-hero" onClick={onReserve}>On fait connaissance ?</button>
          <button className="btn-gh" onClick={scrollDown}>
            Découvrir <span>→</span>
          </button>
        </div>
      </div>
      <div className="hero-scroll">Défiler</div>
    </section>
  )
}
