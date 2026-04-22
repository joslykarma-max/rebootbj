'use client'
// components/ui/Coords.tsx
// Coordonnées GPS animées en bas à droite — LAT/LON/ALT

import { useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'

const ALTS = ['36 000 km', '3 200 km', '480 km']

export default function Coords() {
  const { layer } = useStore()
  const [lat, setLat] = useState('6.3702')
  const [lon, setLon] = useState('2.3158')

  useEffect(() => {
    const iv = setInterval(() => {
      setLat((6.3702 + Math.random() * 0.001 - 0.0005).toFixed(4))
      setLon((2.3158 + Math.random() * 0.001 - 0.0005).toFixed(4))
    }, 2000)
    return () => clearInterval(iv)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 32,
        right: 52,
        zIndex: 100,
        textAlign: 'right',
      }}
    >
      {[`LAT ${lat}°N`, `LON ${lon}°E`, `ALT ${ALTS[layer]}`].map((line) => (
        <div
          key={line}
          style={{
            fontSize: 8,
            letterSpacing: '2px',
            color: 'rgba(255,255,255,0.12)',
            fontFamily: 'monospace',
            lineHeight: 1.6,
          }}
        >
          {line}
        </div>
      ))}
    </div>
  )
}
