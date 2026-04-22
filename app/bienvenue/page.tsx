'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signup, login, resetPassword } from '@/lib/auth'
import { useStore } from '@/store/useStore'

type Form = {
  origine: string
  deja: string
  interet: string
  prenom: string
  email: string
  password: string
}

const BG = [
  'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1920&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1580637250481-b78db3e6f84b?w=1920&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1577185906981-5a60da3fbaa3?w=1920&auto=format&fit=crop&q=80',
]

export default function Bienvenue() {
  const router = useRouter()
  const setUser = useStore(s => s.setUser)
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<Form>({ origine: '', deja: '', interet: '', prenom: '', email: '', password: '' })
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const [existing, setExisting] = useState(false)
  const [resetSent, setResetSent] = useState(false)

  const next = () => setStep(s => s + 1)
  const prev = () => setStep(s => Math.max(0, s - 1))
  const patch = (p: Partial<Form>) => setForm(f => ({ ...f, ...p }))

  const humanize = (e: unknown): { msg: string; existing: boolean } => {
    const raw = e instanceof Error ? e.message : ''
    if (raw.includes('auth/email-already-in-use')) return { msg: 'Cet email a déjà un compte.', existing: true }
    if (raw.includes('auth/invalid-email')) return { msg: 'Email invalide.', existing: false }
    if (raw.includes('auth/weak-password')) return { msg: 'Mot de passe trop court (6 caractères minimum).', existing: false }
    if (raw.includes('auth/wrong-password') || raw.includes('auth/invalid-credential')) return { msg: 'Mot de passe incorrect.', existing: true }
    if (raw.includes('auth/network-request-failed')) return { msg: 'Pas de connexion internet.', existing: false }
    return { msg: 'Impossible de créer le compte pour le moment.', existing: false }
  }

  const submit = async () => {
    setBusy(true); setErr(''); setExisting(false)
    try {
      const profile = await signup({
        prenom: form.prenom,
        nom: '',
        email: form.email,
        password: form.password,
        pays: form.origine,
        interet: form.interet,
      })
      setUser(profile)
      router.push('/dashboard')
    } catch (e: unknown) {
      const h = humanize(e)
      setErr(h.msg); setExisting(h.existing)
    } finally {
      setBusy(false)
    }
  }

  const forgotPassword = async () => {
    if (!form.email) { setErr('Entre ton email d\'abord.'); return }
    setBusy(true); setErr('')
    try {
      await resetPassword(form.email)
      setResetSent(true)
    } catch (e: unknown) {
      const h = humanize(e)
      setErr(h.msg)
    } finally {
      setBusy(false)
    }
  }

  const tryLogin = async () => {
    setBusy(true); setErr('')
    try {
      const profile = await login(form.email, form.password)
      setUser(profile)
      router.push('/dashboard')
    } catch (e: unknown) {
      const h = humanize(e)
      setErr(h.msg)
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="ob-shell" style={{ backgroundImage: `url(${BG[step]})` }}>
      <div className="ob-veil" />
      <a href="/" className="ob-logo"><img src="/logo.png" alt="Reboot BJ" /></a>
      <div className="ob-dots">
        {[0, 1, 2, 3, 4].map(i => <span key={i} className={`ob-dot${i === step ? ' on' : i < step ? ' done' : ''}`} />)}
      </div>

      <div className="ob-stage">
        {step === 0 && (
          <div className="ob-card">
            <div className="ob-eyebrow">Reboot BJ</div>
            <h1 className="ob-h1">Bonjour.<br/>Bienvenue.</h1>
            <p className="ob-lead">Avant de vous ouvrir le Bénin, <em>on fait connaissance ?</em></p>
            <button className="ob-btn" onClick={next}>Commencer</button>
          </div>
        )}

        {step === 1 && (
          <div className="ob-card">
            <div className="ob-step">1 / 4</div>
            <h2 className="ob-h2">D&apos;où venez-vous ?</h2>
            <div className="ob-choices">
              {['🇧🇯 Du Bénin', '🌍 D\'Afrique', '🇪🇺 D\'Europe', '🌎 D\'Amérique', '✨ D\'ailleurs'].map(o => (
                <button key={o} className={`ob-choice${form.origine === o ? ' on' : ''}`} onClick={() => { patch({ origine: o }); setTimeout(next, 250) }}>{o}</button>
              ))}
            </div>
            <button className="ob-back" onClick={prev}>← Retour</button>
          </div>
        )}

        {step === 2 && (
          <div className="ob-card">
            <div className="ob-step">2 / 4</div>
            <h2 className="ob-h2">Vous connaissez déjà le Bénin ?</h2>
            <div className="ob-choices">
              {['Premier voyage', 'J\'y suis déjà allé·e', 'J\'y vis ou y ai vécu'].map(o => (
                <button key={o} className={`ob-choice${form.deja === o ? ' on' : ''}`} onClick={() => { patch({ deja: o }); setTimeout(next, 250) }}>{o}</button>
              ))}
            </div>
            <button className="ob-back" onClick={prev}>← Retour</button>
          </div>
        )}

        {step === 3 && (
          <div className="ob-card">
            <div className="ob-step">3 / 4</div>
            <h2 className="ob-h2">Qu&apos;est-ce qui vous attire ?</h2>
            <div className="ob-choices">
              {['🏛️ Histoire & patrimoine', '🌿 Nature & safaris', '🌊 Plages & détente', '🎭 Vodoun & spirituel', '✨ Tout découvrir'].map(o => (
                <button key={o} className={`ob-choice${form.interet === o ? ' on' : ''}`} onClick={() => { patch({ interet: o }); setTimeout(next, 250) }}>{o}</button>
              ))}
            </div>
            <button className="ob-back" onClick={prev}>← Retour</button>
          </div>
        )}

        {step === 4 && (
          <div className="ob-card">
            <div className="ob-step">4 / 4</div>
            <h2 className="ob-h2">Enchanté.<br/>Comment vous appeler ?</h2>
            <form onSubmit={e => { e.preventDefault(); submit() }} className="ob-form">
              <input className="ob-input" type="text" placeholder="Votre prénom" value={form.prenom} onChange={e => patch({ prenom: e.target.value })} required />
              <input className="ob-input" type="email" placeholder="Votre email" value={form.email} onChange={e => patch({ email: e.target.value })} required />
              <input className="ob-input" type="password" placeholder="Un mot de passe" value={form.password} onChange={e => patch({ password: e.target.value })} minLength={6} required />
              {err && <div className="ob-err">{err}</div>}
              {resetSent && <div className="ob-hint" style={{ color: 'var(--o)' }}>Email envoyé. Vérifie ta boîte de réception (et les spams) pour réinitialiser ton mot de passe.</div>}
              {existing ? (
                <>
                  <button type="button" className="ob-btn" onClick={tryLogin} disabled={busy}>
                    {busy ? 'Connexion…' : 'Se connecter avec ce mot de passe →'}
                  </button>
                  <button type="button" className="ob-back" onClick={forgotPassword} disabled={busy}>
                    Mot de passe oublié ?
                  </button>
                  <div className="ob-hint">Tu as déjà un compte — entre ton mot de passe pour te reconnecter.</div>
                </>
              ) : (
                <button type="submit" className="ob-btn" disabled={busy}>{busy ? 'Création…' : 'Entrer dans Reboot BJ →'}</button>
              )}
            </form>
            <button className="ob-back" onClick={prev}>← Retour</button>
          </div>
        )}
      </div>
    </main>
  )
}
