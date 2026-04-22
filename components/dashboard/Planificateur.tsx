'use client'
import { useState } from 'react'
import { useStore } from '@/store/useStore'
import { addXP, awardBadge, saveItinerary } from '@/lib/db'

type Form = {
  group: string
  days: number
  interests: string[]
  budget: string
  period: string
}

const INTERESTS = ['🏛️ Histoire', '🌿 Nature', '🌊 Plage', '🎭 Vodoun', '🎨 Art', '🍲 Gastronomie']

export default function Planificateur() {
  const user = useStore(s => s.user)!
  const patchUser = useStore(s => s.patchUser)
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<Form>({ group: '', days: 5, interests: [], budget: '', period: '' })
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState('')

  const toggleInt = (i: string) => setForm(f => ({
    ...f,
    interests: f.interests.includes(i) ? f.interests.filter(x => x !== i) : [...f.interests, i],
  }))

  const generate = async () => {
    setBusy(true)
    try {
      let content = ''
      try {
        const r = await fetch('/api/plan', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (r.ok) {
          const data = await r.json()
          content = data.content || ''
        }
      } catch { /* fallback */ }
      if (!content) content = simulate(form)

      setResult(content)
      await saveItinerary(user.uid, { ...form, content })
      const { xp, niveau } = await addXP(user.uid, 30, user.xp)
      patchUser({ xp, niveau })
      if (!user.badges.includes('architecte')) {
        await awardBadge(user.uid, 'architecte')
        patchUser({ badges: [...user.badges, 'architecte'] })
      }
    } catch (e) {
      console.error(e)
    } finally {
      setBusy(false)
    }
  }

  if (result) {
    return (
      <div className="db-page">
        <h1 className="db-h1">Votre itinéraire</h1>
        <div className="db-itin" dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />
        <button className="db-btn" onClick={() => { setResult(''); setStep(0); setForm({ group: '', days: 5, interests: [], budget: '', period: '' }) }}>
          Créer un autre itinéraire
        </button>
      </div>
    )
  }

  return (
    <div className="db-page">
      <h1 className="db-h1">Planificateur IA</h1>
      <p className="db-sub">5 questions, un itinéraire sur mesure.</p>
      <div className="db-progress">
        {[0, 1, 2, 3, 4].map(i => <div key={i} className={`db-dot${i <= step ? ' on' : ''}`} />)}
      </div>

      {step === 0 && (
        <div className="db-form">
          <label className="db-label">Qui voyage ?</label>
          <div className="db-choices">
            {['Solo', 'Couple', 'Famille', 'Amis', 'Groupe'].map(o => (
              <button key={o} className={`db-choice${form.group === o ? ' on' : ''}`} onClick={() => setForm({ ...form, group: o })}>{o}</button>
            ))}
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="db-form">
          <label className="db-label">Combien de jours ?</label>
          <input className="db-input" type="number" min={2} max={21} value={form.days} onChange={e => setForm({ ...form, days: Number(e.target.value) })} />
        </div>
      )}
      {step === 2 && (
        <div className="db-form">
          <label className="db-label">Vos centres d&apos;intérêt</label>
          <div className="db-choices">
            {INTERESTS.map(i => (
              <button key={i} className={`db-choice${form.interests.includes(i) ? ' on' : ''}`} onClick={() => toggleInt(i)}>{i}</button>
            ))}
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="db-form">
          <label className="db-label">Budget indicatif</label>
          <div className="db-choices">
            {['< 150 000 FCFA', '150-300 000', '300-600 000', '> 600 000'].map(o => (
              <button key={o} className={`db-choice${form.budget === o ? ' on' : ''}`} onClick={() => setForm({ ...form, budget: o })}>{o}</button>
            ))}
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="db-form">
          <label className="db-label">Période envisagée</label>
          <div className="db-choices">
            {['Jan-Mar', 'Avr-Juin', 'Juil-Sep', 'Oct-Déc', 'Flexible'].map(o => (
              <button key={o} className={`db-choice${form.period === o ? ' on' : ''}`} onClick={() => setForm({ ...form, period: o })}>{o}</button>
            ))}
          </div>
        </div>
      )}

      <div className="db-actions">
        {step > 0 && <button className="db-btn ghost" onClick={() => setStep(step - 1)}>Retour</button>}
        {step < 4 && <button className="db-btn" onClick={() => setStep(step + 1)} disabled={!canNext(step, form)}>Suivant →</button>}
        {step === 4 && <button className="db-btn" onClick={generate} disabled={busy || !form.period}>{busy ? 'Génération…' : 'Générer mon itinéraire ✨'}</button>}
      </div>
    </div>
  )
}

function canNext(step: number, f: Form): boolean {
  if (step === 0) return !!f.group
  if (step === 1) return f.days >= 2
  if (step === 2) return f.interests.length > 0
  if (step === 3) return !!f.budget
  return true
}

function simulate(f: Form): string {
  const hasHist = f.interests.some(i => i.includes('Histoire'))
  const hasNat = f.interests.some(i => i.includes('Nature'))
  const hasPla = f.interests.some(i => i.includes('Plage'))
  const lines: string[] = []
  lines.push(`✨ ITINÉRAIRE ${f.days} JOURS — ${f.group.toUpperCase()}`)
  lines.push(`Période : ${f.period} · Budget : ${f.budget}`)
  lines.push('')
  if (hasHist) {
    lines.push('📍 JOUR 1-2 — ABOMEY')
    lines.push('Palais royaux UNESCO, musée historique, marché artisanat.')
    lines.push('')
  }
  if (hasNat) {
    lines.push('📍 JOUR 3-4 — PARC PENDJARI')
    lines.push('Safari 4x4, observation lions/éléphants, nuit en lodge.')
    lines.push('')
  }
  if (hasPla) {
    lines.push('📍 JOUR 5 — GRAND-POPO')
    lines.push('Plage, lagune, cocotiers, détente.')
    lines.push('')
  }
  lines.push('📍 FIN — COTONOU')
  lines.push('Marché Dantokpa, art contemporain, gastronomie.')
  lines.push('')
  lines.push('👉 Demandez votre devis via Mon Compte ou WhatsApp.')
  return lines.join('\n')
}
