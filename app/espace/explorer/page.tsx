'use client'
import EspaceLayout from '@/components/espace/EspaceLayout'
import { DESTINATIONS } from '@/data/destinations'

const IMG: Record<string, string> = {
  abomey: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&auto=format&fit=crop&q=70',
  ganvie: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=70',
  pendjari: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=70',
  ouidah: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&auto=format&fit=crop&q=70',
  atacora: 'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=1200&auto=format&fit=crop&q=70',
  cotonou: 'https://images.unsplash.com/photo-1577185906981-5a60da3fbaa3?w=1200&auto=format&fit=crop&q=70',
  porto: 'https://images.unsplash.com/photo-1580637250481-b78db3e6f84b?w=1200&auto=format&fit=crop&q=70',
}

export default function Explorer() {
  return (
    <EspaceLayout
      eyebrow="Explorer · Destinations"
      title={<>Sept joyaux qui <em>attendent d’être vécus.</em></>}
      lead="Chaque destination a son caractère. Choisissez celle qui vous appelle."
      heroImg="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&auto=format&fit=crop&q=80"
    >
      <div className="ep-dest-grid">
        {DESTINATIONS.map(d => (
          <a key={d.id} href={`/espace/vivre?dest=${d.id}`} className="ep-dest">
            <div className="ep-dest-img" style={{ backgroundImage: `url(${IMG[d.id]})` }} />
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
              <div className="ep-dest-price">Dès {d.price} FCFA <span>· par personne</span></div>
            </div>
          </a>
        ))}
      </div>
    </EspaceLayout>
  )
}
