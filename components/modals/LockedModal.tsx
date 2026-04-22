'use client'

type Props = {
  open: boolean
  title: string
  onClose: () => void
  onUnlock: () => void
}

export default function LockedModal({ open, title, onClose, onUnlock }: Props) {
  return (
    <div
      id="locked-overlay"
      className={open ? 'open' : ''}
      onClick={e => { if ((e.target as HTMLElement).id === 'locked-overlay') onClose() }}
    >
      <div className="locked-box">
        <div className="lk-icon">🔐</div>
        <div className="lk-title">Contenu exclusif</div>
        <div className="lk-desc">
          Créez un compte gratuit pour accéder à &ldquo;{title}&rdquo; — itinéraires, prix et disponibilités.
        </div>
        <button className="btn-unlock" onClick={onUnlock}>Créer un compte — C&apos;est gratuit</button>
        <br />
        <button className="btn-cancel" onClick={onClose}>Pas maintenant</button>
      </div>
    </div>
  )
}
