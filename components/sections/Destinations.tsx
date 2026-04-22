'use client'

const CARDS = [
  { tag: 'Histoire · UNESCO', name: 'Abomey', desc: 'Palais royaux, bas-reliefs millénaires, musée des Amazones.', price: 'Dès 45 000 FCFA', emoji: '🏛️', img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&auto=format&fit=crop&q=70' },
  { tag: 'Unique · Lacustre', name: 'Ganvié', desc: "130 000 habitants sur pilotis. La plus grande cité lacustre d'Afrique.", price: 'Dès 35 000 FCFA', emoji: '🚣', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&auto=format&fit=crop&q=70' },
  { tag: 'Nature · Safari', name: 'Pendjari', desc: 'Lions, éléphants, hippos et 361 espèces d\'oiseaux.', price: 'Dès 150 000 FCFA', emoji: '🐘', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&auto=format&fit=crop&q=70' },
  { tag: 'Plage · Détente', name: 'Grand-Popo', desc: 'Plages immenses et vierges. Couchers de soleil légendaires.', price: 'Dès 55 000 FCFA', emoji: '🌊', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=70' },
  { tag: 'Spirituel · Culture', name: 'Ouidah', desc: 'Temple des Pythons, Route des Esclaves, Festival Vodoun.', price: 'Dès 40 000 FCFA', emoji: '🎭', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&auto=format&fit=crop&q=70' },
  { tag: 'Aventure · Trekking', name: 'Atacora', desc: 'Tata Somba UNESCO. Trekking dans les falaises de l\'Atacora.', price: 'Dès 90 000 FCFA', emoji: '🏔️', img: 'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=900&auto=format&fit=crop&q=70' },
]

type Props = { onLock: (name: string) => void }

export default function Destinations({ onLock }: Props) {
  return (
    <section className="section destinations" id="destinations">
      <div className="dest-intro reveal">
        <div>
          <div className="s-eyebrow">Destinations</div>
          <h2 className="s-title">Six joyaux qui<br /><em>attendent d&apos;être vécus.</em></h2>
        </div>
        <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, alignSelf: 'end' }}>
          Créez un compte pour accéder aux prix complets, itinéraires détaillés et réserver avec nos guides certifiés.
        </p>
      </div>
      <div className="dest-grid reveal d1">
        {CARDS.map(card => (
          <div key={card.name} className="dest-card" onClick={() => onLock(`${card.name} — ${card.tag}`)}>
            <div className="dest-bg" style={{ backgroundImage: `url(${card.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="dest-overlay" />
            <div className="dest-emoji">{card.emoji}</div>
            <div className="dest-content">
              <div className="dc-tag">{card.tag}</div>
              <div className="dc-name">{card.name}</div>
              <div className="dc-desc">{card.desc}</div>
              <div className="dc-price">{card.price}</div>
              <div className="dc-unlock">Voir les circuits</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
