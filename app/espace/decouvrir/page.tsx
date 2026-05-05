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
    id: 'behanzin',
    tag: 'Histoire',
    title: 'Béhanzin : Le Roi Requin qui défia la France',
    excerpt: 'Dernier grand roi du Dahomey, Béhanzin mena une résistance acharnée contre la colonisation française avant d'être exilé aux Antilles.',
    img: '/images/roi-dahomey.png',
    imgPos: '20% 15%',
    readTime: '6 min',
    body: (
      <>
        <p>Il portait le nom de requin — Gbèhanzin en fon, "le monde tient la mer en haleine" — et il fut à la hauteur de ce nom. Dernier roi indépendant du Dahomey, Béhanzin (1889–1894) incarne la résistance africaine face à la colonisation française avec une intensité que peu de dirigeants de l'époque ont égalée.</p>
        <h3>Un roi qui refuse de plier</h3>
        <p>Quand la France, après une première guerre en 1890, réclame des compensations économiques humiliantes, Béhanzin refuse. Il modernise son armée, achète des fusils et des canons, renforce les Agojie (ses guerrières d'élite) et prépare une résistance totale. En 1892, le général Alfred Dodds lance la deuxième campagne. Malgré des combats acharnés à Cotonou, à Dogba et à la bataille d'Adégon, les Français, avec leur artillerie et leur discipline, l'emportent.</p>
        <h3>L'exil et la mort au loin</h3>
        <p>Capturé en 1894, Béhanzin est exilé en Martinique, puis en Algérie, où il meurt en 1906. Son corps ne sera rapatrié au Bénin qu'en 1928, dans une cérémonie officielle. Aujourd'hui, son portrait orne les billets et les manuels scolaires. Il est l'un des trois héros nationaux du Bénin — symbole permanent de la dignité et du refus de la soumission.</p>
        <p>La légende populaire dit que, depuis son exil, il écrivait des lettres à son peuple pour leur dire de ne jamais oublier qui ils étaient. Vraies ou non, ces lettres résument ce qu'il représente : la mémoire vivante d'un peuple qui a choisi de se battre plutôt que de courber l'échine.</p>
      </>
    ),
  },
  {
    id: 'amazones',
    tag: 'Histoire',
    title: 'Les Amazones du Dahomey — Agojie',
    excerpt: 'Guerrières d'élite redoutées par les soldats français, les Agojie composaient un tiers de l'armée royale et restent une légende mondiale.',
    img: '/images/Gemini_Generated_Image_nvasw6nvasw6nvas.png',
    imgPos: 'center 15%',
    readTime: '7 min',
    body: (
      <>
        <p>L'histoire des Agojie est l'une des plus extraordinaires que l'Afrique ait produites. Ces guerrières d'élite, que les Européens appelèrent "Amazones du Dahomey", représentaient au XIXe siècle jusqu'à un tiers de l'armée royale. Leur discipline, leur férocité au combat et leur loyauté absolue au roi en faisaient les soldates les plus redoutées de toute la région.</p>
        <h3>Recrutées dès l'adolescence</h3>
        <p>Les Agojie naissent comme corps militaire féminin sous le règne du roi Houégbadja. Initialement composées de femmes condamnées pour délits et reconverties en chasseresses royales, elles évoluent rapidement en une élite militaire. Recrutées dès l'adolescence, elles subissent un entraînement sans pitié : marches forcées de plusieurs jours sans eau ni nourriture, combats corps à corps, traversées de haies de plantes épineuses sans se plaindre.</p>
        <h3>Face aux Français</h3>
        <p>En 1890 et 1892, lors des deux guerres franco-dahoméennes, les Agojie stupéfient l'armée coloniale française. Les rapports militaires décrivent leur courage avec admiration et terreur. Plusieurs officiers français avouèrent que ces femmes combattaient avec une ardeur supérieure à celle de nombreux soldats masculins. La dernière Agojie connue, Nawi, décède en 1979 à plus de 100 ans. Leur héritage inspire le monde entier, du Quai Branly à Hollywood.</p>
        <h3>Reine Hangban et les premières guerrières</h3>
        <p>La tradition orale retient le nom de Hangban parmi les premières grandes commandantes des Agojie. Sous les règnes successifs, des femmes d'exception gravissent les rangs de ce corps d'élite, certaines devenant de véritables générales. Sous le roi Béhanzin, elles participèrent activement aux guerres contre les Yorubas et résistèrent jusqu'au bout face aux Français.</p>
      </>
    ),
  },
  {
    id: 'kaba',
    tag: 'Histoire',
    title: 'Kaba : Le héros oublié du Nord',
    excerpt: 'Chef Natemba du Borgou, Kaba mena trois ans de résistance contre l'administration coloniale française dans le nord du Bénin.',
    img: '/Destinations/Vivez-le-nord-ouest/trip-nord-ouest-1.jpg',
    imgPos: 'center center',
    readTime: '5 min',
    body: (
      <>
        <p>Pendant que le sud du Dahomey connaissait la chute d'Abomey et l'exil de Béhanzin, le nord du pays vivait sa propre résistance. Entre 1914 et 1917, un chef nommé Kaba, leader des Natemba dans la région de Natitingou (Atacora), mena l'une des plus longues résistances organisées contre l'administration coloniale française du territoire.</p>
        <h3>La guerre de Kaba</h3>
        <p>Ce que l'histoire appelle "la guerre de Kaba" n'est pas une anecdote régionale. C'est un soulèvement coordonné, impliquant plusieurs villages et clans, refusant l'impôt colonial, le travail forcé et l'autorité des chefs appointés par les Français. Kaba mobilise les communautés de l'Atacora autour d'un même refus : celui de perdre leur dignité et leurs terres.</p>
        <p>Pendant trois ans, il tient en échec les unités militaires coloniales dans les falaises et forêts de l'Atacora. Ce n'est qu'au prix d'une campagne militaire intense que les Français parviennent à le capturer. Aujourd'hui, des stèles à Natitingou honorent sa mémoire. Il est l'un des trois héros nationaux du Bénin — aux côtés de Béhanzin et Bio Guera — bien que son histoire reste peu connue du grand public.</p>
      </>
    ),
  },
  {
    id: 'toffa',
    tag: 'Histoire',
    title: 'Toffa Ier : Le roi qui choisit la France',
    excerpt: 'Face à la pression de ses voisins, le roi de Porto-Novo signa un protectorat avec la France — décision qui allait changer l'histoire du Dahomey.',
    img: '/Destinations/Vivez-porto-novo/trip-porto-novo-1.jpg',
    imgPos: 'center center',
    readTime: '4 min',
    body: (
      <>
        <p>Toutes les résistances ne prennent pas la forme d'une bataille. Parfois, la survie politique exige des choix douloureux. Le roi Toffa Ier de Porto-Novo, entre 1882 et 1900, fit ce type de choix : plutôt que de s'opposer frontalement à la France, il s'en fit un allié stratégique.</p>
        <h3>Un royaume entre deux feux</h3>
        <p>Porto-Novo, capitale du Royaume Gun, se trouve pris en étau au XIXe siècle : d'un côté, la pression croissante du puissant Royaume du Dahomey qui cherche à étendre son contrôle vers la côte ; de l'autre, les Britanniques et les Français qui se disputent le territoire côtier. Toffa Ier, fin négociateur, signe en 1882 un protectorat avec la France.</p>
        <p>Ce choix permet à Porto-Novo de résister aux ambitions expansionnistes d'Abomey et d'éviter d'être engloutie par le Dahomey. En contrepartie, il ouvre la voie à l'installation de l'administration coloniale française sur l'ensemble du territoire. Porto-Novo devient ainsi la future capitale administrative du Dahomey colonial — un rôle qu'elle conserve aujourd'hui en tant que capitale officielle du Bénin.</p>
        <h3>Un héritage ambigu</h3>
        <p>La figure de Toffa Ier reste complexe : collaborateur aux yeux des uns, stratège de survie aux yeux des autres. Son règne illustre les dilemmes impossibles auxquels ont fait face les dirigeants africains face à la pression coloniale européenne. Il n'est ni héros ni traître — il est l'incarnation d'une époque où chaque choix avait un coût.</p>
      </>
    ),
  },
  {
    id: 'traite',
    tag: 'Mémoire',
    title: 'Ouidah : le port où l'enfer commençait',
    excerpt: 'Des centaines de milliers d'Africains furent embarqués depuis Ouidah vers les Amériques. La traite transatlantique racontée depuis ses racines.',
    img: '/Destinations/Vivez-ouidah/trip-ouidah-2.jpg',
    imgPos: 'center center',
    readTime: '6 min',
    body: (
      <>
        <p>Pendant plus de deux siècles, entre le XVIIe et le XIXe siècle, Ouidah fut l'un des principaux ports de la traite négrière transatlantique. Les historiens estiment qu'entre 800 000 et 1 200 000 personnes furent embarquées depuis ses plages vers les Amériques — Brésil, Antilles, Louisiane, Caraïbes.</p>
        <h3>Le roi Ghézo et le commerce des esclaves</h3>
        <p>L'histoire de la traite depuis Ouidah est inséparable du Royaume du Dahomey. Les rois dahoméens, notamment Ghézo, participèrent activement à ce commerce, vendant des prisonniers de guerre et des populations capturées lors de raids aux trafiquants brésiliens et portugais. Les richesses ainsi accumulées financèrent l'essor militaire et architectural du royaume.</p>
        <p>Du côté européen, des familles de négriers brésiliens s'installèrent durablement à Ouidah — les "Aguda" — dont les descendants sont encore présents aujourd'hui. Leurs maisons coloniales colorées bordent encore certaines rues de la ville, témoins silencieux d'une histoire douloureuse.</p>
        <h3>Une mémoire mondiale</h3>
        <p>La Route de l'Esclave, tracée par l'UNESCO depuis le centre d'Ouidah jusqu'à la plage, fait aujourd'hui de ce lieu un site de mémoire internationale. Des descendants d'Africains déportés viennent du Brésil, d'Haïti, des États-Unis, accomplir un pèlerinage, reconnecter les fils brisés de l'histoire. La traite a déraciné des millions de personnes — mais elle a aussi créé des ponts culturels indestructibles entre l'Afrique et les Amériques.</p>
      </>
    ),
  },
  {
    id: 'ghezo',
    tag: 'Histoire',
    title: 'Ghézo : Le roi qui a façonné le Dahomey',
    excerpt: 'Sous son règne (1818–1858), le Dahomey atteint son apogée militaire et économique, entre grandeur royale et compromissions commerciales.',
    img: '/images/Gemini_Generated_Image_ft0r8mft0r8mft0r.png',
    imgPos: 'center 10%',
    readTime: '5 min',
    body: (
      <>
        <p>Ghézo règne sur le Dahomey pendant quarante ans (1818–1858) et marque l'histoire du royaume de son empreinte indélébile. Stratège brillant et bâtisseur ambitieux, il prend le pouvoir en renversant son propre frère Adandozan et s'impose rapidement comme l'un des souverains les plus remarquables de l'histoire africaine.</p>
        <h3>Un empire à son apogée</h3>
        <p>Sous Ghézo, le Dahomey développe une armée puissante, modernisée avec des armes importées d'Europe. Il étend le territoire, renforce le commerce — y compris la traite négrière avec les Brésiliens — et construit plusieurs des palais qui font aujourd'hui la gloire d'Abomey. C'est lui qui institutionnalise véritablement le corps des Agojie (guerrières), transformant ce qui était une garde personnelle en une armée d'élite.</p>
        <p>Ghézo résiste également à l'empire Oyo, jusqu'alors dominant dans la région, et impose le Dahomey comme la puissance incontournable de l'Afrique de l'Ouest côtière. Ses contacts diplomatiques s'étendent jusqu'à l'Europe — il reçoit des ambassadeurs anglais et français, joue les puissances européennes les unes contre les autres avec habileté.</p>
        <h3>La controverse de l'esclavage</h3>
        <p>L'héritage de Ghézo est indissociable de la traite négrière qu'il pratiqua à grande échelle. Sous pression britannique, il promit plusieurs fois de réduire sa participation — sans jamais vraiment tenir sa parole. Cette face sombre de son règne est aujourd'hui pleinement reconnue dans l'historiographie béninoise, sans effacer pour autant la grandeur de son œuvre politique et architecturale.</p>
      </>
    ),
  },
  {
    id: 'agadja',
    tag: 'Histoire',
    title: 'Agadja : Le fondateur de l'empire dahoméen',
    excerpt: 'En unifiant les tribus Fon et conquérant Allada et Ouidah, Agadja posa les fondations du futur empire du Dahomey au XVIIIe siècle.',
    img: '/Destinations/activite-abomey.jpg',
    imgPos: 'center center',
    readTime: '4 min',
    body: (
      <>
        <p>Avant Agadja, le Dahomey n'était qu'un royaume parmi d'autres dans la région d'Abomey. Après lui, c'était un empire. Son règne (1718–1740) est un tournant décisif dans l'histoire de l'Afrique de l'Ouest.</p>
        <h3>Les conquêtes fondatrices</h3>
        <p>Agadja mène deux campagnes militaires qui changent tout. En 1724, il s'empare d'Allada, l'ancien royaume mère dont le Dahomey était issu — un coup symbolique autant que stratégique. En 1727, il conquiert Whydah (Ouidah), donnant au Dahomey un accès direct à la côte atlantique et au commerce avec les Européens. Ces deux conquêtes font d'un royaume intérieur un État maritime et commercial.</p>
        <p>Il modernise également la structure politique du royaume : administration centralisée, système de collecte d'impôts, réseau d'espions et d'informateurs. L'État qu'il construit est d'une sophistication rare pour l'époque — comparable, par certains aspects, aux monarchies européennes contemporaines.</p>
        <h3>Le pionnier de la diplomatie africaine</h3>
        <p>Agadja est le premier roi du Dahomey à entrer en contact diplomatique direct avec les puissances européennes. Il envoie un ambassadeur au roi du Portugal, établit des relations commerciales avec les Anglais et les Français. Cette ouverture vers l'Europe, si elle ouvre la porte à la traite négrière, témoigne aussi d'une vision politique remarquablement moderne pour l'époque.</p>
      </>
    ),
  },
  {
    id: 'bio-guera',
    tag: 'Histoire',
    title: 'Bio Guera : Le résistant du Borgou',
    excerpt: 'Héros national méconnu, Bio Guera mena une résistance farouche contre les troupes coloniales françaises dans le nord-est du Bénin.',
    img: '/images/bio-guera-1.jpg',
    imgPos: 'center top',
    readTime: '4 min',
    body: (
      <>
        <p>Son nom figure sur les stèles des héros nationaux du Bénin aux côtés de Béhanzin et de Kaba, pourtant peu de Béninois pourraient raconter son histoire. Bio Guera reste l'un des résistants les plus héroïques et les plus méconnus de l'histoire du pays.</p>
        <h3>La résistance du Borgou</h3>
        <p>Entre 1895 et 1903, Bio Guera dirige la résistance des populations du Borgou (nord-est du Bénin actuel) contre l'installation de l'administration coloniale française. Là où d'autres chefs acceptèrent la tutelle française, il choisit le combat armé. Profitant de sa connaissance du terrain — les vastes plaines et forêts du Borgou — il harcèle les troupes coloniales pendant près d'une décennie.</p>
        <p>Ses méthodes préfigurent ce qu'on appellera plus tard la guérilla. Attaques surprise, retraites rapides, mobilisation des populations locales : Bio Guera rend l'occupation française extrêmement difficile dans sa région. C'est finalement la trahison et la ruse qui permettront aux Français de le capturer. Condamné, il meurt comme il avait vécu : debout.</p>
        <h3>Une mémoire à réhabiliter</h3>
        <p>Aujourd'hui, le gouvernement béninois s'efforce de réhabiliter sa mémoire. Des rues, des écoles, des monuments portent son nom. Mais son histoire reste peu enseignée. Reboot BJ croit que connaître Bio Guera, c'est mieux comprendre la complexité et la richesse de la résistance africaine à la colonisation.</p>
      </>
    ),
  },
  {
    id: 'sac-allada',
    tag: 'Histoire',
    title: 'Le Sac d'Allada : La chute du premier royaume Fon',
    excerpt: 'En 1724, Agadja conquiert Allada et marque la fin du premier grand royaume fon, ouvrant la voie à l'ascension triomphale d'Abomey.',
    img: '/Destinations/activite-abomey.jpg',
    imgPos: '60% center',
    readTime: '3 min',
    body: (
      <>
        <p>Allada fut le premier grand royaume fondé par les peuples Fon dans la région côtière de l'Afrique de l'Ouest. Pendant plus d'un siècle, il domina la politique et le commerce de la région — avant d'être renversé par celui qui était censé en être l'héritier.</p>
        <h3>La trahison dynastique</h3>
        <p>Le Royaume du Dahomey descend d'Allada. Selon la tradition, un prince allada du nom de Do-Aklin fut envoyé dans l'intérieur des terres pour y fonder un fief — ce qui deviendra Abomey. Pendant des décennies, Abomey grandit dans l'ombre d'Allada, son royaume d'origine. En 1724, le roi Agadja renverse cette hiérarchie en conquérant militairement Allada.</p>
        <p>Le sac d'Allada est un moment fondateur de l'histoire béninoise : il marque le transfert du centre de pouvoir Fon d'une cité côtière vers l'intérieur, et inaugure l'ère de la domination d'Abomey sur toute la région. La chute d'Allada, c'est la naissance de l'Empire du Dahomey tel que nous le connaissons.</p>
      </>
    ),
  },
  {
    id: 'revolution-1990',
    tag: 'Aujourd'hui',
    title: 'La Révolution de 1990 : Le miracle béninois',
    excerpt: 'En 1990, le Bénin réussit ce que peu de pays africains ont accompli : une transition pacifique vers la démocratie, devenant un modèle mondial.',
    img: '/images/benin.png',
    imgPos: 'center center',
    readTime: '5 min',
    body: (
      <>
        <p>Février 1990. Cotonou. Des centaines de représentants de toutes les forces vives de la nation béninoise se réunissent en Conférence nationale. Au terme de plusieurs jours de débats intenses, ils s'accordent sur une transition pacifique vers la démocratie. Le dictateur Mathieu Kérékou, au pouvoir depuis 1972, accepte de céder la place. Ce moment est unique dans l'histoire africaine.</p>
        <h3>Après dix-huit ans de régime militaire</h3>
        <p>Depuis le coup d'État de 1972, le Bénin vivait sous le régime marxiste-léniniste de Kérékou. L'économie était à genoux, la liberté de presse inexistante, les opposants pourchassés. À la fin des années 1980, sous la pression de la rue et de la communauté internationale, le régime commence à vaciller. C'est l'évêque de Cotonou, Mgr Isidore de Souza, qui préside la Conférence nationale avec une autorité morale acceptée de tous.</p>
        <h3>Un modèle pour l'Afrique</h3>
        <p>La Conférence nationale béninoise de 1990 est étudiée dans les facultés de droit et de sciences politiques du monde entier. Elle a inspiré des processus similaires au Congo, au Niger, au Mali, au Togo. Le Bénin, petit pays côtier de 7 millions d'habitants à l'époque, a montré que la démocratie pouvait naître pacifiquement en Afrique — et que le dialogue peut là où les armes ne peuvent pas.</p>
      </>
    ),
  },
  {
    id: 'kerekous',
    tag: 'Aujourd'hui',
    title: 'Kérékou : Du coup d'État au repentir national',
    excerpt: 'Il instaura un régime marxiste en 1972. Il organisa les premières élections libres en 1991. L'itinéraire paradoxal de Mathieu Kérékou.',
    img: '/Destinations/Vivez-porto-novo/trip-porto-novo-4.jpg',
    imgPos: 'center center',
    readTime: '5 min',
    body: (
      <>
        <p>Il y a peu de trajectoires politiques aussi singulières que celle de Mathieu Kérékou. Arrivé au pouvoir par un coup d'État militaire en 1972, il impose au Bénin un régime à parti unique se réclamant du marxisme-léninisme. Nationalisations, interdiction des partis politiques, répression des opposants : le Bénin des années 1970-80 ressemble à bien d'autres dictatures africaines de l'époque.</p>
        <h3>La conversion démocratique</h3>
        <p>Ce qui distingue Kérékou, c'est ce qu'il fait ensuite. Face à la crise économique et à la pression populaire, il accepte en 1990 de remettre son pouvoir entre les mains d'une Conférence nationale. Les élections de 1991 voient sa défaite face à Nicéphore Soglo — et il les reconnaît. C'est l'un des très rares dictateurs africains à avoir accepté volontairement l'alternance démocratique.</p>
        <p>Plus surprenant encore : il revient au pouvoir par les urnes en 1996 et 2001, élu démocratiquement par ses compatriotes. Il gouverne jusqu'en 2006, respecte la limite constitutionnelle de deux mandats, et se retire volontairement. Avant sa mort en 2015, il demanda publiquement pardon au peuple béninois pour les abus de la période révolutionnaire — un geste rare dans l'histoire politique africaine.</p>
      </>
    ),
  },
  {
    id: 'maga',
    tag: 'Histoire',
    title: 'Hubert Maga : Le premier président d'une indépendance fragile',
    excerpt: 'En 1960, le Dahomey devient indépendant. Hubert Maga en est le premier président — mais son mandat illustre la fragilité des nouvelles nations africaines.',
    img: '/Destinations/Vivez-porto-novo/trip-porto-novo-2.jpg',
    imgPos: 'center center',
    readTime: '4 min',
    body: (
      <>
        <p>Le 1er août 1960, le Dahomey proclame son indépendance de la France. Hubert Maga, instituteur devenu homme politique, devient le premier président de la jeune République. Il incarne l'espoir d'une nation qui se prend en main — mais aussi les contradictions et fragilités qui marqueront les premières décennies de l'État béninois.</p>
        <h3>L'instabilité comme régime</h3>
        <p>Entre 1960 et 1972, le Dahomey connaît pas moins de six coups d'État. Les tensions régionales entre le nord (base de Maga), le centre et le sud du pays rendent la gouvernance quasi impossible. Les présidents se succèdent — Sourou-Migan Apithy, Justin Ahomadégbé — dans un ballet politique chaotique qui épuise la nation.</p>
        <p>Maga lui-même revient au pouvoir à plusieurs reprises, notamment dans le cadre du "Conseil Présidentiel" des années 1970 — une formule originale de présidence tournante entre trois leaders régionaux. Cette invention institutionnelle, unique dans l'histoire africaine, tente de réconcilier les équilibres régionaux mais échoue à instaurer une vraie stabilité. En 1972, Kérékou met fin à cette période avec son coup d'État.</p>
      </>
    ),
  },
  {
    id: 'porte-non-retour',
    tag: 'Mémoire',
    title: 'La Porte du Non-Retour : Symbole d'une douleur universelle',
    excerpt: 'Dressée face à l'Atlantique à Ouidah, cette arche marque l'endroit où des centaines de milliers d'Africains furent embarqués vers l'esclavage.',
    img: '/Destinations/Vivez-ouidah/trip-ouidah-3.jpg',
    imgPos: 'center center',
    readTime: '4 min',
    body: (
      <>
        <p>Au bout de la Route des Esclaves à Ouidah, face à l'immensité de l'Atlantique, se dresse la Porte du Non-Retour. Construite en 1992 à l'initiative de l'UNESCO dans le cadre du projet "La Route de l'Esclave", cette arche monumentale marque l'endroit précis où les esclaves, après avoir marché quatre kilomètres depuis le centre-ville, embarquaient pour ne jamais revenir.</p>
        <h3>Un lieu de mémoire mondiale</h3>
        <p>Des centaines de milliers de personnes franchirent ce passage — des hommes, des femmes, des enfants arrachés à leurs familles, à leurs villages, à leur langue. Ceux qui furent déportés vers le Brésil devinrent les ancêtres des Afro-Brésiliens. Ceux qui allèrent à Haïti contribuèrent à la seule révolte d'esclaves victorieuse de l'histoire. Ceux qui arrivèrent en Louisiane forgèrent une culture créole unique.</p>
        <h3>Le pèlerinage du retour</h3>
        <p>Aujourd'hui, la Porte du Non-Retour est l'un des lieux de pèlerinage les plus émouvants d'Afrique. Des descendants de déportés viennent du monde entier — souvent pour la première fois — toucher cette pierre, regarder cet océan, et accomplir symboliquement le voyage en sens inverse. Certains pleurent. D'autres dansent. Tous repartent changés. C'est la puissance d'un lieu qui n'oublie pas.</p>
      </>
    ),
  },
  {
    id: 'vodoun',
    tag: 'Culture',
    title: 'Vodoun : Religion ancestrale interdite, puis célébrée',
    excerpt: 'Traqué par les missionnaires coloniaux, le Vodoun est aujourd'hui religion nationale officielle du Bénin, célébrée le 10 janvier chaque année.',
    img: '/images/Benin-Egungun-Costume-97.5.1-675x1024.jpg',
    imgPos: 'center 20%',
    readTime: '6 min',
    body: (
      <>
        <p>Pendant des siècles, le Vodoun a été la colonne vertébrale spirituelle des peuples fon, gun et ewe du Bénin. Puis les missionnaires sont arrivés, suivis des administrateurs coloniaux, et cette spiritualité millénaire a été traquée, interdite, criminalisée. Aujourd'hui, elle est religion nationale, célébrée par décret présidentiel le 10 janvier de chaque année.</p>
        <h3>Une philosophie du vivant</h3>
        <p>Le Vodoun — "esprit" ou "divinité" en langue fon — n'est pas de la sorcellerie. C'est une cosmologie sophistiquée reconnaissant la présence d'un principe divin dans toutes choses : rivières, arbres, ancêtres. Les Vodoun (divinités) sont des forces naturelles personnifiées : Hevioso gouverne la foudre et la justice, Sakpata la terre et les maladies, Agwé protège les eaux. Chaque divinité a ses couleurs, ses danses, ses prières et ses interdits.</p>
        <h3>La réhabilitation de 1994</h3>
        <p>En 1994, le président Nicéphore Soglo officialise le 10 janvier comme Journée Nationale du Vodoun. C'est un acte politique fort : la reconnaissance par l'État béninois de sa propre âme spirituelle. Chaque année depuis, Ouidah accueille des pratiquants du monde entier — Bénin, Nigeria, Brésil, Haïti, États-Unis — pour des cérémonies qui durent plusieurs jours. Le Vodoun a traversé les océans dans les cales des bateaux négriers. Il a survécu, transformé, donné naissance au Candomblé brésilien et au Vaudou haïtien. Et il est toujours vivant.</p>
      </>
    ),
  },
  {
    id: 'bataille-adegon',
    tag: 'Histoire',
    title: 'La Bataille d'Adégon : Le jour où le Dahomey faillit repousser la France',
    excerpt: 'Octobre 1892. À Adégon, les guerriers dahoméens infligent de lourdes pertes aux Français lors de l'un des combats les plus sanglants de la colonisation.',
    img: '/images/Gemini_Generated_Image_ft0r8mft0r8mft0r.png',
    imgPos: 'center 10%',
    readTime: '4 min',
    body: (
      <>
        <p>En octobre 1892, la deuxième guerre franco-dahoméenne bat son plein. Le général Alfred Dodds avance sur Abomey avec ses troupes — infanterie de marine, tirailleurs sénégalais, légionnaires. À Adégon, à quelques dizaines de kilomètres de la capitale royale, Béhanzin concentre ses meilleures forces : guerriers Fon et Agojie confondus.</p>
        <h3>Un combat acharné</h3>
        <p>La bataille d'Adégon est l'une des plus meurtrières de la campagne. Les Dahoméens, armés de fusils et d'armes blanches, se battent avec une férocité qui surprend les Français. Les Agojie en particulier mènent des charges au corps à corps qui sèment la panique dans les rangs adverses. Les rapports militaires français de l'époque mentionnent explicitement leur courage et leur discipline.</p>
        <p>Mais l'artillerie française fait la différence. Les canons de la Légion étrangère brisent les formations dahoméennes. La retraite s'impose. Adégon n'est pas une victoire pour le Dahomey — mais c'est un acte de bravoure que l'histoire a retenu. La chute d'Abomey est désormais inévitable. Elle interviendra quelques semaines plus tard, en novembre 1892.</p>
      </>
    ),
  },
  {
    id: 'reines-meres',
    tag: 'Histoire',
    title: 'Les Reines Mères d'Abomey : Le pouvoir derrière le trône',
    excerpt: 'Invisibilisées dans l'histoire officielle, les reines mères dahoméennes jouèrent un rôle politique clé dans la désignation des rois et la gestion du royaume.',
    img: '/images/Gemini_Generated_Image_nvasw6nvasw6nvas.png',
    imgPos: 'center 15%',
    readTime: '4 min',
    body: (
      <>
        <p>Dans le protocole royal dahoméen, les reines mères — appelées "Nayes" ou "Kpojito" en langue fon — occupaient une place formellement définie et extrêmement puissante. Chaque roi avait sa reine mère officielle, qui n'était pas nécessairement sa mère biologique, mais une femme investie d'une autorité spirituelle et politique considérable.</p>
        <h3>Le pouvoir de désignation</h3>
        <p>La succession au trône n'était pas automatique au Dahomey. En cas de mort du roi, c'est souvent la reine mère qui jouait un rôle déterminant dans le choix du successeur, en concertation avec le conseil des ministres royaux. Elle pouvait soutenir un candidat, en écarter un autre, et peser de tout son poids dans les négociations politiques.</p>
        <p>Des reines mères comme Sangbolou ou Yevogan sont mentionnées dans les traditions orales comme des femmes d'une intelligence politique redoutable. Elles géraient des réseaux d'informateurs, supervisaient des domaines agricoles, et participaient aux décisions de guerre ou de paix — depuis les quartiers réservés du palais, loin des regards des visiteurs étrangers. L'histoire officielle les a longtemps oubliées. Le Musée d'Abomey commence à leur rendre justice.</p>
      </>
    ),
  },
  {
    id: 'chute-abomey',
    tag: 'Histoire',
    title: 'La Chute d'Abomey : La fin d'un monde',
    excerpt: 'Novembre 1892. Béhanzin brûle lui-même ses palais pour qu'ils ne tombent pas aux mains des Français. Abomey tombe. Un royaume millénaire s'éteint.',
    img: '/Destinations/activite-abomey.jpg',
    imgPos: 'center center',
    readTime: '4 min',
    body: (
      <>
        <p>Novembre 1892. Après les combats d'Adégon et plusieurs semaines de retraite progressive, Béhanzin comprend que la capitale est perdue. Plutôt que de laisser ses palais aux envahisseurs, il ordonne d'y mettre le feu. Abomey brûle. Des siècles d'histoire partent en fumée — les trônes, les tapisseries, les archives orales, les objets royaux sacrés. Les flammes sont visibles à des kilomètres.</p>
        <h3>La dernière capitulation</h3>
        <p>Les troupes du général Dodds entrent dans une capitale vidée et en partie calcinée. Le drapeau français est hissé là où flottaient les emblèmes royaux. C'est officiellement la fin du Royaume du Dahomey en tant qu'État indépendant. Béhanzin continue de résister dans la brousse pendant encore deux ans avant d'être capturé en 1894.</p>
        <p>Mais la mémoire est plus forte que la défaite militaire. Deux des palais survivent à l'incendie. Classés UNESCO en 1985, ils accueillent aujourd'hui le Musée Historique d'Abomey. Les objets pillés par les soldats français — et conservés pendant 130 ans au Musée du Quai Branly à Paris — ont commencé à rentrer au pays en 2021. Abomey ne s'est pas éteinte. Elle renaît.</p>
      </>
    ),
  },
  {
    id: 'hunkanrin',
    tag: 'Histoire',
    title: 'Louis Hunkanrin : Le père du nationalisme dahoméen',
    excerpt: 'Instituteur, journaliste, militant : Hunkanrin fut le premier à porter haut la voix de la résistance intellectuelle contre la colonisation française.',
    img: '/Destinations/Vivez-porto-novo/trip-porto-novo-3.jpg',
    imgPos: 'center center',
    readTime: '4 min',
    body: (
      <>
        <p>Pendant que Béhanzin résistait par les armes et Kaba dans les falaises du nord, Louis Hunkanrin choisissait une autre forme de résistance : le mot écrit et la pensée politique. Instituteur, puis journaliste et militant, il est considéré comme le précurseur du nationalisme béninois — l'homme qui porta le premier la voix de l'indépendance dans les cercles intellectuels africains et français.</p>
        <h3>La plume comme arme</h3>
        <p>Né à Ouidah en 1887, Hunkanrin fait ses études en France, où il découvre les idées socialistes et panafricanistes. De retour au Dahomey, il fonde en 1921 la Ligue des droits de l'homme, section dahoméenne, et commence à publier des textes critiquant ouvertement l'administration coloniale : l'impôt de capitation, le travail forcé, les abus des fonctionnaires coloniaux.</p>
        <p>Déporté en Mauritanie par les autorités françaises pour son action politique, il continue d'écrire depuis son exil. À Paris, il entretient des liens avec les milieux panafricanistes qui gravitent autour du mouvement négritude. Il meurt en 1964, quelques années après l'indépendance qu'il avait appelée de ses vœux pendant toute sa vie. Porto-Novo, sa ville d'adoption, lui a rendu hommage en baptisant plusieurs de ses rues et institutions à son nom.</p>
      </>
    ),
  },
  {
    id: 'nikki',
    tag: 'Histoire',
    title: 'Le Royaume de Nikki : La fédération oubliée du Borgou',
    excerpt: 'Au nord du Bénin, le Royaume de Nikki organisa pendant des siècles une fédération de villages Bariba avec une structure politique d'une rare originalité.',
    img: '/Destinations/Vivez-le-nord-ouest/trip-nord-ouest-1.jpg',
    imgPos: 'center center',
    readTime: '4 min',
    body: (
      <>
        <p>L'histoire du Bénin ne se résume pas aux royaumes côtiers de l'Abomey et d'Ouidah. Dans le nord du pays, le Borgou fut pendant des siècles le théâtre d'une civilisation originale, centrée sur Nikki — une ville qui reste aujourd'hui le cœur spirituel et culturel des Bariba.</p>
        <h3>Une fédération décentralisée</h3>
        <p>Contrairement au Dahomey, dont le pouvoir était fortement centralisé à Abomey, le Royaume de Nikki fonctionnait sur un modèle fédéral. Plusieurs villages et chefferies autonomes reconnaissaient l'autorité symbolique du roi (Sinaboko) de Nikki, sans lui être totalement soumis. Cette structure politique souple permettait à chaque communauté de conserver ses traditions et son économie propre.</p>
        <p>Les Bariba, peuple de cavaliers et de guerriers, développèrent une économie agricole diversifiée et un réseau commercial qui s'étendait jusqu'au Sahel et au Niger. Ils résistèrent longtemps à la fois à l'expansion du Dahomey et à la pénétration coloniale française. Nikki reste aujourd'hui une ville où l'on célèbre chaque année la Fête des cavaliers (Gaani), l'une des plus grandes fêtes traditionnelles du Bénin.</p>
      </>
    ),
  },
  {
    id: 'ketou',
    tag: 'Histoire',
    title: 'Le Royaume de Kétou : Entre Yoruba et Fon',
    excerpt: 'À la frontière culturelle entre deux grandes civilisations, Kétou fut un carrefour commercial et spirituel d'une richesse exceptionnelle.',
    img: '/Destinations/Vivez-gogotinkpon/trip-gogotinkpon-1.jpg',
    imgPos: 'center center',
    readTime: '3 min',
    body: (
      <>
        <p>Situé dans le sud-est du Bénin actuel, à la frontière avec le Nigeria, le Royaume de Kétou occupe une position géographique et culturelle unique : il est à la charnière entre le monde Yoruba, dominant à l'est, et le monde Fon, dominant à l'ouest. Cette position a fait de lui un lieu de rencontre, d'échange et de synthèse culturelle pendant plusieurs siècles.</p>
        <h3>Une identité hybride</h3>
        <p>Les habitants de Kétou (les Kétouns) parlent une langue yoruba, pratiquent des rites proches de ceux d'Ile-Ife (cité sacrée du monde yoruba au Nigeria), mais ont développé des pratiques commerciales et artistiques qui empruntent aussi au monde fon voisin. Les fêtes, les arts textiles et la gastronomie de Kétou témoignent de cette hybridité féconde.</p>
        <p>Le Royaume de Kétou eut également à résister aux raids du Dahomey, notamment sous le roi Ghézo au XIXe siècle, qui cherchait à capturer des prisonniers pour la traite négrière. Ces attaques répétées fragilisèrent le royaume, mais ne parvinrent pas à effacer son identité propre. Aujourd'hui, Kétou est surtout connue pour son festival de la déesse Yemoja et ses masques Gélédé classés au patrimoine immatériel de l'UNESCO.</p>
      </>
    ),
  },
  {
    id: 'femmes-commercantes',
    tag: 'Histoire',
    title: 'Les Femmes de Ouidah : Pionnières du commerce atlantique',
    excerpt: 'Bien avant les comptoirs européens, les femmes de Ouidah dominaient le commerce côtier et négociaient directement avec les trafiquants étrangers.',
    img: '/Destinations/Vivez-ganvie/trip-ganvie-2.jpg',
    imgPos: 'center center',
    readTime: '4 min',
    body: (
      <>
        <p>L'histoire du commerce à Ouidah est souvent racontée depuis le point de vue des trafiquants européens. Ce récit oublie un acteur majeur : les femmes commerçantes locales, qui dominaient les marchés côtiers et jouaient un rôle d'intermédiaire essentiel entre les négociants venus d'Europe et les populations de l'intérieur.</p>
        <h3>Des entrepreneures avant l'heure</h3>
        <p>Au XVIIIe et XIXe siècles, les marchés de Ouidah et de la zone côtière sont largement contrôlés par des femmes. Elles vendent produits agricoles, huile de palme, poisson séché, tissus et objets artisanaux. Certaines, comme la légendaire Mama Boccon, accumulent des fortunes considérables et deviennent des personnages influents, capables de traiter d'égal à égal avec les négociants étrangers.</p>
        <p>Ces femmes parlaient souvent plusieurs langues — fon, portugais, anglais — et servaient de traductrices et d'agents commerciaux. Dans une économie où l'information est une denrée rare, leur réseau de contacts et leur multilinguisme en faisaient des acteurs irremplaçables. Leur histoire, longtemps oubliée, est aujourd'hui peu à peu réhabilitée par les historiens béninois et les musées locaux.</p>
      </>
    ),
  },
  {
    id: 'revolte-paysans',
    tag: 'Histoire',
    title: 'La Révolte des Paysans du Zou : Contre l'impôt colonial',
    excerpt: 'Entre 1918 et 1920, des paysans du Zou se soulevèrent contre l'impôt de capitation et le travail forcé imposés par l'administration coloniale française.',
    img: '/Destinations/activite-grand-popo.jpg',
    imgPos: 'center center',
    readTime: '3 min',
    body: (
      <>
        <p>La résistance à la colonisation ne fut pas qu'une affaire de rois et de généraux. Dans les villages du Zou (département du centre du Bénin actuel), c'est une révolte paysanne qui éclate entre 1918 et 1920 — moins spectaculaire que les guerres du Dahomey, mais tout aussi significative dans l'histoire de la résistance africaine.</p>
        <h3>L'insupportable charge coloniale</h3>
        <p>L'administration coloniale française impose aux populations béninoises deux fardeaux particulièrement lourds : l'impôt de capitation (une taxe par tête qui doit être payée en monnaie française, forçant les paysans à travailler pour des employeurs coloniaux) et les travaux forcés pour la construction de routes et de bâtiments administratifs.</p>
        <p>Dans le Zou, des chefs locaux organisent la résistance. Refus de payer l'impôt, dissimulation de la population lors des recensements, attaques ponctuelles des agents collecteurs. La révolte est réprimée par les forces coloniales avec une sévérité exemplaire — des villages sont brûlés, des leaders arrêtés et déportés. Mais elle marque les premières résistances rurales organisées et préfigure le mouvement nationaliste qui fleurira dans les années 1940-1950.</p>
      </>
    ),
  },
  {
    id: 'palais-abomey',
    tag: 'Patrimoine',
    title: 'Les Palais d'Abomey : La mémoire de pierre des rois',
    excerpt: 'Classés UNESCO depuis 1985, les palais royaux d'Abomey sont un livre ouvert sur mille ans de civilisation dahoméenne.',
    img: '/Destinations/activite-abomey.jpg',
    imgPos: '40% center',
    readTime: '5 min',
    body: (
      <>
        <p>Sur quarante hectares au cœur d'Abomey, douze rois ont construit, sur cinq siècles, l'un des ensembles architecturaux les plus extraordinaires d'Afrique. Chaque souverain ajoutait son palais au complexe existant, créant une ville dans la ville — une accumulation de mémoire royale qui n'a pas d'équivalent sur le continent.</p>
        <h3>Les bas-reliefs, bibliothèque d'argile</h3>
        <p>Les murs des palais sont ornés de bas-reliefs polychromes qui racontent l'histoire de chaque roi : batailles gagnées, animaux totémiques, allégories politiques. C'est la bibliothèque du Dahomey, écrite en argile et en peinture. Chaque motif a sa signification précise — le requin pour Béhanzin, le lion pour Glélé, l'oiseau pour Agadja — des messages politiques destinés aux générations futures.</p>
        <h3>Un retour historique</h3>
        <p>En 1892, les soldats français pillèrent les palais et emportèrent des centaines d'objets royaux à Paris. Pendant 130 ans, trônes, statues et portes sculptées ont dormi dans les réserves du Musée du Quai Branly. En novembre 2021, vingt-six de ces œuvres ont été solennellement restituées au Bénin — une première historique. Leur retour à Abomey est vécu comme une victoire symbolique : la mémoire ne se vole pas définitivement. Tôt ou tard, elle revient à ceux qui lui appartiennent.</p>
      </>
    ),
  },
  {
    id: 'journee-vodoun',
    tag: 'Culture',
    title: 'La Journée Nationale du Vodoun : Une fête qui traverse les océans',
    excerpt: 'Chaque 10 janvier, Ouidah devient le centre du monde Vodoun. Des pratiquants de cinq continents convergent pour des cérémonies d'une intensité rare.',
    img: '/Destinations/Vivez-ouidah/trip-ouidah-4.jpg',
    imgPos: 'center center',
    readTime: '4 min',
    body: (
      <>
        <p>Le 10 janvier 1994, le président Nicéphore Soglo signe le décret qui fait du Vodoun une religion officiellement reconnue au Bénin, et du 10 janvier la Journée Nationale du Vodoun. C'est un acte politique autant que culturel : la reconnaissance par l'État de sa propre identité spirituelle, longtemps niée par les autorités coloniales et post-coloniales.</p>
        <h3>Ouidah au cœur du monde</h3>
        <p>Chaque année depuis, Ouidah accueille l'un des rassemblements spirituels les plus impressionnants du monde. Des pratiquants viennent du Nigeria, du Ghana, du Togo, mais aussi du Brésil, d'Haïti, de Cuba, des États-Unis — partout où la diaspora africaine a emporté avec elle les divinités de ses ancêtres. Pendant plusieurs jours, la ville vibre au son des tambours, des chants sacrés et des danses de possession.</p>
        <p>Les masques Egungun défilent dans les rues — ces costumes colorés qui représentent les ancêtres revenus parmi les vivants. Les prêtres Vodoun (hounongan) dirigent des cérémonies complexes. Les fidèles entrent en transe. Et dans cette transe, quelque chose de très ancien se ravive : la connexion entre les vivants et leurs ancêtres, entre l'Afrique et sa diaspora, entre le passé et le présent. Une expérience que les mots ne peuvent qu'effleurer.</p>
      </>
    ),
  },
  {
    id: 'exil-behanzin',
    tag: 'Histoire',
    title: 'L'Exil de Béhanzin : Du trône aux Antilles',
    excerpt: 'Capturé en 1894, Béhanzin fut exilé en Martinique puis en Algérie, où il mourut en 1906. Mais sa mémoire, elle, ne quitta jamais le Bénin.',
    img: '/images/roi-dahomey.png',
    imgPos: '20% 15%',
    readTime: '4 min',
    body: (
      <>
        <p>Janvier 1894. Dans la brousse du Dahomey, le dernier grand roi résiste encore. Mais l'étau se resserre. Après deux ans de guérilla, privé de ravitaillement et trahi par certains de ses alliés, Béhanzin choisit de se rendre pour éviter un dernier massacre. Il dépose les armes devant le général Dodds. Le Dahomey tombe officiellement sous administration française.</p>
        <h3>La Martinique, puis l'Algérie</h3>
        <p>Les autorités françaises décident que Béhanzin ne doit en aucun cas rester en Afrique — sa présence serait un foyer de résistance permanente. Il est donc exilé à Fort-de-France, en Martinique, avec sa famille et sa cour. Pendant plusieurs années, il vit dans cette île des Caraïbes, apprenant le français, recevant des visiteurs, maintenant une dignité royale qui impressionne même ses geôliers.</p>
        <p>En 1906, malade, il est transféré à Blida, en Algérie, où il meurt peu après, loin du sol qui l'avait vu naître. Son corps est rapatrié au Dahomey en 1928, et reçoit des funérailles nationales. La postérité lui a rendu la grandeur que la défaite militaire lui avait prise. Au Bénin comme dans toute l'Afrique, son nom reste synonyme de résistance et de fierté.</p>
      </>
    ),
  },
  {
    id: 'conference-nationale',
    tag: 'Aujourd'hui',
    title: 'La Conférence Nationale de 1990 : Le modèle africain',
    excerpt: 'En février 1990, toutes les forces vives du Bénin se réunirent pour inventer ensemble une transition démocratique. Un moment unique dans l'histoire africaine.',
    img: '/Destinations/Vivez-porto-novo/trip-porto-novo-5.jpg',
    imgPos: 'center center',
    readTime: '5 min',
    body: (
      <>
        <p>Imaginez : un pays qui a connu six coups d'État en douze ans, puis dix-huit ans de régime marxiste à parti unique. Et imaginez que ce pays, en l'espace de quelques jours de dialogue national, réussisse une transition pacifique vers la démocratie que le monde entier s'empressera d'imiter. C'est exactement ce qui s'est passé au Bénin en février 1990.</p>
        <h3>La "souveraineté" de la Conférence</h3>
        <p>La Conférence nationale des forces vives rassemble plus de 500 délégués représentant tous les courants de la société béninoise : syndicats, Église, associations, partis clandestins, chefs traditionnels, intellectuels. Présidée par l'évêque Isidore de Souza, elle se déclare d'emblée "souveraine" — c'est-à-dire supérieure en autorité au gouvernement en place. Kérékou accepte cette déclaration. C'est déjà un miracle.</p>
        <p>En dix jours, la Conférence adopte une nouvelle constitution, établit un gouvernement de transition, et fixe un calendrier électoral. Les premières élections libres ont lieu en 1991. Kérékou, battu, reconnaît sa défaite et passe le pouvoir à Soglo. Le Bénin entre dans l'histoire. Depuis, la Conférence nationale de 1990 est enseignée dans les facultés de sciences politiques du monde entier comme le modèle réussi d'une transition démocratique africaine.</p>
      </>
    ),
  },
  {
    id: 'dahomey-origines',
    tag: 'Histoire',
    title: 'Les origines du Dahomey',
    excerpt: 'Comment le peuple Fon bâtit un empire qui allait résister aux siècles et fasciner le monde entier.',
    img: '/images/Gemini_Generated_Image_ft0r8mft0r8mft0r.png',
    imgPos: 'center 10%',
    readTime: '5 min',
    body: (
      <>
        <p>Au cœur de l'Afrique de l'Ouest, dans la région d'Abomey, naît au VIIe siècle l'une des civilisations les plus fascinantes du continent africain. Le peuple Fon pose les fondations d'un royaume qui allait durer plus de mille ans.</p>
        <p>Contrairement à ce que l'on pourrait imaginer, le Dahomey n'est pas né de la conquête brutale, mais d'une organisation politique sophistiquée. Les premiers rois fon établissent un système de gouvernance centralisé, avec des ministres, des conseillers royaux, et un réseau d'espions — une administration d'État élaborée bien avant l'arrivée des Européens sur ces côtes.</p>
        <h3>Le pacte fondateur</h3>
        <p>La légende rapporte que le royaume fut fondé lorsque le roi Dakodonou, mécontent d'un chef local nommé Dan, décida de construire son palais dans son ventre — d'où le nom "Da-ho-mey" : "dans le ventre de Dan". Ce récit mythologique cache une réalité politique : l'absorption progressive des pouvoirs locaux par une autorité centrale qui deviendra l'une des plus puissantes d'Afrique subsaharienne.</p>
        <h3>Une société d'une rare sophistication</h3>
        <p>Le Dahomey développe très tôt un système économique complexe : marchés régulés, monnaie de cauris, commerce longue distance. Les artisans fon produisent des œuvres en bronze, en fer forgé et en tissu appliqué d'une qualité qui stupéfiera les collectionneurs européens des siècles plus tard. La religion Vodoun structure la vie sociale : chaque famille possède ses divinités protectrices et ses cérémonies.</p>
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
        <p>Ganvié n'est pas née d'un caprice architectural. Au XVIIe siècle, fuyant les raids des guerriers Fon qui vendaient leurs prisonniers aux négriers portugais, le peuple Tofinu trouva refuge sur les eaux. Les Fon, dont la religion interdisait l'accès aux lacs, ne pouvaient les poursuivre. L'eau devint leur protection, et cette protection devint leur demeure. Le nom "Ganvié" signifie d'ailleurs "nous sommes sauvés" en langue fon.</p>
        <h3>130 000 âmes sur l'eau</h3>
        <p>Aujourd'hui, Ganvié abrite environ 130 000 habitants qui vivent sur l'eau depuis leur naissance. Les maisons en bois et bambou reposent sur des pilotis. Les enfants apprennent à nager avant de marcher. Les marchés se font de pirogue à pirogue. L'économie repose sur la pêche et les "acadjas" — des branchages immergés qui créent des récifs artificiels où les poissons se réfugient. Un séjour à Ganvié avec Reboot BJ, c'est une immersion dans la vie quotidienne : marché du matin, repas chez l'habitant, soirée aux étoiles sur un ponton.</p>
      </>
    ),
  },
  {
    id: 'renaissance',
    tag: 'Aujourd'hui',
    title: 'Le Bénin se réveille',
    excerpt: 'Œuvres royales rapatriées, scène artistique bouillonnante, gastronomie en renaissance. Le Bénin réécrit son histoire.',
    img: '/images/benin.png',
    imgPos: 'center center',
    readTime: '4 min',
    body: (
      <>
        <p>Quelque chose s'est mis en mouvement au Bénin. Ce n'est pas seulement le béton des nouveaux bâtiments qui pousse à Cotonou, ni les routes qui s'élargissent. C'est quelque chose de plus profond : une conscience collective, une fierté retrouvée, un désir de prendre en main son propre récit.</p>
        <h3>Les œuvres royales reviennent</h3>
        <p>En novembre 2021, vingt-six œuvres royales du Dahomey pillées par l'armée française en 1892 quittent le Quai Branly à Paris pour rentrer à Cotonou. Leur retour, retransmis en direct à la télévision béninoise, est accueilli comme un moment fondateur. Le Bénin devient un modèle dans le combat mondial pour la restitution du patrimoine africain.</p>
        <h3>Cotonou, capitale créative</h3>
        <p>Galeries d'art contemporain, studios de design, restaurants créatifs, espaces de coworking — Cotonou devient l'une des villes les plus dynamiques d'Afrique de l'Ouest. Des artistes comme Romuald Hazoumè, dont les masques faits de bidons d'essence ont fait le tour du monde, font rayonner l'art béninois sur la scène internationale. Reboot BJ est né de ce réveil — pour que vous le viviez de l'intérieur.</p>
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
      lead="Histoire, mémoire, culture, destinations. Trente articles pour comprendre un pays unique."
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
