'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Bientot() {
  const [filled, setFilled] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setFilled(88), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="cs-root">
      {/* Blobs animés */}
      <div className="cs-blob cs-blob-1" />
      <div className="cs-blob cs-blob-2" />
      <div className="cs-blob cs-blob-3" />

      <div className="cs-content">
        {/* Logo */}
        <div className="cs-logo-wrap">
          <Image src="/logo.png" alt="Reboot BJ" width={280} height={140} className="cs-logo" priority />
        </div>

        {/* Texte */}
        <div className="cs-text-block">
          <p className="cs-tagline">Vivez le Bénin !</p>
          <p className="cs-lead">
            Nous préparons une expérience hors du commun.<br />
            Ouverture très bientôt.
          </p>
        </div>

        {/* Barre */}
        <div className="cs-bar-wrap">
          <div className="cs-bar-labels">
            <span>Préparation</span>
            <span className="cs-bar-pct">88 %</span>
          </div>
          <div className="cs-bar-track">
            <div className="cs-bar-fill" style={{ width: `${filled}%` }} />
            <div className="cs-bar-dot" style={{ left: `${filled}%` }} />
          </div>
        </div>

        {/* Contact */}
        <p className="cs-contact">
          Une question ?&nbsp;
          <a href="mailto:contact@rebootbj.com" className="cs-link">contact@rebootbj.com</a>
        </p>
      </div>
    </div>
  )
}
