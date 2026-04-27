'use client'
import { useState } from 'react'
import EspaceLayout from '@/components/espace/EspaceLayout'

const PANELS = [
  {
    id: 'vodoun', label: 'Vodoun',
    title: 'Le Vodoun, berceau d’une religion mondiale',
    body: "Né au Bénin, le Vodoun s'est répandu dans le monde entier par la diaspora africaine. Voodoo en Haïti, Candomblé au Brésil, Santería à Cuba — toutes ces traditions trouvent leurs racines dans les forêts sacrées d'Abomey. Loin des clichés hollywoodiens, le Vodoun béninois est une philosophie de vie complexe, un système de valeurs et de relations avec le monde invisible.",
    img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1400&auto=format&fit=crop&q=75',
    facts: [['10 janvier', 'Fête nationale du Vodoun'], ['60M+', 'Pratiquants dans le monde']],
  },
  {
    id: 'musique', label: 'Musique',
    title: 'L’âme qui résonne',
    body: "Du tam-tam royal aux artistes contemporains qui exposent à Paris et New York, la scène artistique béninoise est en pleine effervescence. Afrobeat, Tchinkoumé, griots du Nord — le Bénin sonne différemment selon qu'on est à Cotonou, Abomey ou Parakou.",
    img: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=1400&auto=format&fit=crop&q=75',
    facts: [['3', 'Styles musicaux distincts'], ['200+', 'Artistes contemporains']],
  },
  {
    id: 'gastro', label: 'Gastronomie',
    title: 'Saveurs qui racontent',
    body: "La cuisine béninoise est un voyage en soi. Amiwo, akassa, djenkoumé, gboma dessi — chaque plat raconte une région, une saison, une cérémonie. Les marchés de Cotonou sont une expérience sensorielle totale : Dantokpa, le plus grand marché d'Afrique de l'Ouest à ciel ouvert.",
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&auto=format&fit=crop&q=75',
    facts: [['40+', 'Plats traditionnels'], ['Dantokpa', 'Plus grand marché AOF']],
  },
  {
    id: 'artisan', label: 'Artisanat',
    title: 'Mains qui transmettent',
    body: "Tisserands de kente, sculpteurs de bronze, brodeurs de récades royales — l'artisanat béninois est un patrimoine vivant transmis de génération en génération. Les pièces collectées au Bénin trouvent aujourd'hui leur place dans les plus grandes collections privées mondiales.",
    img: 'https://images.unsplash.com/photo-1604598692017-9e9f49d0bcea?w=1400&auto=format&fit=crop&q=75',
    facts: [['12', 'Corps de métiers'], ['26', 'Récades royales']],
  },
]

export default function Ressentir() {
  const [active, setActive] = useState('vodoun')
  const p = PANELS.find(x => x.id === active)!

  return (
    <EspaceLayout
      eyebrow="Ressentir · Culture"
      title={<>Une culture qui a <em>changé le monde.</em></>}
      lead="Vodoun, musique, gastronomie, artisanat : quatre portes pour rentrer dans l'âme béninoise."
      heroImg="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1920&auto=format&fit=crop&q=80"
      theme="ressentir"
    >
      <div className="ep-tabs">
        {PANELS.map(x => (
          <button
            key={x.id}
            className={`ep-tab${active === x.id ? ' on' : ''}`}
            onClick={() => setActive(x.id)}
          >
            {x.label}
          </button>
        ))}
      </div>

      <article className="ep-pan">
        <div className="ep-pan-img" style={{ backgroundImage: `url(${p.img})` }} />
        <div className="ep-pan-body">
          <h2 className="ep-pan-title">{p.title}</h2>
          <p className="ep-pan-body-text">{p.body}</p>
          <div className="ep-pan-facts">
            {p.facts.map(([n, l]) => (
              <div key={l} className="ep-fact">
                <div className="ep-fact-n">{n}</div>
                <div className="ep-fact-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </EspaceLayout>
  )
}
