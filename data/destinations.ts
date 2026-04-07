// data/destinations.ts
// Données des 7 destinations béninoises — source unique de vérité

export type Destination = {
  id: string
  tag: string
  title: string
  sub: string
  text: string
  quote: string
  rows: { k: string; v: string }[]
  price: string
  bg: string
  emoji: string
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'abomey',
    tag: 'Histoire · Patrimoine UNESCO',
    title: 'Abomey',
    sub: 'Capitale du Royaume du Dahomey',
    text: "Pendant 300 ans, Abomey fut le cœur d'un empire. Ses palais royaux classés UNESCO en 1985 abritent les tombes de 12 rois et des bas-reliefs millénaires. L'histoire du Dahomey s'y raconte dans chaque mur.",
    quote: "Les légendaires Agojie — guerrières d'élite de Béhanzin — ont inspiré le monde entier. Elles étaient réelles, elles étaient ici.",
    rows: [
      { k: 'Distance', v: '135 km de Cotonou · 2h30' },
      { k: 'Durée', v: '1 à 2 jours' },
      { k: 'Incontournable', v: 'Palais royaux, Musée des Amazones' },
      { k: 'Idéal', v: 'Novembre à mars' },
    ],
    price: '45 000',
    bg: 'linear-gradient(160deg,#2C1408,#0D0702)',
    emoji: '🏛️',
  },
  {
    id: 'ganvie',
    tag: 'Unique · Cité lacustre',
    title: 'Ganvié',
    sub: 'La Venise africaine · Lac Nokoué',
    text: "130 000 personnes vivent sur pilotis au milieu du lac Nokoué. Depuis le XVIIe siècle, ce peuple a choisi l'eau pour survivre. Ganvié est la plus grande cité lacustre d'Afrique subsaharienne.",
    quote: '"Ganvié" signifie "nous avons survécu" en Fon. Un nom de victoire pour un peuple qui a choisi l\'eau plutôt que l\'esclavage.',
    rows: [
      { k: 'Accès', v: 'Pirogue · 30 min depuis Abomey-Calavi' },
      { k: 'Durée', v: 'Demi-journée ou journée complète' },
      { k: 'Meilleure heure', v: 'Tôt le matin · marché animé' },
    ],
    price: '35 000',
    bg: 'linear-gradient(160deg,#0A1828,#030810)',
    emoji: '🚣',
  },
  {
    id: 'pendjari',
    tag: 'Nature · Safari',
    title: 'Pendjari',
    sub: 'La grande savane du Nord Bénin',
    text: "4 800 km² de savane préservée. Des lions, des éléphants, des hippopotames, 361 espèces d'oiseaux. Pendjari est l'un des derniers grands sanctuaires sauvages d'Afrique de l'Ouest — et presque personne ne le sait.",
    quote: "La meilleure réserve naturelle d'Afrique de l'Ouest, méconnue du monde. C'est exactement pourquoi il faut y aller maintenant.",
    rows: [
      { k: 'Distance', v: '650 km · 8h ou 1h de vol' },
      { k: 'Durée idéale', v: '3 à 5 jours' },
      { k: 'Faune', v: 'Lions, éléphants, hippos, buffles' },
      { k: 'Saison', v: 'Nov. à avril' },
    ],
    price: '150 000',
    bg: 'linear-gradient(160deg,#0D1A0A,#030603)',
    emoji: '🦁',
  },
  {
    id: 'ouidah',
    tag: 'Spirituel · Mémoire',
    title: 'Ouidah',
    sub: 'Cité du Vodoun et de la Route des Esclaves',
    text: "Des millions d'Africains ont embarqué depuis la plage d'Ouidah vers les Amériques. Aujourd'hui, la Route des Esclaves mène à la \"Porte du non-retour\" — un lieu de mémoire universel, d'une puissance rare.",
    quote: "Le Vodoun né ici a traversé l'Atlantique et donné naissance au Voodoo haïtien, au Candomblé brésilien. Ouidah est l'origine.",
    rows: [
      { k: 'Distance', v: '42 km · 45 min de Cotonou' },
      { k: 'Durée', v: '1 journée complète' },
      { k: 'Incontournable', v: 'Route des Esclaves, Temple des Pythons' },
      { k: 'Événement', v: 'Fête du Vodoun · 10 janvier' },
    ],
    price: '40 000',
    bg: 'linear-gradient(160deg,#180820,#060309)',
    emoji: '🎭',
  },
  {
    id: 'atacora',
    tag: 'Aventure · UNESCO',
    title: 'Atacora',
    sub: 'Falaises, Tata Somba et cascades de Kota',
    text: "Dans le nord du Bénin, les peuples Somba ont bâti des maisons-forteresses uniques au monde. Les Tata Somba — classées UNESCO — sont des œuvres d'architecture de survie encore habitées aujourd'hui.",
    quote: "Les Tata Somba : les humains au premier étage, les animaux au rez-de-chaussée, le grain en hauteur. Une forteresse, une ferme, une vie.",
    rows: [
      { k: 'Distance', v: '580 km · 7h de route' },
      { k: 'Durée', v: '3 à 4 jours' },
      { k: 'Activités', v: 'Trekking, cascades, villages Somba' },
      { k: 'Meilleure période', v: 'Oct. à mars' },
    ],
    price: '90 000',
    bg: 'linear-gradient(160deg,#1A1208,#050402)',
    emoji: '⛰️',
  },
  {
    id: 'cotonou',
    tag: 'Capitale économique',
    title: 'Cotonou',
    sub: 'Le cœur vivant du Bénin',
    text: "Point de départ de toutes les aventures, Cotonou est une ville qui ne dort pas. Le marché Dantokpa — le plus grand d'Afrique de l'Ouest à ciel ouvert —, les galeries d'art, la plage de Fidjrossè.",
    quote: "Dantokpa vend de tout : des épices aux smartphones, des Vodoun aux téléphones reconditionnés. Y entrer sans guide, c'est se perdre — délicieusement.",
    rows: [
      { k: 'Aéroport', v: 'Aéroport Intl. Cadjehoun' },
      { k: 'Incontournable', v: "Dantokpa, Fidjrossè, galeries d'art" },
      { k: 'Transport', v: 'Zémidjans · moto-taxis iconiques' },
    ],
    price: '25 000',
    bg: 'linear-gradient(160deg,#151008,#040302)',
    emoji: '🏙️',
  },
  {
    id: 'porto',
    tag: 'Capitale constitutionnelle',
    title: 'Porto-Novo',
    sub: 'La capitale oubliée',
    text: "Porto-Novo est la capitale constitutionnelle du Bénin, et pourtant la plupart des voyageurs la ratent. C'est une erreur. Le musée Da Silva, les quartiers afro-brésiliens, le marché d'Adjarra — une ville hors du temps.",
    quote: "Porto-Novo à 30 minutes de Cotonou, et pourtant un autre monde. Moins de touristes, plus d'âme.",
    rows: [
      { k: 'Distance', v: '30 km de Cotonou' },
      { k: 'Incontournable', v: 'Musée Da Silva, quartiers coloniaux' },
      { k: 'Marché', v: 'Adjarra · dimanche matin' },
    ],
    price: '20 000',
    bg: 'linear-gradient(160deg,#0D1218,#030508)',
    emoji: '🏛️',
  },
]

export const DESTINATIONS_MAP: Record<string, Destination> = Object.fromEntries(
  DESTINATIONS.map((d) => [d.id, d])
)
