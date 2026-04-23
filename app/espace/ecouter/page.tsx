'use client'
import EspaceLayout from '@/components/espace/EspaceLayout'
import Podcasts from '@/components/dashboard/Podcasts'

export default function Ecouter() {
  return (
    <EspaceLayout
      eyebrow="Écouter · Podcasts & sons"
      title={<>Fermez les yeux. <em>Le Bénin vous parle.</em></>}
      lead="Histoires narrées, musique traditionnelle, voix des anciens, ambiances du marché Dantokpa."
      heroImg="https://images.unsplash.com/photo-1580637250481-b78db3e6f84b?w=1920&auto=format&fit=crop&q=80"
    >
      <div className="ep-embed"><Podcasts /></div>
    </EspaceLayout>
  )
}
