'use client'
import { useEffect, useState } from 'react'

export default function Bientot() {
  const [filled, setFilled] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setFilled(88), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="cs-root">
      <div className="cs-bg" />
      <div className="cs-noise" />

      <div className="cs-content">
        <div className="cs-eyebrow">Reboot BJ</div>

        <h1 className="cs-title">
          Le Bénin<br />
          <em>s&rsquo;éveille.</em>
        </h1>

        <p className="cs-lead">
          Quelque chose de grand se prépare.<br />
          Nous finissons les derniers détails avant de vous ouvrir les portes.
        </p>

        <div className="cs-bar-wrap">
          <div className="cs-bar-label">
            <span>Préparation du voyage</span>
            <span className="cs-bar-pct">88%</span>
          </div>
          <div className="cs-bar-track">
            <div className="cs-bar-fill" style={{ width: `${filled}%` }} />
            <div className="cs-bar-glow" style={{ left: `${filled}%` }} />
          </div>
        </div>

        <div className="cs-divider" />

        <p className="cs-sub">
          Restez connectés —{' '}
          <a href="mailto:contact@rebootbj.com" className="cs-link">contact@rebootbj.com</a>
        </p>
      </div>

      <div className="cs-deco-left">Bénin</div>
      <div className="cs-deco-right">2026</div>
    </div>
  )
}
