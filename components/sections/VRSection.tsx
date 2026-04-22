'use client'

type Props = { onLock: (name: string) => void }

const EXPS = [
  { icon: '🏛️', name: 'Abomey' },
  { icon: '🚣', name: 'Ganvié' },
  { icon: '🐘', name: 'Pendjari' },
  { icon: '🌊', name: 'Grand-Popo' },
]

export default function VRSection({ onLock }: Props) {
  return (
    <section className="vr-section" id="vr">
      <div className="vr-ring" />
      <div className="vr-ring" />
      <div className="vr-inner reveal">
        <div className="vr-badge">Nouveau · Tourisme Virtuel 360°</div>
        <h2 className="vr-title">
          Visitez le Bénin<br />depuis <em style={{ color: 'var(--o)' }}>n&apos;importe où.</em>
        </h2>
        <p className="vr-desc">
          Notre studio de tourisme virtuel vous transporte au cœur du Bénin en 360°.
          Idéal pour préparer votre voyage — ou pour vivre l&apos;expérience depuis votre salon.
        </p>
        <div className="vr-exps">
          {EXPS.map(e => (
            <div key={e.name} className="vr-exp">
              <div className="ve-icon">{e.icon}</div>
              <div className="ve-name">{e.name}</div>
            </div>
          ))}
        </div>
        <button className="vr-cta" onClick={() => onLock('Studio Tourisme Virtuel 360°')}>
          Accéder au Studio VR
        </button>
      </div>
    </section>
  )
}
