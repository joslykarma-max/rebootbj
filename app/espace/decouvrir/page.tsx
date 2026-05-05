'use client'
import { useState } from 'react'
import EspaceLayout from '@/components/espace/EspaceLayout'

type Article = {
  id: string
  tag: string
  title: string
  excerpt: string
  img: string
  imgPos?: string
  readTime: string
  body: React.ReactNode
}

const ARTICLES: Article[] = [
  {
    id: 'dahomey-origines',
    tag: 'Histoire',
    title: 'Les origines du Dahomey',
    excerpt: 'Comment le peuple Fon bâtit un empire qui allait résister aux siècles et fasciner le monde entier.',
    img: '/images/roi-dahomey.png',
    imgPos: '20% 15%',
    readTime: '5 min',
    body: (
      <>
        <p>Au cœur de l'Afrique de l'Ouest, dans la région d'Abomey, naît au VIIe siècle l'une des civilisations les plus fascinantes du continent africain. Le peuple Fon, issu d'une alliance entre plusieurs clans, pose les fondations d'un royaume qui allait durer plus de mille ans.</p>
        <p>Contrairement à ce que l'on pourrait imaginer, le Dahomey n'est pas né de la conquête brutale, mais d'une organisation politique sophistiquée. Les premiers rois fon établissent un système de gouvernance centralisé, avec des ministres, des conseillers royaux, et un réseau d'espions — une administration d'État élaborée bien avant l'arrivée des Européens sur ces côtes.</p>
        <h3>Le pacte fondateur</h3>
        <p>La légende rapporte que le royaume fut fondé lorsque le roi Dakodonou, mécontent d'un chef local nommé Dan, décida de construire son palais dans son ventre — d'où le nom "Da-ho-mey" : "dans le ventre de Dan". Ce récit mythologique cache une réalité politique : l'absorption progressive des pouvoirs locaux par une autorité centrale.</p>
        <p>Les palais royaux d'Abomey, véritables citadelles de terre battue, témoignent encore aujourd'hui de cette organisation unique. Chaque roi ajoutait son palais au complexe existant, créant ainsi une ville dans la ville, un mémorial vivant de la continuité dynastique.</p>
        <h3>Une société d'une rare sophistication</h3>
        <p>Le Dahomey développe très tôt un système économique complexe : marchés régulés, monnaie de cauris, commerce longue distance. Les artisans fon produisent des œuvres en bronze, en fer forgé et en tissu appliqué d'une qualité qui stupéfiera les collectionneurs européens des siècles plus tard.</p>
        <p>La religion animiste Vodoun structure la vie sociale : chaque famille, chaque clan possède ses divinités protectrices, ses rites et ses cérémonies. Cette spiritualité profonde imprègne chaque aspect de la vie quotidienne et traverse les siècles pour arriver jusqu'à nous.</p>
      </>
    ),
  },
  {
    id: 'age-or',
    tag: 'Histoire',
    title: 'L'âge d'or du Royaume',
    excerpt: 'Sous les rois Houégbadja, Agadja et Tegbeossu, le Dahomey s'impose comme la puissance incontournable de l'Afrique de l'Ouest.',
    img: '/images/Gemini_Generated_Image_ft0r8mft0r8mft0r.png',
    imgPos: 'center 10%',
    readTime: '6 min',
    body: (
      <>
        <p>Du XVIe au XVIIIe siècle, le Dahomey connaît son apogée. Trois rois exceptionnels se succèdent et transforment ce petit royaume en une puissance régionale redoutée, commerçant avec l'Europe, l'Afrique du Nord et l'ensemble du continent.</p>
        <h3>Houégbadja, le bâtisseur</h3>
        <p>C'est lui qui codifie les lois du royaume, organise l'armée et instaure le système de collecte d'impôts. Sous son règne, Abomey devient une capitale digne de ce nom : artisans, marchands, dignitaires du monde entier s'y côtoient dans les marchés animés.</p>
        <h3>Agadja, le conquérant</h3>
        <p>Au début du XVIIIe siècle, le roi Agadja étend considérablement le territoire du Dahomey. Il atteint la côte atlantique, contrôlant ainsi les routes commerciales vers l'Europe. Sa flotte de pirogues sur les lagunes côtières fait de lui un acteur incontournable du commerce régional.</p>
        <p>C'est aussi sous son règne que les premiers contacts diplomatiques avec les Européens s'intensifient. Des ambassadeurs sont échangés, des traités signés, des cadeaux royaux offerts — le Dahomey joue la diplomatie comme un joueur d'échecs maîtrisé.</p>
        <h3>Les palais classés UNESCO</h3>
        <p>Les douze palais royaux d'Abomey constituent aujourd'hui l'un des sites du patrimoine mondial de l'UNESCO les plus remarquables d'Afrique. Leurs murs de terre de deux mètres d'épaisseur, ornés de bas-reliefs racontant l'histoire de chaque roi, sont un livre ouvert sur mille ans de civilisation.</p>
        <p>Ces bas-reliefs — animaux symboliques, scènes de bataille, allégories royales — constituent l'une des premières formes d'écriture figurative de l'Afrique de l'Ouest. Chaque motif a une signification précise, un message politique ou spirituel destiné aux visiteurs et aux générations futures.</p>
        <p>Aujourd'hui restaurés avec soin, ces palais accueillent le Musée Historique d'Abomey, qui conserve trônes, statues et artefacts royaux dans un silence chargé d'histoire.</p>
      </>
    ),
  },
  {
    id: 'amazones',
    tag: 'Histoire',
    title: 'Les Amazones — Agojie',
    excerpt: 'Elles composaient un tiers de l'armée royale et effrayaient les soldats européens. L'histoire vraie des guerrières du roi Béhanzin.',
    img: '/images/Gemini_Generated_Image_nvasw6nvasw6nvas.png',
    imgPos: 'center 15%',
    readTime: '7 min',
    body: (
      <>
        <p>L'histoire des Agojie est l'une des plus extraordinaires que l'Afrique ait produites. Ces guerrières d'élite, que les Européens appelèrent "Amazones du Dahomey", représentaient au XIXe siècle jusqu'à un tiers de l'armée royale. Leur discipline, leur férocité au combat et leur loyauté absolue en faisaient les soldates les plus redoutées de toute la région.</p>
        <h3>Des origines royales</h3>
        <p>Les Agojie naissent comme corps militaire féminin au XVIIe siècle, sous le règne du roi Houégbadja. Initialement composées de femmes condamnées pour divers délits et reconverties en chasseresses royales, elles évoluent rapidement en une élite militaire. Recrutées dès l'adolescence — parfois offertes par leur famille comme signe de dévotion au roi — elles suivent un entraînement de plusieurs années.</p>
        <h3>Un entraînement sans pitié</h3>
        <p>Leur formation est légendaire : marches forcées de plusieurs jours sans eau ni nourriture, combats corps à corps avec des hommes adultes, traversées de haies de plantes épineuses sans se plaindre. Celles qui survivent à cet entraînement deviennent des soldates d'une efficacité redoutable.</p>
        <p>Elles maîtrisent les armes de l'époque : sagaies, couperets, fusils importés d'Europe. Mais leur arme la plus puissante reste leur mental d'acier et leur cohésion de groupe, forgés par des années de vie commune dans l'enceinte du palais royal.</p>
        <h3>Face aux Français</h3>
        <p>En 1890 et 1892, lors des deux guerres franco-dahométiennes, les Agojie stupéfient les soldats de l'armée coloniale française. Les rapports militaires français de l'époque décrivent leur courage avec un mélange d'admiration et de terreur. Plusieurs officiers français avouèrent que ces femmes combattaient avec une ardeur supérieure à celle de nombreux soldats masculins.</p>
        <p>Malgré leur bravoure, elles ne peuvent résister à l'artillerie et aux armes modernes de l'armée française. Le Dahomey tombe en 1892. Les dernières Agojie survivantes se fondent dans la population, gardant secret leur appartenance à ce corps d'élite.</p>
        <h3>Un héritage mondial</h3>
        <p>La dernière Agojie connue, Nawi, décède en 1979, à l'âge supposé de plus de 100 ans. Aujourd'hui, leur histoire inspire le monde entier — des musées de Paris à Hollywood, où le film "La Femme Roi" (2022) leur a rendu un hommage cinématographique. Au Bénin, elles sont une fierté nationale, symbole de la résistance africaine et de la force des femmes.</p>
      </>
    ),
  },
  {
    id: 'vodoun',
    tag: 'Culture',
    title: 'Vodoun : la spiritualité béninoise',
    excerpt: 'Incompris et mal représenté en Occident, le Vodoun est une philosophie profonde qui structure la vie de millions de Béninois.',
    img: '/images/Benin-Egungun-Costume-97.5.1-675x1024.jpg',
    imgPos: 'center 20%',
    readTime: '6 min',
    body: (
      <>
        <p>Le mot "Vodoun" évoque souvent des images déformées par des siècles de mécompréhension occidentale. Poupées percées d'aiguilles, magie noire, sorcellerie — autant de clichés qui n'ont rien à voir avec la réalité de cette spiritualité ancestrale, l'une des plus riches et complexes du monde.</p>
        <h3>Une philosophie du vivant</h3>
        <p>Le Vodoun — signifiant littéralement "esprit" ou "divinité" en langue fon — est une vision du monde qui reconnaît la présence d'un principe divin dans toutes choses : les rivières, les arbres, les animaux, les ancêtres. C'est une cosmologie sophistiquée, un cadre éthique et une pratique communautaire qui traverse les siècles.</p>
        <p>Les "Vodoun" (divinités) sont des forces naturelles personnifiées : Hevioso est la foudre et la justice, Sakpata gouverne la terre et les maladies, Agwé protège les eaux. Chacune possède ses couleurs, ses danses, ses prières et ses interdits. Le pratiquant entre en communion avec ces forces lors des cérémonies, cherchant harmonie, guérison et sagesse.</p>
        <h3>Les Egungun : les ancêtres parmi nous</h3>
        <p>L'une des manifestations les plus frappantes du Vodoun est la confrérie Egungun. Ces masques colorés, ces costumes éclatants que l'on voit lors des fêtes, représentent les ancêtres revenus parmi les vivants. Porter le costume Egungun, c'est littéralement incarner l'esprit d'un ancêtre — une responsabilité sacrée transmise de génération en génération.</p>
        <p>Les cérémonies Egungun, avec leurs chants, leurs danses et leurs messages des ancêtres, constituent un lien vivant entre les morts et les vivants. Elles rappellent aux communautés d'où elles viennent et vers quelles valeurs elles doivent tendre.</p>
        <h3>Le Festival Vodoun d'Ouidah</h3>
        <p>Chaque 10 janvier, la ville d'Ouidah célèbre la Fête Nationale du Vodoun. Des milliers de pratiquants du monde entier — Bénin, Nigeria, Ghana, Brésil, Haïti, États-Unis — convergent vers cette ville côtière pour des cérémonies qui durent plusieurs jours. Musique de tambours, danses de transe, processions colorées : c'est l'un des rassemblements spirituels les plus impressionnants au monde.</p>
        <p>Car oui, le Vodoun a traversé les océans. Emporté par les millions d'Africains réduits en esclavage, il s'est transformé en Haïti, au Brésil, à la Nouvelle-Orléans, créant le Vaudou haïtien, le Candomblé brésilien, la Santería cubaine. Ces pratiques sont les enfants du Vodoun béninois, preuve de la résilience culturelle d'un peuple face à l'horreur de l'esclavage.</p>
      </>
    ),
  },
  {
    id: 'ganvie',
    tag: 'Destination',
    title: 'Ganvié, la Venise d'Afrique',
    excerpt: '130 000 habitants vivent sur pilotis au milieu du lac Nokoué. La plus grande cité lacustre d'Afrique, née d'un acte de résistance.',
    img: '/Destinations/Vivez-ganvie/trip-ganvie-1.jpg',
    imgPos: 'center center',
    readTime: '4 min',
    body: (
      <>
        <p>Naviguer vers Ganvié, c'est remonter le temps et entrer dans un monde à part. À une heure de pirogue depuis Cotonou, sur les eaux du lac Nokoué, apparaît progressivement une ville entière construite sur l'eau. Des maisons sur pilotis à perte de vue, des pirogues qui font office de rue, des marchés flottants animés par des femmes en tenues colorées.</p>
        <h3>Une ville née de la résistance</h3>
        <p>Ganvié n'est pas née d'un caprice architectutal. Elle est née de la nécessité. Au XVIIe siècle, fuyant les raids des guerriers Fon qui vendaient leurs prisonniers aux négriers portugais, le peuple Tofinu trouva refuge sur les eaux. Les Fon, dont la religion interdisait l'accès aux lacs, ne pouvaient les poursuivre. L'eau devint leur protection, et cette protection devint leur demeure.</p>
        <p>Le nom "Ganvié" signifie d'ailleurs "nous sommes sauvés" en langue fon — un nom programme qui dit tout de l'origine et de l'esprit de ce lieu exceptionnel.</p>
        <h3>130 000 âmes sur l'eau</h3>
        <p>Aujourd'hui, Ganvié abrite environ 130 000 habitants qui vivent sur l'eau depuis leur naissance. Les maisons en bois et bambou reposent sur des pilotis enfoncés dans la vase du lac. Les enfants apprennent à nager avant de marcher. Les marchés se font de pirogue à pirogue. Même l'école et les deux hôpitaux flottent.</p>
        <p>L'économie de Ganvié repose essentiellement sur la pêche. Les hommes posent des "acadjas" — des branchages immergés qui créent des récifs artificiels où les poissons se réfugient — et les récoltent régulièrement. Cette technique ancestrale, ingénieuse et durable, nourrit la ville depuis des siècles.</p>
        <h3>Vivre à Ganvié avec Reboot BJ</h3>
        <p>Un séjour à Ganvié avec Reboot BJ, c'est bien plus qu'une balade touristique. C'est une immersion dans la vie quotidienne : marché du matin avec les pêcheurs, repas chez l'habitant, soirée aux étoiles sur un ponton. Nos guides locaux, nés à Ganvié, vous racontent la ville de l'intérieur — ses secrets, ses traditions, ses défis contemporains.</p>
      </>
    ),
  },
  {
    id: 'ouidah',
    tag: 'Destination',
    title: 'Ouidah, la porte de l'âme béninoise',
    excerpt: 'Temple des Pythons, Route des Esclaves, Festival Vodoun. Ouidah concentre en quelques kilomètres carrés toute la profondeur du Bénin.',
    img: '/Destinations/Vivez-ouidah/trip-ouidah-1.jpg',
    imgPos: 'center center',
    readTime: '5 min',
    body: (
      <>
        <p>Il y a des villes qui vous changent. Ouidah en fait partie. À une heure de route de Cotonou, cette ville côtière est un livre ouvert sur les pages les plus sombres et les plus lumineuses de l'histoire africaine. Ici, tout coexiste : la joie des cérémonies Vodoun et la douleur de la traite négrière, la foi des catholiques et la dévotion des animistes, la mer et la forêt des cocos.</p>
        <h3>La Route des Esclaves</h3>
        <p>Tracée sur quatre kilomètres depuis le centre-ville jusqu'à la plage, la Route des Esclaves est l'un des lieux de mémoire les plus bouleversants d'Afrique. C'est par ce chemin que des millions d'Africains — les historiens estiment à plus d'un million le nombre de personnes embarquées depuis Ouidah — furent conduits jusqu'aux bateaux négriers.</p>
        <p>Au bout de cette route se dresse la "Porte du Non-Retour", une arche monumentale face à l'océan. Elle symbolise le déchirement ultime : ceux qui franchissaient cette porte ne reverraient jamais leur terre natale. Aujourd'hui, des descendants de déportés du Brésil, d'Haïti et des États-Unis viennent ici accomplir un pèlerinage, retrouver leurs racines, boucler la boucle de l'histoire.</p>
        <h3>Le Temple des Pythons</h3>
        <p>Dans le centre d'Ouidah, derrière une façade discrète, se cache l'un des lieux les plus singuliers du monde : le Temple des Pythons. Des dizaines de pythons royaux — l'animal sacré du dieu Dangbé — vivent en liberté dans ce sanctuaire. Ils se promènent sur les épaules des visiteurs, glissent entre les piliers du temple, et sortent parfois dans les rues environnantes — sans que personne ne s'en alarme.</p>
        <p>Pour les habitants d'Ouidah, le python n'est pas un reptile à craindre mais un protecteur divin. Tuer un python, même accidentellement, reste un acte grave qui nécessite des cérémonies d'expiation. Ce rapport intime avec l'animal sacré témoigne de la profondeur du Vodoun dans la vie quotidienne.</p>
        <h3>Le Festival International Vodoun</h3>
        <p>Chaque 10 janvier, Ouidah devient le centre du monde Vodoun. Pratiquants du Bénin, du Nigeria, du Brésil, d'Haïti, des États-Unis convergent vers la ville pour des cérémonies qui s'étendent sur plusieurs jours. Danses de possession, processions de masques Egungun, sacrifices rituels, concerts de musique sacrée — le festival est une expérience totale, qui engage tous les sens et touche quelque chose de profond en chaque visiteur.</p>
      </>
    ),
  },
  {
    id: 'abomey',
    tag: 'Patrimoine',
    title: 'Abomey, les palais d'un royaume',
    excerpt: 'Classés UNESCO depuis 1985, les palais royaux d'Abomey sont les témoins muets d'un millénaire de grandeur et de résistance.',
    img: '/Destinations/activite-abomey.jpg',
    imgPos: 'center center',
    readTime: '5 min',
    body: (
      <>
        <p>Abomey. Le nom seul suffit à faire résonner quelque chose dans la mémoire collective africaine. Ancienne capitale du puissant Royaume du Dahomey, cette ville du centre du Bénin conserve dans ses murs de terre les traces d'une civilisation qui a marqué l'histoire du continent.</p>
        <h3>Un site hors du commun</h3>
        <p>Le complexe des palais royaux d'Abomey s'étend sur quarante hectares. Douze rois se sont succédé, chacun construisant son propre palais dans le prolongement du précédent — créant ainsi un ensemble architectural unique au monde, une ville-palais qui s'est développée sur cinq siècles.</p>
        <p>Les murs de latérite — cette argile rougeâtre typique de l'Afrique de l'Ouest — atteignent par endroits deux mètres d'épaisseur. Ils sont couverts de bas-reliefs polychromes qui racontent l'histoire de chaque souverain : batailles gagnées, animaux totémiques, exploits diplomatiques. C'est la bibliothèque du Dahomey, écrite en argile et en peinture.</p>
        <h3>Les trésors du musée</h3>
        <p>À l'intérieur du complexe, le Musée Historique d'Abomey conserve des milliers d'objets royaux : trônes incrustés de crânes d'ennemis vaincus (symbole de puissance, non de cruauté — chaque crâne représente un roi ennemi honoré dans la mort), statues mi-hommes mi-animaux des rois divinisés, tuniques de guerre des Agojie, bijoux royaux en or et en cuivre.</p>
        <p>Parmi les pièces les plus émouvantes : les trônes. Chaque roi avait le sien, distinct et chargé de symbolisme. Celui du roi Glélé est surmonté d'un lion rugissant — lui-même portait le nom "le lion qui montre ses crocs à ceux qui le provoquent". Un programme politique résumé en une sculpture.</p>
        <h3>Un site à restaurer, un héritage à protéger</h3>
        <p>En 1985, un incendie criminel détruisit deux des palais. UNESCO et gouvernement béninois travaillent depuis lors à la restauration progressive du site. Certaines parties ont retrouvé leur splendeur d'origine ; d'autres attendent encore les fonds nécessaires. Visiter Abomey aujourd'hui, c'est contribuer à la préservation de ce patrimoine inestimable.</p>
      </>
    ),
  },
  {
    id: 'renaissance',
    tag: 'Aujourd'hui',
    title: 'Le Bénin se réveille',
    excerpt: 'Œuvres royales rapatriées, scène artistique bouillonnante, gastronomie en pleine renaissance. Le Bénin est en train de réécrire son histoire.',
    img: '/images/benin.png',
    imgPos: 'center center',
    readTime: '4 min',
    body: (
      <>
        <p>Quelque chose s'est mis en mouvement au Bénin. Ce n'est pas seulement le béton des nouveaux bâtiments qui pousse à Cotonou, ni les routes qui s'élargissent. C'est quelque chose de plus profond : une conscience collective, une fierté retrouvée, un désir de prendre en main son propre récit.</p>
        <h3>Les œuvres royales reviennent</h3>
        <p>En novembre 2021, un événement historique se produit : vingt-six œuvres royales du Dahomey — statues, trônes, portes ornées — pillées par l'armée française en 1892, quittent le Musée du Quai Branly à Paris pour rentrer à Cotonou. Leur retour, retransmis en direct à la télévision béninoise, est accueilli comme un moment fondateur.</p>
        <p>Cette restitution, fruit d'années de négociations diplomatiques et de militantisme culturel, ouvre la voie à d'autres demandes de retour d'œuvres africaines conservées dans les musées européens. Le Bénin devient un modèle dans ce combat mondial pour la justice mémorielle.</p>
        <h3>Cotonou, capitale créative</h3>
        <p>La capitale économique du Bénin se transforme à vue d'œil. Galeries d'art contemporain, studios de design, restaurants créatifs, espaces de coworking — Cotonou devient l'une des villes les plus dynamiques d'Afrique de l'Ouest. Une jeune génération d'artistes, de designers et d'entrepreneurs réinvente la culture béninoise avec les outils du XXIe siècle.</p>
        <p>Des noms comme Romuald Hazoumè (ses masques faits de bidons d'essence ont fait le tour du monde), Meshac Gaba (dont l'œuvre est conservée au Stedelijk Museum d'Amsterdam), ou le collectif BeninArtScene font rayonner l'art béninois sur la scène internationale.</p>
        <h3>Reboot BJ au cœur de ce réveil</h3>
        <p>C'est dans ce contexte que Reboot BJ est né. Non pas comme une agence de tourisme classique, mais comme un pont entre le monde et ce Bénin en renaissance. Nous voulons que vous viviez ce réveil de l'intérieur — que vous mangiez chez les artisans d'Abomey, que vous disiez aux peintres de Cotonou que leur travail vous a touché, que vous repartiez avec autre chose qu'une carte postale.</p>
        <p>Le Bénin n'attend plus. Il agit. Et vous pouvez faire partie de cette histoire.</p>
      </>
    ),
  },
]

export default function Decouvrir() {
  const [open, setOpen] = useState<Article | null>(null)

  return (
    <EspaceLayout
      eyebrow="Découvrir · Articles"
      title={<>Le Bénin, <em>raconté de l'intérieur.</em></>}
      lead="Histoire, culture, destinations, renaissance. Huit articles pour comprendre un pays unique."
      heroImg="/Destinations/activite-abomey.jpg"
      theme="decouvrir"
    >
      <div className="dec-grid">
        {ARTICLES.map(a => (
          <button key={a.id} className="dec-card" onClick={() => setOpen(a)}>
            <div className="dec-card-img" style={{ backgroundImage: `url(${a.img})`, backgroundPosition: a.imgPos ?? 'center' }} />
            <div className="dec-card-body">
              <div className="dec-card-meta">
                <span className="dec-tag">{a.tag}</span>
                <span className="dec-read">{a.readTime} de lecture</span>
              </div>
              <div className="dec-card-title">{a.title}</div>
              <div className="dec-card-excerpt">{a.excerpt}</div>
              <div className="dec-card-cta">Lire l'article →</div>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div className="dec-modal-backdrop" onClick={() => setOpen(null)}>
          <div className="dec-modal" onClick={e => e.stopPropagation()}>
            <button className="dec-modal-close" onClick={() => setOpen(null)} aria-label="Fermer">✕</button>
            <div className="dec-modal-hero" style={{ backgroundImage: `url(${open.img})`, backgroundPosition: open.imgPos ?? 'center' }} />
            <div className="dec-modal-content">
              <div className="dec-modal-meta">
                <span className="dec-tag">{open.tag}</span>
                <span className="dec-read">{open.readTime} de lecture</span>
              </div>
              <h2 className="dec-modal-title">{open.title}</h2>
              <div className="dec-modal-body">{open.body}</div>
            </div>
          </div>
        </div>
      )}
    </EspaceLayout>
  )
}
