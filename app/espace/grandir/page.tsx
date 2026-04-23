'use client'
import EspaceLayout from '@/components/espace/EspaceLayout'

const IDEAS = [
  { icon: '📖', title: 'Histoires illustrées', desc: 'Contes du Bénin en BD : Béhanzin, les Agojie, le lièvre et l’hyène.' },
  { icon: '🎮', title: 'Jeux éducatifs', desc: 'Mémos, puzzles, chasses au trésor autour du patrimoine béninois.' },
  { icon: '🗣️', title: 'Vocabulaire Fon', desc: 'Les premiers mots pour les enfants : famille, animaux, couleurs.' },
  { icon: '🎭', title: 'Personnages en BD', desc: 'Rencontrez les rois, les guerrières, les artistes du Bénin.' },
  { icon: '🎨', title: 'Ateliers créatifs', desc: 'Tissage kente, masques vodoun, sculpture — pour petites mains.' },
  { icon: '📚', title: 'Carnet de voyage', desc: 'Ton journal d’explorateur à remplir avant, pendant, après le voyage.' },
]

export default function Grandir() {
  return (
    <EspaceLayout
      eyebrow="Grandir · Enfants & familles"
      title={<>Le Bénin transmis à la <em>prochaine génération.</em></>}
      lead="Un espace pour que les enfants rencontrent leur pays, son histoire, ses langues. À venir au printemps 2026."
      heroImg="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&auto=format&fit=crop&q=80"
    >
      <div className="ep-soon-banner">
        <div className="ep-soon-label">Bientôt disponible</div>
        <h2 className="ep-soon-title">Nous préparons cet univers avec soin.</h2>
        <p className="ep-soon-desc">Un onglet dédié aux enfants, aux parents, aux enseignants. Nous vous préviendrons quand il sera prêt.</p>
      </div>

      <div className="ep-ideas">
        {IDEAS.map(i => (
          <div key={i.title} className="ep-idea">
            <div className="ep-idea-icon">{i.icon}</div>
            <h3 className="ep-idea-title">{i.title}</h3>
            <p className="ep-idea-desc">{i.desc}</p>
          </div>
        ))}
      </div>
    </EspaceLayout>
  )
}
