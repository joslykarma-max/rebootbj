'use client'
import { useState } from 'react'

const PANELS = [
  {
    id: 'vodoun', label: 'Vodoun',
    title: 'Le Vodoun —\nberceau d\'une religion mondiale',
    body: "Né au Bénin, le Vodoun s'est répandu dans le monde entier par la diaspora africaine. Voodoo en Haïti, Candomblé au Brésil, Santería à Cuba — toutes ces traditions trouvent leurs racines dans les forêts sacrées d'Abomey. Loin des clichés hollywoodiens, le Vodoun béninois est une philosophie de vie complexe, un système de valeurs et de relations avec le monde invisible.",
    facts: [{ num: '10 jan.', lbl: 'Fête nationale du Vodoun' }, { num: '60M+', lbl: 'Pratiquants dans le monde' }],
  },
  {
    id: 'musique', label: 'Musique & Arts',
    title: "Musique & Arts —\nl'âme qui résonne",
    body: "Du tam-tam royal aux artistes contemporains qui exposent à Paris et New York, la scène artistique béninoise est en pleine effervescence. Afrobeat, Tchinkoumé, griots du Nord... le Bénin sonne différemment selon qu'on est à Cotonou, Abomey ou Parakou.",
    facts: [{ num: '3', lbl: 'Styles musicaux distincts' }, { num: '200+', lbl: 'Artistes contemporains' }],
  },
  {
    id: 'gastro', label: 'Gastronomie',
    title: 'Gastronomie —\nsaveurs qui racontent',
    body: "La cuisine béninoise est un voyage en soi. Amiwo, akassa, djenkoumé, gboma dessi... Chaque plat raconte une région, une saison, une cérémonie. Les marchés de Cotonou sont une expérience sensorielle totale — Dantokpa, le plus grand marché d'Afrique de l'Ouest à ciel ouvert.",
    facts: [{ num: '40+', lbl: 'Plats traditionnels' }, { num: 'Dantokpa', lbl: 'Plus grand marché AOF' }],
  },
  {
    id: 'artisan', label: 'Artisanat',
    title: 'Artisanat —\nmains qui transmettent',
    body: "Tisserands de kente, sculpteurs de bronze, brodeurs de récades royales — l'artisanat béninois est un patrimoine vivant transmis de génération en génération. Les pièces collectées au Bénin trouvent aujourd'hui leur place dans les plus grandes collections privées mondiales.",
    facts: [{ num: '12', lbl: 'Corps de métiers' }, { num: '26', lbl: 'Récades royales' }],
  },
]

export default function Culture() {
  const [active, setActive] = useState('vodoun')
  const panel = PANELS.find(p => p.id === active)!

  return (
    <section className="section culture" id="culture">
      <div className="reveal">
        <div className="s-eyebrow">Culture</div>
        <h2 className="s-title">Une culture qui a<br /><em>changé le monde.</em></h2>
      </div>
      <div className="cult-layout">
        <div className="cult-nav reveal d1">
          {PANELS.map(p => (
            <div
              key={p.id}
              className={`cult-nav-item${active === p.id ? ' active' : ''}`}
              onClick={() => setActive(p.id)}
            >
              <div className="cn-bar" />
              <span className="cn-label">{p.label}</span>
            </div>
          ))}
        </div>
        <div className="cult-content reveal d2">
          <div className="cult-panel active">
            <div className="cp-title">
              {panel.title.split('\n').map((line, i) => (
                <span key={i}>{i === 1 ? <em>{line}</em> : line}{i === 0 && <br />}</span>
              ))}
            </div>
            <p className="cp-body">{panel.body}</p>
            <div className="cult-facts">
              {panel.facts.map(f => (
                <div key={f.lbl} className="cult-fact">
                  <div className="cf-num">{f.num}</div>
                  <div className="cf-lbl">{f.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
