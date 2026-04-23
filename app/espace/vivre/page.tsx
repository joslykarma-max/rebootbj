'use client'
import { useState } from 'react'
import EspaceLayout from '@/components/espace/EspaceLayout'
import Planificateur from '@/components/dashboard/Planificateur'

export default function Vivre() {
  const [tab, setTab] = useState<'plan' | 'vr'>('plan')

  return (
    <EspaceLayout
      eyebrow="Vivre · Réservation & VR"
      title={<>Deux façons de <em>passer à l’acte.</em></>}
      lead="Planifiez votre voyage avec notre IA, ou immergez-vous d'abord en 360° depuis votre salon."
      heroImg="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&auto=format&fit=crop&q=80"
    >
      <div className="ep-tabs">
        <button className={`ep-tab${tab === 'plan' ? ' on' : ''}`} onClick={() => setTab('plan')}>Planifier mon voyage</button>
        <button className={`ep-tab${tab === 'vr' ? ' on' : ''}`} onClick={() => setTab('vr')}>Tourisme virtuel 360°</button>
      </div>

      {tab === 'plan' && (
        <div className="ep-embed"><Planificateur /></div>
      )}

      {tab === 'vr' && (
        <section className="ep-vr">
          <div className="ep-vr-grid">
            {[
              { name: 'Palais d’Abomey', desc: 'Reconstitution 3D des salles royales', img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&auto=format&fit=crop&q=70' },
              { name: 'Ganvié en pirogue', desc: 'Traversée virtuelle du lac Nokoué', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&auto=format&fit=crop&q=70' },
              { name: 'Safari Pendjari', desc: 'Drone 4K au cœur de la savane', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&auto=format&fit=crop&q=70' },
              { name: 'Grand-Popo', desc: 'Plages vierges au coucher du soleil', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=70' },
            ].map(x => (
              <div key={x.name} className="ep-vr-card">
                <div className="ep-vr-img" style={{ backgroundImage: `url(${x.img})` }} />
                <div className="ep-vr-body">
                  <h3 className="ep-vr-name">{x.name}</h3>
                  <p className="ep-vr-desc">{x.desc}</p>
                  <button className="ep-btn" disabled>Accéder · Bientôt</button>
                </div>
              </div>
            ))}
          </div>
          <p className="ep-note">
            Le studio VR de Reboot BJ est en développement. Compatible bientôt avec les casques Oculus / Meta Quest via WebXR.
          </p>
        </section>
      )}
    </EspaceLayout>
  )
}
