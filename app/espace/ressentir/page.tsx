'use client'
import { useState } from 'react'
import EspaceLayout from '@/components/espace/EspaceLayout'

type Section = { title: string; content: string | React.ReactNode }

type Panel = {
  id: string
  label: string
  title: string
  img: string
  imgPos?: string
  body?: string
  sections?: Section[]
  facts: [string, string][]
}

const PANELS: Panel[] = [
  {
    id: 'vodoun',
    label: 'Vodoun',
    title: "Le Vodoun — Berceau d'une religion mondiale",
    img: '/images/Benin-Egungun-Costume-97.5.1-675x1024.jpg',
    imgPos: 'center 20%',
    facts: [
      ['10 janvier', 'Fête nationale du Vodoun'],
      ['60 M+', 'Pratiquants dans le monde'],
      ['3', 'Continents touchés par la diaspora'],
      ['UNESCO', 'Patrimoine immatériel reconnu'],
    ],
    sections: [
      {
        title: 'Origines et histoire',
        content: "Le Vodoun trouve ses racines dans les cultures ouest-africaines anciennes, notamment au sein des royaumes Fon et Yoruba qui ont occupé le territoire actuel du Bénin. Il s'est développé comme un système religieux proche des cultes de dieux et de forces naturelles — tonnerre, eau, terre, forêt — intégrés à la vie quotidienne et à l'organisation politique.\n\nAvec la traite négrière, plusieurs de ces divinités et pratiques ont été transposées dans les Amériques, donnant naissance à des formes comme le Vaudou haïtien ou le Candomblé brésilien, tout en conservant leur lien symbolique avec le Bénin. Malgré la colonisation, la christianisation et la mondialisation, le Vodoun a résisté — s'adaptant, évoluant, s'inscrivant dans la vie moderne des Béninois.",
      },
      {
        title: 'Conception religieuse et spiritualité',
        content: "Pour les adeptes, le Vodoun n'est pas une simple superstition mais une religion structurée, avec un Dieu suprême, des dieux intermédiaires (les Vodouns) et les ancêtres. Le Dieu unique — souvent appelé Mawu/Lisa selon les zones — est considéré comme transcendantal, agissant à travers des forces intermédiaires personnalisées.\n\nLes Vodouns sont des forces spirituelles associées à des éléments naturels ou des domaines de la vie : la terre, le feu, l'eau, la fertilité, la guérison, la protection. Chaque Vodoun a son propre rituel, ses symboles, ses chants, ses danses et ses prêtres (hounon, bokonon) qui servent de médiateurs entre les humains et le divin.",
      },
      {
        title: 'Les grandes divinités du panthéon',
        content: (
          <div className="rs-divs">
            <div className="rs-div"><strong>Sakpata</strong> — Divinité de la terre, de la maladie et de la protection, souvent invoquée pour le bien-être et la prévention des épidémies.</div>
            <div className="rs-div"><strong>Hêbiosso</strong> — Dieu du feu et du tonnerre, chargé d'apporter la pluie, de purifier et de protéger contre les forces négatives.</div>
            <div className="rs-div"><strong>Mami Wata</strong> — Divinité des eaux et des richesses, souvent représentée comme une femme aquatique, associée à la beauté et à la complexité du destin.</div>
            <div className="rs-div"><strong>Agbé / Gu</strong> — Divinité liée à la guerre, à la protection et à la force, invoquée pour les conflits ou les décisions difficiles.</div>
            <div className="rs-div"><strong>Legba</strong> — Gardien des carrefours et des passages, intermédiaire indispensable entre les humains et toutes les autres divinités.</div>
          </div>
        ),
      },
      {
        title: 'Rites, pratiques et organisation rituelle',
        content: "Les pratiques Vodoun se déploient dans des espaces sacrés appelés « couvents » ou « hounfò », gérés par des prêtres et des communautés initiatiques. Les grandes cérémonies incluent des prières, des chants, des offrandes alimentaires ou symboliques, des sacrifices, des danses rythmées et des états de transe où les adeptes peuvent être montés par le Vodoun.\n\nLes jours de fête — comme la Journée Nationale du Vodoun du 10 janvier — permettent de faire découvrir ces rituels au public et aux visiteurs, tout en précisant que la pratique Vodoun obéit à des règles strictes de respect, de discrétion et de préparation.",
      },
      {
        title: 'Vodoun et quotidien des Béninois',
        content: "Bien que de nombreux Béninois soient chrétiens ou musulmans, le Vodoun reste visible dans de nombreux aspects de la vie quotidienne. Des gestes comme les libations, les offrandes sur certains lieux sacrés, les interdits alimentaires ou symboliques, ou encore le respect de certains jours et de certains ancêtres témoignent d'une présence discrète mais réelle.\n\nCertaines paroisses chrétiennes intègrent des musiques et rythmes provenant directement des cultes Vodoun, ce qui montre un métissage spirituel et culturel durable. Le Vodoun apparaît alors comme une identité profonde, plus large qu'un simple culte : c'est une mémoire vivante, une manière de penser le monde, la communauté et la relation avec les ancêtres.",
      },
      {
        title: 'Vodoun, identité et développement',
        content: "Depuis quelques années, le Bénin assume publiquement son statut de « terre du Vodoun », en organisant des manifestations culturelles et religieuses ouvertes aux locaux et aux touristes. Cette valorisation du Vodoun vise à en faire un levier de développement : tourisme culturel, patrimoine immatériel, valorisation d'artisans, de danseurs, de prêtres et de savoir-faire traditionnels.\n\nDes universitaires et des responsables béninois soulignent que le Vodoun n'est pas seulement une religion, mais aussi une philosophie, un art, une science du vivre-ensemble et une filière qui peut générer des ressources économiques et sociales. Le défi reste de préserver la profondeur spirituelle et éthique du Vodoun tout en le protégeant des dérives commerciales ou folkloriques.",
      },
      {
        title: 'Vodoun et représentations internationales',
        content: "À l'échelle mondiale, le Vodoun est souvent réduit à des images de poupées percées d'aiguilles ou de magie noire, ce qui déforme complètement la réalité béninoise. Les chercheurs et prêtres Vodoun insistent sur le fait que le Vodoun au Bénin est avant tout un système de relation avec le sacré, organisé autour de règles morales, de hiérarchies rituelles et de respect des communautés.\n\nEn promouvant le Vodoun comme religion et patrimoine, le Bénin cherche à offrir une contre-narrative à ces stéréotypes, à réhabiliter la dignité de ses traditions et à montrer que la spiritualité africaine peut coexister avec les religions monothéistes modernes.",
      },
    ],
  },
  {
    id: 'musique',
    label: 'Musique',
    title: "La musique béninoise — Un patrimoine vivant",
    img: '/Destinations/Vivez-gogotinkpon/trip-gogotinkpon-1.jpg',
    imgPos: 'center center',
    facts: [['4', 'Grammy Awards — Angélique Kidjo'], ['Poly-Rythmo', 'Orchestre légendaire des indépendances'], ['1960s', 'Naissance de la scène moderne'], ['Albarika Store', 'Premier label structurant du pays']],
    sections: [
      {
        title: 'Racines et traditions fondatrices',
        content: "Le socle de la musique béninoise repose sur une diversité de rythmes traditionnels indissociables de la vie quotidienne et des rites. Des genres comme le Zinli, historiquement lié aux funérailles royales du Danxomè, ou encore le Massè-gohun et l'Agbalè, ont constitué les fondations sur lesquelles les musiciens ont bâti leur identité.\n\nYédénou Adjahoui, figure emblématique de cette ère, a su sublimer ces rythmes grâce à un art narratif puissant, marquant durablement la mémoire collective béninoise. Ces rythmes ne sont pas de simples curiosités folkloriques — ils sont le battement de cœur d'un peuple, présents dans les cérémonies de naissance, de mariage, de deuil et de fête.",
      },
      {
        title: "Éveil de la scène moderne",
        content: "À partir des années 1960, une première génération d'artistes a commencé à formaliser ces sonorités tout en s'inspirant des courants mondiaux comme l'afro-jazz ou les mélodies afro-cubaines. Cette période a été portée par des labels comme Albarika Store, qui ont permis aux musiques locales de se structurer et de toucher un public plus large.\n\nLes artistes de cette époque ont fait preuve d'une grande créativité, fusionnant habilement des instruments traditionnels avec les standards de la musique populaire naissante. C'est dans ce contexte qu'émerge le Tout Puissant Orchestre Poly-Rythmo — plus qu'un simple groupe, une institution musicale qui explorera une vaste gamme de genres, du funk à la salsa en passant par le jazz.",
      },
      {
        title: 'Ouverture et influence internationale',
        content: "Depuis les années 2000, la musique béninoise vit une phase de modernisation et d'ouverture sans précédent. Des icônes comme Angélique Kidjo ont joué un rôle crucial en propulsant les sonorités béninoises sur la scène mondiale, mariant avec brio les rythmes traditionnels aux influences jazz, rock et électroniques.\n\nEn parallèle, l'essor de l'Afrobeat et d'autres courants urbains a profondément transformé la création locale, permettant à une nouvelle génération d'artistes de s'approprier ces styles pour exprimer des réalités sociales et politiques contemporaines.",
      },
      {
        title: 'Figures emblématiques',
        content: (
          <div className="rs-divs">
            <div className="rs-div"><strong>Angélique Kidjo</strong> — Surnommée la « Reine de la musique africaine », 4 Grammy Awards, elle fusionne chants ancestraux béninois et sonorités contemporaines mondiales.</div>
            <div className="rs-div"><strong>Gnonnas Pedro</strong> — Pionnier de la musique moderne béninoise, figure centrale du Tout Puissant Orchestre Poly-Rythmo qui a exporté le Bénin dans toute l'Afrique.</div>
            <div className="rs-div"><strong>Sagbohan Danialou</strong> — Maître incontesté des rythmes traditionnels, véritable encyclopédie vivante de la musique béninoise.</div>
            <div className="rs-div"><strong>Tohon Stan</strong> — Contributeur majeur à l'identité musicale du Bénin, il a popularisé des rythmes spécifiques au-delà des frontières.</div>
            <div className="rs-div"><strong>Gangbé Brass Band</strong> — Ce collectif innovant mélange fanfares traditionnelles et harmonies modernes, ambassadeurs culturels du Bénin dans le monde.</div>
            <div className="rs-div"><strong>Zeynab</strong> — Nouvelle génération de la World Music béninoise, présence internationale croissante avec des collaborations variées et un son résolument contemporain.</div>
          </div>
        ),
      },
      {
        title: 'Références et initiatives patrimoniales',
        content: "L'Anthologie de la Musique béninoise — coffret lancé sous l'impulsion du Ministère de la Culture — constitue une référence patrimoniale majeure : une soixantaine de mélodies historiques qui retracent le parcours musical du pays depuis l'indépendance.\n\nLe Tout Puissant Orchestre Poly-Rythmo reste l'institution musicale béninoise la plus influente. Fondé dans les années 1960, redécouvert par les collectionneurs de vinyles du monde entier dans les années 2000, il continue d'inspirer des générations d'artistes. Ses disques s'arrachent aujourd'hui sur les marchés de curiosités de Tokyo à Berlin.",
      },
    ],
  },
  {
    id: 'gastro',
    label: 'Gastronomie',
    title: 'La gastronomie béninoise — Cuisine de terroir et de saison',
    img: '/Destinations/Vivez-grand-popo/trip-grand-popo-1.jpg',
    imgPos: 'center center',
    facts: [
      ['35+', 'Plats et préparations recensés'],
      ['Dantokpa', 'Plus grand marché à ciel ouvert d\'AOF'],
      ['Bohicon', 'Ville créative UNESCO — gastronomie'],
      ['Afitin', 'Condiment patrimonial de Bohicon'],
    ],
    sections: [
      {
        title: 'Vue d\'ensemble',
        content: "La cuisine béninoise est une cuisine de terroir, de saison et de contraste. Elle repose sur quelques grandes bases : le maïs, l'igname, le manioc, le haricot, le riz, le poisson, les viandes grillées, les feuilles potagères, le piment et les condiments fermentés. Selon les zones, on sent davantage l'influence des produits de la côte, des tubercules du centre, ou des préparations plus rustiques et nourrissantes du Nord.\n\nBohicon a été mise en avant pour sa créativité gastronomique dans le Réseau des villes créatives de l'UNESCO. Les documents de ce réseau citent spécialement l'afitin, le houawélio et le bômiho comme signatures locales — preuve que la gastronomie béninoise comprend tout un patrimoine de préparations locales, de techniques de fermentation et de recettes familiales transmises de génération en génération.",
      },
      {
        title: 'Les grands plats',
        content: (
          <div className="rs-divs">
            <div className="rs-div"><strong>Akassa</strong> — Pâte de maïs fermentée, souple et légèrement acidulée, servie avec une sauce pimentée ou une sauce au poisson. Grand classique de la table béninoise.</div>
            <div className="rs-div"><strong>Amiwo</strong> — Pâte de maïs rouge cuite avec tomate, huile et épices. Dense, colorée et très populaire dans tout le pays.</div>
            <div className="rs-div"><strong>Wassa-wassa</strong> — Semoule d'igname râpée, cuite à la vapeur. Texture légère et granuleuse, très appréciée avec sauce, viande ou poisson.</div>
            <div className="rs-div"><strong>Toubani</strong> — Préparation à base de farine de haricot local, relevée au piment et à l'huile. Nourrissant, simple, fortement ancré dans la cuisine populaire.</div>
            <div className="rs-div"><strong>Igname pilée</strong> — Purée ou pâte d'igname à texture élastique, mangée avec une sauce. L'un des plats les plus respectés dans beaucoup de familles.</div>
            <div className="rs-div"><strong>Télibo</strong> — Spécialité béninoise bien enracinée dans les habitudes locales, avec des variantes selon les régions et les foyers.</div>
            <div className="rs-div"><strong>Bômiho</strong> — Mets identitaire de Bohicon, mis en avant dans les dossiers sur le patrimoine gastronomique béninois. À chercher directement sur place.</div>
            <div className="rs-div"><strong>Houawélio</strong> — Pâte de maïs fermentée spéciale, préparation patrimoniale transmise de génération en génération dans la région de Bohicon.</div>
          </div>
        ),
      },
      {
        title: 'Sauces et plats du quotidien',
        content: (
          <div className="rs-divs">
            <div className="rs-div"><strong>Sauce Moyo</strong> — Sauce tomate avec oignon, poivron et assaisonnement, servie avec du poisson frit. Vive, parfumée et facile à marier avec plusieurs bases.</div>
            <div className="rs-div"><strong>Sauce Gboman</strong> — Sauce épaisse à base de feuilles vertes. Accompagne la pâte, le poisson fumé ou le wagassi frit.</div>
            <div className="rs-div"><strong>Riz sauce tomate au poisson frit</strong> — Formule très répandue dans les menus populaires : du riz, une sauce tomate relevée, et un poisson frit croustillant.</div>
            <div className="rs-div"><strong>Haricot</strong> — Pilier de l'alimentation quotidienne. Seul en sauce, mélangé à d'autres bases, ou servi avec gari ou piment.</div>
            <div className="rs-div"><strong>Gari + haricot</strong> — Association populaire, économique et nourrissante. Le gari apporte le croquant, le haricot la densité.</div>
            <div className="rs-div"><strong>Poulet grillé</strong> — Très présent dans les villes et sur les axes routiers, bien pimenté et servi avec frites, aloko ou igname.</div>
            <div className="rs-div"><strong>Wagassi frit</strong> — Fromage peul frit, signature gourmande importante dans plusieurs assiettes béninoises.</div>
            <div className="rs-div"><strong>Crevettes d'eau douce fumées</strong> — Utilisées comme mets ou comme élément d'assaisonnement dans plusieurs sauces.</div>
          </div>
        ),
      },
      {
        title: 'Street food — Fritures et beignets',
        content: "Une grande partie du charme culinaire béninois se joue dans les rues, les marchés, les gares routières et les abords des écoles. On y trouve beaucoup de fritures, de beignets et de collations qui font partie de l'identité quotidienne du pays.",
      },
      {
        title: '',
        content: (
          <div className="rs-divs">
            <div className="rs-div"><strong>Yovo doko</strong> — Petits beignets sucrés, moelleux et dorés. Très fréquents au petit-déjeuner ou au goûter.</div>
            <div className="rs-div"><strong>Ata</strong> — Beignet de haricots blancs. Collation nourrissante très présente dans les habitudes béninoises.</div>
            <div className="rs-div"><strong>Aloko</strong> — Bananes plantain frites. Servent à la fois de goûter, d'accompagnement et de petit repas rapide.</div>
            <div className="rs-div"><strong>Talé talé</strong> — Beignets à base de bananes mûres et de farine. Plus sucré qu'un aloko, c'est une gourmandise de rue très aimée.</div>
            <div className="rs-div"><strong>Tévi</strong> — Ignames tranchées puis frites. L'un des en-cas salés les plus populaires.</div>
            <div className="rs-div"><strong>Wɛli</strong> — Patates douces frites, croustillantes dehors et tendres dedans. Simple et très populaire.</div>
          </div>
        ),
      },
      {
        title: 'Condiments et fermentations',
        content: "La gastronomie béninoise tient aussi dans ses condiments, ses fermentations et ses produits d'assaisonnement. L'afitin est un condiment traditionnel mis en avant à Bohicon, présenté comme un assaisonnement local essentiel pour les sauces béninoises. Le piment n'est pas un détail : c'est un marqueur fort du goût local, omniprésent sous différentes formes — frais, séché, en sauce, en condiment au poisson.\n\nLes produits fumés ou séchés — poisson, crevettes, condiments fermentés — structurent une grande part de la saveur béninoise. C'est souvent la sauce, et non la base, qui \"fait\" vraiment le plat.",
      },
    ],
  },
  {
    id: 'artisan',
    label: 'Artisanat',
    title: 'Mains qui transmettent',
    img: '/Destinations/activite-abomey.jpg',
    imgPos: 'center center',
    body: "Tisserands de kente, sculpteurs de bronze, brodeurs de récades royales — l'artisanat béninois est un patrimoine vivant transmis de génération en génération. Les pièces collectées au Bénin trouvent aujourd'hui leur place dans les plus grandes collections privées mondiales. À Abomey, les ateliers des familles royales perpétuent des techniques vieilles de plusieurs siècles. À Cotonou, une nouvelle génération d'artistes fusionne tradition et design contemporain pour créer quelque chose d'entièrement neuf.",
    facts: [['12', 'Corps de métiers'], ['26', 'Récades royales'], ['Abomey', "Capitale de l'artisanat royal"]],
  },
]

