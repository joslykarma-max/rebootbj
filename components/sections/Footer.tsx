'use client'

type Props = { onReserve: () => void }

export default function Footer({ onReserve }: Props) {
  return (
    <footer>
      <div className="footer-bg" />
      <div className="ft">
        <div>
          <div className="fb">REBOOT<span>.BJ</span></div>
          <div className="ftag">&ldquo;Avant de visiter le Bénin,<br />vivez-le.&rdquo;</div>
        </div>
        <div>
          <div className="fct">Explorer</div>
          <ul className="flinks">
            {['Histoire', 'Culture', 'Destinations', 'Tourisme VR'].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(' ', '')}`}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="fct">Services</div>
          <ul className="flinks">
            {['Circuits organisés', 'Guides certifiés', 'Séjours culturels', 'Tourisme virtuel'].map(l => (
              <li key={l}><a href="#" onClick={e => { e.preventDefault(); onReserve() }}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="fct">Contact</div>
          <ul className="flinks">
            <li><a href="https://wa.me/22900000000" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="mailto:contact@rebootbj.com">Email</a></li>
            <li><a href="#" onClick={e => { e.preventDefault(); onReserve() }}>Mon compte</a></li>
          </ul>
        </div>
      </div>
      <div className="fbot">
        <span className="fcopy">© 2025 Reboot BJ — Cotonou, Bénin</span>
        <span className="fcopy">Fait avec passion au Bénin 🇧🇯</span>
      </div>
    </footer>
  )
}
