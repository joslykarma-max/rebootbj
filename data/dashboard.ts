export type QuizQ = { q: string; a: string[]; ok: number; e: string }

export const QUIZ_POOL: QuizQ[] = [
  { q: 'Combien de rois a compté le Royaume du Dahomey ?', a: ['12', '8', '15', '20'], ok: 0, e: 'De Ganyè Hessou à Béhanzin, 12 rois ont régné sur le Dahomey.' },
  { q: 'Qui étaient les Agojie ?', a: ['Des prêtresses vodoun', 'Une armée de guerrières', 'Des commerçantes', 'Des princesses'], ok: 1, e: 'Les Agojie formaient une armée d\'élite uniquement féminine.' },
  { q: 'Quelle ville est le berceau du Vodoun ?', a: ['Cotonou', 'Porto-Novo', 'Ouidah', 'Abomey'], ok: 2, e: 'Ouidah est considérée comme la capitale mondiale du Vodoun.' },
  { q: 'Le Parc Pendjari abrite combien d\'espèces d\'oiseaux ?', a: ['120', '250', '361', '500'], ok: 2, e: '361 espèces d\'oiseaux recensées dans le parc Pendjari.' },
  { q: 'Que signifie "Dahomey" ?', a: ['Terre des rois', 'Dans le ventre de Dan', 'Soleil levant', 'Pays des palmiers'], ok: 1, e: 'Dahomey vient de "Dan Homè" = dans le ventre de Dan, en référence au roi Dan.' },
  { q: 'Quelle est la capitale économique du Bénin ?', a: ['Porto-Novo', 'Cotonou', 'Abomey', 'Parakou'], ok: 1, e: 'Cotonou est la capitale économique ; Porto-Novo est la capitale politique.' },
  { q: 'Ganvié est surnommée...', a: ['La Venise africaine', 'La perle atlantique', 'Le jardin du Bénin', 'La cité des eaux'], ok: 0, e: 'Ganvié, village lacustre sur le lac Nokoué, est surnommée la Venise africaine.' },
  { q: 'Qui fut le dernier roi du Dahomey ?', a: ['Agadja', 'Ghézo', 'Béhanzin', 'Glèlè'], ok: 2, e: 'Béhanzin fut le 12e et dernier roi, déporté par les Français en 1894.' },
  { q: 'La fête annuelle du Vodoun a lieu le...', a: ['1er janvier', '10 janvier', '21 mars', '15 août'], ok: 1, e: 'Le 10 janvier est la fête nationale du Vodoun au Bénin.' },
  { q: 'Quel fleuve traverse le Bénin du nord au sud ?', a: ['Le Niger', 'Le Mono', 'L\'Ouémé', 'Le Couffo'], ok: 2, e: 'L\'Ouémé est le plus grand fleuve du Bénin (510 km).' },
  { q: 'Les Tata Somba sont...', a: ['Des danses traditionnelles', 'Des maisons-forteresses', 'Des plats typiques', 'Des instruments de musique'], ok: 1, e: 'Les Tata Somba sont les maisons fortifiées du peuple Somba dans l\'Atacora.' },
  { q: 'Le plat national du Bénin est...', a: ['Le mafé', 'Le thiéboudiène', 'L\'amiwo', 'Le yassa'], ok: 2, e: 'L\'amiwo, pâte rouge de maïs, est un plat emblématique.' },
  { q: 'Les palais royaux d\'Abomey sont classés...', a: ['Patrimoine national', 'Patrimoine UNESCO', 'Site archéologique', 'Zone protégée'], ok: 1, e: 'Classés UNESCO depuis 1985.' },
  { q: 'Le Bénin a obtenu son indépendance en...', a: ['1958', '1960', '1962', '1975'], ok: 1, e: 'Indépendance le 1er août 1960.' },
  { q: 'Quel animal est sacré dans le Vodoun ?', a: ['Le lion', 'Le python', 'L\'éléphant', 'L\'aigle'], ok: 1, e: 'Le python royal est sacré ; le Temple des Pythons à Ouidah en abrite une soixantaine.' },
  { q: 'La Porte du Non-Retour se trouve à...', a: ['Cotonou', 'Grand-Popo', 'Ouidah', 'Porto-Novo'], ok: 2, e: 'Mémorial de la traite négrière à Ouidah.' },
  { q: 'Le zémidjan est...', a: ['Un plat', 'Un taxi-moto', 'Une danse', 'Un tissu'], ok: 1, e: 'Le moto-taxi emblématique des villes béninoises.' },
  { q: 'Les chutes de Kota se trouvent dans quelle région ?', a: ['Atacora', 'Zou', 'Mono', 'Plateaux'], ok: 0, e: 'Dans le massif de l\'Atacora, au nord-ouest.' },
  { q: 'Combien de langues parle-t-on au Bénin ?', a: ['Moins de 10', 'Environ 20', 'Plus de 50', 'Plus de 100'], ok: 2, e: 'Plus de 50 langues locales, dont Fon, Yoruba, Bariba.' },
  { q: 'Le marché Dantokpa est...', a: ['Le plus grand d\'Afrique de l\'Ouest', 'Un marché d\'artisanat', 'Un marché aux poissons', 'Un marché nocturne'], ok: 0, e: 'L\'un des plus grands marchés à ciel ouvert d\'Afrique de l\'Ouest.' },
]