export default function Ressentir() {
  const [active, setActive] = useState('vodoun')
  const p = PANELS.find(x => x.id === active)!

  return (
    <EspaceLayout
      eyebrow="Ressentir · Culture"
      title={<>Une culture qui a <em>changé le monde.</em></>}
      lead="Vodoun, musique, gastronomie, artisanat : quatre portes pour rentrer dans l'âme béninoise."
      heroImg="/images/Benin-Egungun-Costume-97.5.1-675x1024.jpg"
      theme="ressentir"
    >
      <div className="ep-tabs">
        {PANELS.map(x => (
          <button key={x.id} className={`ep-tab${active === x.id ? ' on' : ''}`} onClick={() => setActive(x.id)}>
            {x.label}
          </button>
        ))}
      </div>

      <article className="ep-pan">
        <div className="ep-pan-img" style={{ backgroundImage: `url(${p.img})`, backgroundPosition: p.imgPos ?? 'center' }} />
        <div className="ep-pan-body">
          <h2 className="ep-pan-title">{p.title}</h2>

          {p.sections ? (
            <div className="rs-article">
              {p.sections.map(s => (
                <div key={s.title} className="rs-section">
                  <h3 className="rs-section-title">{s.title}</h3>
                  {typeof s.content === 'string'
                    ? s.content.split('\n\n').map((para, i) => (
                        <p key={i} className="rs-para">{para}</p>
                      ))
                    : <div className="rs-rich">{s.content}</div>
                  }
                </div>
              ))}
            </div>
          ) : (
            <p className="ep-pan-body-text">{p.body}</p>
          )}

          <div className="ep-pan-facts">
            {p.facts.map(([n, l]) => (
              <div key={l} className="ep-fact">
                <div className="ep-fact-n">{n}</div>
                <div className="ep-fact-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </EspaceLayout>
  )
}
