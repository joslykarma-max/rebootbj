'use client'
import { useState } from 'react'
import EspaceLayout from '@/components/espace/EspaceLayout'
import Quiz from '@/components/dashboard/Quiz'

const FACTS = [
  { n: '12', l: 'rois ont régné sur le Dahomey' },
  { n: '+50', l: 'langues parlées au Bénin' },
  { n: '1960', l: 'année de l’indépendance' },
  { n: '361', l: 'espèces d’oiseaux dans Pendjari' },
  { n: '1985', l: 'palais d’Abomey inscrits UNESCO' },
  { n: '10 jan.', l: 'fête nationale du Vodoun' },
]

const FON = [
  { fr: 'Bonjour', fon: 'Ahoun' },
  { fr: 'Merci', fon: 'Awanou' },
  { fr: 'Oui', fon: 'Ee' },
  { fr: 'Non', fon: 'Ɛɔ' },
  { fr: 'Au revoir', fon: 'A yi' },
  { fr: 'Comment ça va ?', fon: 'A fɔn gan ?' },
  { fr: 'Eau', fon: 'Sin' },
  { fr: 'Nourriture', fon: 'Nuɖuɖu' },
]

const ROIS = [
  { n: 1, nom: 'Ganye Hessou', reigne: 'v. 1600' },
  { n: 2, nom: 'Dakodonou', reigne: '1620–1645' },
  { n: 3, nom: 'Houégbadja', reigne: '1645–1685' },
  { n: 4, nom: 'Akaba', reigne: '1685–1708' },
  { n: 5, nom: 'Agadja', reigne: '1708–1732' },
  { n: 6, nom: 'Tegbessou', reigne: '1732–1774' },
  { n: 7, nom: 'Kpengla', reigne: '1774–1789' },
  { n: 8, nom: 'Agonglo', reigne: '1789–1797' },
  { n: 9, nom: 'Adandozan', reigne: '1797–1818' },
  { n: 10, nom: 'Ghézo', reigne: '1818–1858' },
  { n: 11, nom: 'Glélé', reigne: '1858–1889' },
  { n: 12, nom: 'Béhanzin', reigne: '1889–1894' },
]

export default function Apprendre() {
  const [tab, setTab] = useState<'quiz' | 'faits' | 'fon' | 'rois'>('faits')

  return (
    <EspaceLayout
      eyebrow="Apprendre · Savoirs"
      title={<>Le Bénin comme <em>salle de classe vivante.</em></>}
      lead="Quiz, faits culturels, langue Fon, chronologie royale. Pour les curieux, les étudiants, les Béninois qui veulent redécouvrir leur pays."
      heroImg="https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=1920&auto=format&fit=crop&q=80"
    >
      <div className="ep-tabs">
        <button className={`ep-tab${tab === 'faits' ? ' on' : ''}`} onClick={() => setTab('faits')}>Faits clés</button>
        <button className={`ep-tab${tab === 'fon' ? ' on' : ''}`} onClick={() => setTab('fon')}>Langue Fon</button>
        <button className={`ep-tab${tab === 'rois' ? ' on' : ''}`} onClick={() => setTab('rois')}>12 rois</button>
        <button className={`ep-tab${tab === 'quiz' ? ' on' : ''}`} onClick={() => setTab('quiz')}>Quiz</button>
      </div>

      {tab === 'faits' && (
        <div className="ep-facts">
          {FACTS.map(f => (
            <div key={f.l} className="ep-fact"><div className="ep-fact-n">{f.n}</div><div className="ep-fact-l">{f.l}</div></div>
          ))}
        </div>
      )}

      {tab === 'fon' && (
        <div className="ep-fon">
          <p className="ep-note">Le Fon est la langue majoritaire du sud du Bénin. Voici quelques mots pour démarrer.</p>
          <div className="ep-fon-grid">
            {FON.map(w => (
              <div key={w.fr} className="ep-fon-card">
                <div className="ep-fon-fr">{w.fr}</div>
                <div className="ep-fon-word">{w.fon}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'rois' && (
        <div className="ep-kings">
          {ROIS.map(r => (
            <div key={r.n} className="ep-king">
              <div className="ep-king-n">{r.n}</div>
              <div className="ep-king-nom">{r.nom}</div>
              <div className="ep-king-reigne">{r.reigne}</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'quiz' && <div className="ep-embed"><Quiz /></div>}
    </EspaceLayout>
  )
}
