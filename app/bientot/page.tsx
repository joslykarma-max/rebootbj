'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const SLIDES = [
  '/Destinations/Vivez-pendjari/trip-pendjari-1.jpg',
  '/Destinations/Vivez-ganvie/trip-ganvie-2.jpg',
  '/Destinations/Vivez-ouidah/trip-ouidah-1.jpg',
  '/Destinations/Vivez-grand-popo/trip-grand-popo-1.jpg',
  '/Destinations/Vivez-le-nord-ouest/trip-nord-ouest-2.jpg',
  '/Destinations/Vivez-porto-novo/trip-porto-novo-3.jpg',
  '/Destinations/Vivez-gogotinkpon/trip-gogotinkpon-1.jpg',
  '/Destinations/Vivez-ganvie/trip-ganvie-4.jpg',
]

const DURATION = 5000 // ms par slide

export default function Bientot() {
  const [current, setCurrent] = useState(0)
  const [filled, setFilled] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setFilled(88), 500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length)
    }, DURATION)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="cs-root">
      {/* Diaporama */}
      <div className="cs-slides">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="cs-slide"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image src={src} alt="" fill style={{ objectFit: 'cover' }} priority={i === 0} />
          </div>
        ))}
      </div>

      {/* Voile blanc pour lisibilité */}
      <div className="cs-veil" />

      {/* Contenu */}
      <div className="cs-content">
        <div className="cs-logo-wrap">
          <Image src="/logo.png" alt="Reboot BJ" width={280} height={140} className="cs-logo" priority />
        </div>

        <div className="cs-text-block">
          <p className="cs-tagline">Vivez le Bénin !</p>
          <p className="cs-lead">
            Nous préparons une expérience hors du commun.<br />
            Ouverture très bientôt.
          </p>
        </div>

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

        <p className="cs-contact">
          Une question ?&nbsp;
          <a href="mailto:contact@rebootbj.com" className="cs-link">contact@rebootbj.com</a>
        </p>

        {/* Indicateurs de slide */}
        <div className="cs-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`cs-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
