'use client'
import EspaceLayout from '@/components/espace/EspaceLayout'
import Communaute from '@/components/dashboard/Communaute'

export default function Appartenir() {
  return (
    <EspaceLayout
      eyebrow="Appartenir · Communauté"
      title={<>Vous n’êtes <em>plus seul.</em></>}
      lead="Rencontrez celles et ceux qui vivent le Bénin avec vous. Partagez vos histoires, trouvez les leurs."
      heroImg="https://images.unsplash.com/photo-1577185906981-5a60da3fbaa3?w=1920&auto=format&fit=crop&q=80"
    >
      <div className="ep-embed">
        <Communaute />
      </div>
    </EspaceLayout>
  )
}
