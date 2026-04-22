'use client'

const ITEMS = [
  {
    era: 'VII', period: 'VIIe siècle', name: 'Les origines du Dahomey',
    desc: "Fondé par le peuple Fon, le Royaume du Dahomey émerge dans la région d'Abomey. Une civilisation sophistiquée s'organise autour de palais royaux et d'un système politique unique en Afrique subsaharienne.",
  },
  {
    era: 'XVI', period: 'XVIe – XVIIIe siècle', name: "L'âge d'or du Royaume",
    desc: "Sous les rois Houégbadja, Agadja et Tegbeossu, le Dahomey devient une puissance régionale. Les palais d'Abomey, classés UNESCO, témoignent de la grandeur de cette civilisation.",
  },
  {
    era: 'XIX', period: 'XIXe siècle', name: 'Les Amazones — Agojie',
    desc: "L'armée de guerrières d'élite du roi Béhanzin — les Agojie — devient légendaire. Redoutées même par les soldats français, elles inspirent encore le monde entier deux siècles plus tard.",
  },
  {
    era: 'XXI', period: "Aujourd'hui", name: 'Le Bénin se réveille',
    desc: "Le Bénin moderne est en plein renouveau culturel. Cotonou s'impose comme une capitale créative africaine. L'art béninois conquiert les musées du monde. Et Reboot BJ vous y emmène.",
  },
]

type Props = { onLock: (name: string) => void }

export default function Histoire({ onLock }: Props) {
  return (
    <section className="section histoire" id="histoire">
      <div className="reveal">
        <div className="s-eyebrow">Histoire</div>
        <h2 className="s-title">Un royaume qui a fait<br /><em>trembler les empires.</em></h2>
      </div>
      <div className="hist-grid reveal d1">
        {ITEMS.map(item => (
          <div key={item.name} className="hist-item" onClick={() => onLock(item.name)}>
            <div className="hist-era">{item.era}</div>
            <div className="hist-period">{item.period}</div>
            <div className="hist-name">{item.name}</div>
            <div className="hist-desc">{item.desc}</div>
            <div className="hist-arrow">→</div>
            <div className="hist-lock">
              <div className="hl-icon">🔓</div>
              <div className="hl-txt">Créer un compte pour lire</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
