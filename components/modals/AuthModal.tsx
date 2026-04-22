'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signup, login, resetPassword } from '@/lib/auth'
import { useStore } from '@/store/useStore'

type Props = { open: boolean; onClose: () => void }

export default function AuthModal({ open, onClose }: Props) {
  const [tab, setTab] = useState<'signup' | 'login'>('signup')
  const [success, setSuccess] = useState(false)
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [resetSent, setResetSent] = useState(false)
  const router = useRouter()
  const setUser = useStore(s => s.setUser)

  const handleForgot = async () => {
    if (!loginEmail) { setErr('Entre ton email d\'abord.'); return }
    setErr(''); setBusy(true)
    try {
      await resetPassword(loginEmail)
      setResetSent(true)
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : 'Impossible d\'envoyer le lien')
    } finally {
      setBusy(false)
    }
  }

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErr(''); setBusy(true)
    const f = new FormData(e.currentTarget)
    try {
      const profile = await signup({
        prenom: String(f.get('prenom') || ''),
        nom: String(f.get('nom') || ''),
        email: String(f.get('email') || ''),
        password: String(f.get('password') || ''),
        whatsapp: String(f.get('whatsapp') || ''),
        pays: String(f.get('pays') || ''),
        interet: String(f.get('interet') || ''),
      })
      setUser(profile)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false); onClose(); router.push('/')
      }, 1800)
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : 'Erreur inscription')
    } finally {
      setBusy(false)
    }
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErr(''); setBusy(true)
    const f = new FormData(e.currentTarget)
    try {
      const profile = await login(
        String(f.get('email') || ''),
        String(f.get('password') || ''),
      )
      setUser(profile)
      onClose()
      router.push('/')
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : 'Email ou mot de passe incorrect')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div
      id="auth-overlay"
      className={open ? 'open' : ''}
      onClick={e => { if ((e.target as HTMLElement).id === 'auth-overlay') onClose() }}
    >
      <div className="auth-box">
        <button className="auth-close" onClick={onClose}>✕</button>
        <div className="auth-logo">REBOOT<span>.BJ</span></div>
        <div className="auth-tabs">
          <button className={`auth-tab${tab === 'signup' ? ' active' : ''}`} onClick={() => { setTab('signup'); setErr('') }}>Créer un compte</button>
          <button className={`auth-tab${tab === 'login' ? ' active' : ''}`} onClick={() => { setTab('login'); setErr('') }}>Se connecter</button>
        </div>

        {success ? (
          <div className="auth-success">
            <div className="success-icon">🎉</div>
            <div className="success-title">Bienvenue au Bénin !</div>
            <div className="success-desc">Votre compte est créé. Redirection vers votre espace…</div>
          </div>
        ) : tab === 'signup' ? (
          <form onSubmit={handleSignup}>
            <div className="fr2">
              <div className="fg"><label className="fl">Prénom</label><input className="fi" name="prenom" type="text" placeholder="Kofi" required /></div>
              <div className="fg"><label className="fl">Nom</label><input className="fi" name="nom" type="text" placeholder="Adjovi" required /></div>
            </div>
            <div className="fg"><label className="fl">Email</label><input className="fi" name="email" type="email" placeholder="kofi@email.com" required /></div>
            <div className="fg"><label className="fl">WhatsApp</label><input className="fi" name="whatsapp" type="tel" placeholder="+229 01 XX XX XX XX" /></div>
            <div className="fr2">
              <div className="fg">
                <label className="fl">Pays de résidence</label>
                <select className="fi" name="pays">
                  <option value="">Choisir...</option>
                  <option>🇧🇯 Bénin</option><option>🇫🇷 France</option><option>🇨🇮 Côte d&apos;Ivoire</option>
                  <option>🇸🇳 Sénégal</option><option>🇺🇸 États-Unis</option><option>🇨🇦 Canada</option>
                  <option>🇩🇪 Allemagne</option><option>🌍 Autre pays africain</option><option>🌏 Autre</option>
                </select>
              </div>
              <div className="fg">
                <label className="fl">Intérêt principal</label>
                <select className="fi" name="interet">
                  <option value="">Choisir...</option>
                  <option>🏛️ Histoire & Culture</option><option>🌿 Nature & Safari</option>
                  <option>🌊 Plages & Détente</option><option>🎭 Vodoun & Spirituel</option>
                  <option>🗺️ Tout découvrir</option>
                </select>
              </div>
            </div>
            <div className="fg"><label className="fl">Mot de passe</label><input className="fi" name="password" type="password" placeholder="••••••••" minLength={6} required /></div>
            {err && <div style={{ color: '#ff6b6b', fontSize: 13, margin: '0 0 10px' }}>{err}</div>}
            <button type="submit" className="btn-auth" disabled={busy}>{busy ? 'Création…' : 'Créer mon compte →'}</button>
            <div className="auth-div">ou</div>
            <a href="https://wa.me/22900000000?text=Bonjour%20Reboot%20BJ%2C%20je%20souhaite%20en%20savoir%20plus%20!" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button type="button" className="btn-wa">💬 Continuer sur WhatsApp</button>
            </a>
            <div className="auth-perks">
              {['Accès aux itinéraires et prix complets', 'Contenu historique et culturel exclusif', 'Studio tourisme virtuel 360°', 'Devis personnalisé sous 24h'].map(p => (
                <div key={p} className="perk">{p}</div>
              ))}
            </div>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="fg"><label className="fl">Email</label><input className="fi" name="email" type="email" placeholder="kofi@email.com" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required /></div>
            <div className="fg"><label className="fl">Mot de passe</label><input className="fi" name="password" type="password" placeholder="••••••••" required /></div>
            {err && <div style={{ color: '#ff6b6b', fontSize: 13, margin: '0 0 10px' }}>{err}</div>}
            {resetSent && <div style={{ color: 'var(--o)', fontSize: 13, margin: '0 0 10px' }}>Email envoyé. Vérifie ta boîte (et les spams).</div>}
            <button type="submit" className="btn-auth" disabled={busy}>{busy ? 'Connexion…' : 'Se connecter →'}</button>
            <button type="button" onClick={handleForgot} disabled={busy} style={{ background: 'none', border: 0, color: 'var(--muted)', fontSize: 12, textDecoration: 'underline', cursor: 'pointer', marginTop: 10, fontFamily: 'inherit' }}>
              Mot de passe oublié ?
            </button>
            <div className="auth-div">ou</div>
            <a href="https://wa.me/22900000000" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button type="button" className="btn-wa">💬 Contacter via WhatsApp</button>
            </a>
          </form>
        )}
      </div>
    </div>
  )
}
