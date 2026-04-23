'use client'
import EspaceLayout from '@/components/espace/EspaceLayout'

const ERAS = [
  {
    era: 'VIIᵉ siècle',
    name: 'Les origines du Dahomey',
    body: "Fondé par le peuple Fon dans la région d'Abomey, le Royaume du Dahomey émerge d'une alliance tribale. Les rois bâtisseurs érigent un système politique unique en Afrique subsaharienne : un État organisé, centralisé, avec une administration structurée bien avant l'arrivée des Européens.",
    img: 'https://images.unsplash.com/photo-1533234427049-9e9bb093186d?w=1400&auto=format&fit=crop&q=75',
    highlight: 'Naissance d’un royaume',
  },
  {
    era: 'XVIᵉ – XVIIIᵉ',
    name: 'L’âge d’or du Royaume',
    body: "Sous les rois Houégbadja, Agadja et Tegbeossu, le Dahomey devient une puissance régionale redoutée. Les palais d'Abomey, classés UNESCO en 1985, témoignent de cette grandeur : bas-reliefs muraux, tombes royales, salles du trône. Le royaume contrôle le commerce, diplomatise avec l'Europe et l'Afrique du Nord.",
    img: 'https://images.unsplash.com/photo-1580637250481-b78db3e6f84b?w=1400&auto=format&fit=crop&q=75',
    highlight: '12 palais royaux UNESCO',
  },
  {
    era: 'XIXᵉ siècle',
    name: 'Les Amazones — Agojie',
    body: "L'armée de guerrières d'élite du roi Béhanzin — les Agojie — devient légendaire. Recrutées dès l'adolescence, entraînées au combat comme à la chasse, elles composent jusqu'à un tiers de l'armée royale. Redoutées même par les soldats français, elles inspirent encore le monde entier deux siècles plus tard.",
    img: 'https://images.unsplash.com/photo-1604598692017-9e9f49d0bcea?w=1400&auto=format&fit=crop&q=75',
    highlight: 'Une armée 100% féminine',
  },
  {
    era: 'Aujourd’hui',
    name: 'Le Bénin se réveille',
    body: "Le Bénin moderne est en plein renouveau culturel. Cotonou s'impose comme capitale créative africaine. Les œuvres royales pillées reviennent. L'art béninois conquiert les musées du monde — du Quai Branly au MoMA. Reboot BJ vous y emmène, guidés par ceux qui font cette renaissance.",
    img: 'https://images.unsplash.com/photo-1577185906981-5a60da3fbaa3?w=1400&auto=format&fit=crop&q=75',
    highlight: 'Renaissance culturelle',
  },
]

export default function Decouvrir() {
  return (
    <EspaceLayout
      eyebrow="Découvrir · Histoire"
      title={<>Un royaume qui a fait <em>trembler les empires.</em></>}
      lead="Mille trois cents ans d'histoire condensés dans quatre moments qui changent tout."
      heroImg="https://images.unsplash.com/photo-1533234427049-9e9bb093186d?w=1920&auto=format&fit=crop&q=80"
    >
      <div className="ep-timeline">
        {ERAS.map((e, i) => (
          <article key={e.name} className="ep-era" data-i={i}>
            <div className="ep-era-img" style={{ backgroundImage: `url(${e.img})` }} />
            <div className="ep-era-body">
              <div className="ep-era-num">{e.era}</div>
              <h2 className="ep-era-name">{e.name}</h2>
              <p className="ep-era-body-text">{e.body}</p>
              <div className="ep-era-highlight">✦ {e.highlight}</div>
            </div>
          </article>
        ))}
      </div>
    </EspaceLayout>
  )
}