export type Episode = {
  id: string
  title: string
  author: string
  duration: number
  premium: boolean
  desc: string
  cover: string
}

export const EPISODES: Episode[] = [
  { id: 'ep1', title: 'Les origines du Dahomey', author: 'Prof. Adjovi', duration: 1320, premium: false, desc: 'L\'histoire de la naissance du royaume Fon au VIIe siècle.', cover: 'https://images.unsplash.com/photo-1533234427049-9e9bb093186d?w=400&auto=format&fit=crop&q=70' },
  { id: 'ep2', title: 'Les Amazones d\'Abomey', author: 'Dr. Houngbédji', duration: 1680, premium: false, desc: 'L\'armée de guerrières qui a défié les empires coloniaux.', cover: 'https://images.unsplash.com/photo-1604598692017-9e9f49d0bcea?w=400&auto=format&fit=crop&q=70' },
  { id: 'ep3', title: 'Vodoun : entre mythe et réalité', author: 'Mama Hounon', duration: 1500, premium: false, desc: 'Comprendre le Vodoun au-delà des clichés occidentaux.', cover: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&auto=format&fit=crop&q=70' },
  { id: 'ep4', title: 'Béhanzin, roi exilé', author: 'Prof. Adjovi', duration: 1800, premium: true, desc: 'La résistance du dernier roi face à la colonisation.', cover: 'https://images.unsplash.com/photo-1580637250481-b78db3e6f84b?w=400&auto=format&fit=crop&q=70' },
  { id: 'ep5', title: 'Ganvié, la cité lacustre', author: 'Kofi Dossou', duration: 1200, premium: true, desc: 'Comment le peuple Tofinu a bâti une ville sur l\'eau.', cover: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&auto=format&fit=crop&q=70' },
  { id: 'ep6', title: 'La route des esclaves', author: 'Dr. Medji', duration: 2100, premium: true, desc: 'De Ouidah aux Amériques, mémoire de la traite.', cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=70' },
  { id: 'ep7', title: 'Les Tata Somba', author: 'Arch. Tamou', duration: 1440, premium: true, desc: 'Architecture sacrée du peuple Somba en Atacora.', cover: 'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=400&auto=format&fit=crop&q=70' },
  { id: 'ep8', title: 'Cotonou, capitale créative', author: 'Aïcha Koudoro', duration: 1560, premium: true, desc: 'Scène artistique et renouveau culturel béninois.', cover: 'https://images.unsplash.com/photo-1577185906981-5a60da3fbaa3?w=400&auto=format&fit=crop&q=70' },
]

export type Alert = { id: string; cat: 'evenement' | 'meteo' | 'nature' | 'pratique'; title: string; body: string; date: string }

export const ALERTS: Alert[] = [
  { id: 'a1', cat: 'evenement', title: 'Fête du Vodoun — 10 janvier', body: 'Cérémonies à Ouidah, danses, défilés. Arriver la veille, réserver tôt.', date: '2026-01-10' },
  { id: 'a2', cat: 'meteo', title: 'Saison sèche jusqu\'en mars', body: 'Meilleure période pour visiter : temps sec, chaud (28-32°C), ciel dégagé.', date: '2026-02-01' },
  { id: 'a3', cat: 'nature', title: 'Safari Pendjari — pic animalier', body: 'Janvier-avril : les animaux se concentrent autour des points d\'eau. Idéal pour les safaris.', date: '2026-02-15' },
  { id: 'a4', cat: 'evenement', title: 'Festival International Epo Djro', body: 'Cotonou, musique afro contemporaine. Line-up dévoilé bientôt.', date: '2026-05-01' },
  { id: 'a5', cat: 'pratique', title: 'Visa e-Visa disponible', body: 'Faites votre e-Visa en ligne sur evisa.gouv.bj — obtenu sous 48h.', date: '2026-03-01' },
  { id: 'a6', cat: 'nature', title: 'Observation des tortues — Grand-Popo', body: 'Saison de ponte des tortues marines de novembre à mars.', date: '2026-02-10' },
  { id: 'a7', cat: 'evenement', title: 'Marché Nocturne d\'Abomey', body: 'Tous les vendredis : artisanat, musique, gastronomie locale.', date: '2026-03-05' },
]

export const LEVELS = [
  { min: 0, name: 'Explorateur', next: 100 },
  { min: 100, name: 'Voyageur', next: 300 },
  { min: 300, name: 'Ambassadeur', next: 700 },
  { min: 700, name: 'Gardien du Dahomey', next: null },
] as const

export const BADGES: Record<string, { icon: string; name: string; desc: string }> = {
  first_step: { icon: '👋', name: 'Premier pas', desc: 'Bienvenue dans Reboot BJ' },
  melomane: { icon: '🎧', name: 'Mélomane', desc: '3 podcasts écoutés' },
  architecte: { icon: '🗺️', name: 'Architecte', desc: 'Premier itinéraire créé' },
  bavard: { icon: '💬', name: 'Bavard', desc: '5 posts publiés' },
  fidele: { icon: '🔥', name: 'Fidèle', desc: '7 jours consécutifs' },
  perfect: { icon: '🏆', name: 'Perfectionniste', desc: 'Quiz parfait' },
}
