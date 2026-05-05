'use client'
import { useState } from 'react'
import EspaceLayout from '@/components/espace/EspaceLayout'
import AgentChat from '@/components/espace/AgentChat'
import { DESTINATIONS } from '@/data/destinations'
import { useStore } from '@/store/useStore'

const IMG: Record<string, string> = {
  abomey:  '/Destinations/activite-abomey.jpg',
  ganvie:  '/Destinations/Vivez-ganvie/trip-ganvie-1.jpg',
  pendjari:'/Destinations/Vivez-pendjari/trip-pendjari-1.jpg',
  ouidah:  '/Destinations/Vivez-ouidah/trip-ouidah-1.jpg',
  atacora: '/Destinations/Vivez-le-nord-ouest/trip-nord-ouest-1.jpg',
  cotonou: '/Destinations/Vivez-porto-novo/trip-porto-novo-1.jpg',
  porto:   '/Destinations/Vivez-porto-novo/trip-porto-novo-2.jpg',
}

type DevisForm = {
  nom: string; prenom: string; email: string
  destination: string; dates: string; personnes: string; message: string
}

const EMPTY: DevisForm = { nom: '', prenom: '', email: '', destination: '', dates: '', personnes: '1', message: '' }

export default function Explorer() {
  const user = useStore(s => s.user)
  const [devis, setDevis] = useState<string | null>(null)
  const [form, setForm] = useState<DevisForm>(EMPTY)
  const [sent, setSent] = useState(false)

  const openDevis = (destTitle: string) => {
    setForm({ ...EMPTY, nom: user?.nom ?? '', prenom: user?.prenom ?? '', email: user?.email ?? '', destination: destTitle })
    setSent(false)
    setDevis(destTitle)
  }

  const submitDevis = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <EspaceLayout
      eyebrow="Explorer · Destinations"
      title={<>Sept joyaux qui <em>attendent d'être vécus.</em></>}
      lead="Chaque destination a son caractère. Choisissez celle qui vous appelle — ou laissez Jojo ou Nadi vous guider."
      heroImg="/Destinations/Vivez-pendjari/trip-pendjari-1.jpg"
      theme="explorer"
    >
      <div className="ep-dest-grid">
        {DESTINATIONS.map(d => (
          <div key={d.id} className="ep-dest">
            <div className="ep-dest-img" style={{ backgroundImage: `url(${IMG[d.id] ?? IMG.porto})` }} />
            <div className="ep-dest-veil" />
            <div className="ep-dest-content">
              <div className="ep-dest-tag">{d.tag}</div>
              <h3 className="ep-dest-name">{d.title}</h3>
              <div className="ep-dest-sub">{d.sub}</div>
              <p className="ep-dest-quote">« {d.quote} »</p>
              <div className="ep-dest-meta">
                {d.rows.slice(0, 3).map(r => (
                  <div key={r.k} className="ep-dest-row"><span>{r.k}</span><b>{r.v}</b></div>
                ))}
              </div>
              <button className="ep-dest-devis" onClick={() => openDevis(d.title)}>
                Demander un devis →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal devis */}
      {devis && (
        <div className="devis-backdrop" onClick={() => setDevis(null)}>
          <div className="devis-modal" onClick={e => e.stopPropagation()}>
            <button className="devis-close" onClick={() => setDevis(null)}>✕</button>
            {sent ? (
              <div className="devis-thanks">
                <div className="devis-thanks-icon">✓</div>
                <h3>Demande envoyée !</h3>
                <p>Nous reviendrons vers vous dans les 24h pour construire votre voyage sur mesure vers <strong>{devis}</strong>.</p>
                <button className="devis-submit" onClick={() => setDevis(null)}>Fermer</button>
              </div>
            ) : (
              <>
                <div className="devis-modal-head">
                  <div className="devis-eyebrow">Fiche de devis</div>
                  <h2 className="devis-title">{devis}</h2>
                </div>
                <form className="devis-form" onSubmit={submitDevis}>
                  <div className="devis-row">
                    <div className="devis-field">
                      <label>Prénom</label>
                      <input required value={form.prenom} onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))} placeholder="Votre prénom" />
                    </div>
                    <div className="devis-field">
                      <label>Nom</label>
                      <input required value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))} placeholder="Votre nom" />
                    </div>
                  </div>
                  <div className="devis-field">
                    <label>Email</label>
                    <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="votre@email.com" />
                  </div>
                  <div className="devis-row">
                    <div className="devis-field">
                      <label>Dates souhaitées</label>
                      <input value={form.dates} onChange={e => setForm(f => ({ ...f, dates: e.target.value }))} placeholder="ex : mars 2026" />
                    </div>
                    <div className="devis-field">
                      <label>Nombre de personnes</label>
                      <input type="number" min="1" value={form.personnes} onChange={e => setForm(f => ({ ...f, personnes: e.target.value }))} />
                    </div>
                  </div>
                  <div className="devis-field">
                    <label>Votre message / besoins particuliers</label>
                    <textarea rows={4} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Dites-nous ce que vous attendez de ce voyage…" />
                  </div>
                  <button className="devis-submit" type="submit">Envoyer ma demande →</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Chat agent IA flottant */}
      <AgentChat />
    </EspaceLayout>
  )
}
