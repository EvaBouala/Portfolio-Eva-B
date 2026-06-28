export type ProjectItem = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  color: string;
  imageSrc: string;
  demoUrl?: string;
  pdfUrl?: string;
  featured?: boolean;
};

export const projectsData: ProjectItem[] = [
  {
    id: 10,
    slug: "stage-reltim-refonte-wordpress",
    title: "Stage RELTIM - Refonte Web",
    category: "Stage de fin d'année",
    description:
      "Stage de 3,5 mois en autonomie complète sur la refonte de plateformes WordPress.",
    longDescription:
      "Ce projet correspond à mon stage de fin d'année chez RELTIM, réalisé sur 3,5 mois. J'y ai tenu un rôle complet en étant à la fois Cheffe de Projet, Web Designer et Développeuse Web.\n\nJ'ai conduit la refonte stratégique de deux plateformes WordPress : création de wireframes, maquettes, identité visuelle et intégration complète, en m'alignant sur les préférences de l'équipe et les objectifs métier.\n\nLe travail a aussi intégré l'optimisation SEO, l'analyse des parcours utilisateurs via Google Analytics, ainsi que le pilotage d'un tableau de bord Power BI pour suivre les KPI marketing (génération de leads et performance des campagnes) et orienter les décisions.\n\nEn plein milieu du stage, le projet a changé de direction, ce qui a repoussé la finalisation complète pour une reprise probable par un autre développeur. Avant la fin de mon stage, j'ai tout de même livré un site fonctionnel. Le contexte et les détails sont présentés au début de la vidéo.",
    tags: [
      "Stage",
      "WordPress",
      "Gestion de projet",
      "UX/UI",
      "SEO",
      "Google Analytics",
      "Power BI",
    ],
    color: "bg-navy",
    imageSrc: "/images/reltim-stage-vertical.png",
    demoUrl: "https://youtu.be/f2jHYZy9TH0",
    featured: true,
  },
  {
    id: 9,
    slug: "site-web-association-cheffe-projet",
    title: "Site Web d'Association",
    category: "Gestion de projet",
    description:
      "Cheffe de projet sur la création d'un site web associatif, de la conception à la livraison.",
    longDescription:
      "En tant que Cheffe de Projet, j'ai piloté de bout en bout la création du site web d'une association, de la conception à la livraison. J'ai coordonné une solution clé en main, pensée pour renforcer la visibilité de l'association et soutenir ses objectifs de conversion. J'ai également défini les user stories, cadré les besoins fonctionnels et priorisé les fonctionnalités afin de livrer un site clair, utile et directement exploitable.",
    tags: [
      "Gestion de projet",
      "User stories",
      "Priorisation",
      "Site web",
      "Conversion",
    ],
    color: "bg-tan",
    imageSrc: "/images/site-web-asso-vertical.png",
    pdfUrl: "/pdf/presentation.pdf",
    featured: true,
  },
  {
    id: 8,
    slug: "ai-chatbot",
    title: "AI Chatbot",
    category: "Intelligence Artificielle",
    description:
      "Projet de chatbot conversationnel avec interface claire et réponses dynamiques.",
    longDescription:
      "Ce projet met en avant un chatbot IA concu pour fluidifier les interactions utilisateur. Le travail se concentre sur l'experience conversationnelle, l'ergonomie de l'interface et la qualite des reponses.",
    tags: ["JavaScript", "HTML/CSS"],
    color: "bg-gold",
    imageSrc: "/images/chatbot-vertical.png",
    demoUrl: "https://youtu.be/4yqFBr0aM5M",
    featured: true,
  },
  {
    id: 1,
    slug: "christmas-shop-crud",
    title: "Christmas Shop CRUD",
    category: "Site Web",
    description:
      "Application de gestion de boutique avec opérations CRUD complètes.",
    longDescription:
      "Ce projet présente une application web complète avec création, lecture, modification et suppression de contenus dans un environnement de boutique thématique.",
    tags: ["PHP", "MySQL", "HTML/CSS", "SASS"],
    color: "bg-navy",
    imageSrc: "/images/Christmas-Shop-2.png",
    demoUrl: "https://youtu.be/UqXgzJBKhAM",
    featured: true,
  },
  {
    id: 7,
    slug: "video-pixel-trader",
    title: "Pixel Trader",
    category: "Projet Digital",
    description:
      "Concept digital avec univers visuel marqué et mécaniques intéractives.",
    longDescription:
      "Ce projet combine identité visuelle et logique produit pour présenter une expérience engageante autour d'un concept digital original.",
    tags: ["PHP", "CSS", "JavaScript"],
    color: "bg-tan",
    imageSrc: "/images/pixel-trader.png",
    demoUrl: "https://youtu.be/joPIAB6JLfM",
  },
  {
    id: 2,
    slug: "convertisseur-devises",
    title: "Convertisseur de Devises",
    category: "Outil Web",
    description:
      "Outil intéractif de conversion monétaire avec interface claire.",
    longDescription:
      "Ce projet met en avant une logique de conversion de devises et une expérience utilisateur simple pour comparer rapidement des montants.",
    tags: ["JavaScript", "UI"],
    color: "bg-gold",
    imageSrc: "/images/devises-2.png",
    demoUrl: "https://youtu.be/-ARxgb6agkw",
    featured: true,
  },
  {
    id: 3,
    slug: "gestion-commentaires-posts",
    title: "Gestion des Commentaires et Posts",
    category: "Back-office",
    description: "Module de modération et gestion de contenus publies.",
    longDescription:
      "Ce projet se concentre sur la gestion de publications et commentaires avec une structure pensée pour l'administration et la qualité des échanges.",
    tags: ["Nuxt.js", "Vue.js", "Gestion de contenu"],
    color: "bg-navy",
    imageSrc: "/images/posts-commentaires-2.png",
    demoUrl: "https://youtu.be/C0eyjOm2vOI",
    featured: true,
  },
  {
    id: 4,
    slug: "iot-vid",
    title: "Projet IoT",
    category: "Innovation",
    description:
      "Prototype connecte et demonstration fonctionnelle orientee usage.",
    longDescription:
      "Ce projet IoT illustre une approche orientée produit, entre technique, tests et mise en valeur de cas d'usage concrets.",
    tags: ["IoT", "Python", "Prototype", "Developpement"],
    color: "bg-tan",
    imageSrc: "/images/IOT-2.png",
    demoUrl: "https://youtu.be/qarocfXjyyY",
    featured: true,
  },
  {
    id: 5,
    slug: "video-emotions-wars",
    title: "Emotions Wars",
    category: "Projet Creatif",
    description: "Projet vidéo créatif centre sur la narration et l'émotion.",
    longDescription:
      "Ce projet explore une direction plus créative avec un travail sur la mise en scène, l'intention visuelle et l'expérience de narration.",
    tags: ["Storytelling", "CSS", "Creation"],
    color: "bg-gold",
    imageSrc: "/images/creativ-dev.png",
    demoUrl: "https://youtu.be/5yufLIr8GdI",
  },
  {
    id: 6,
    slug: "video-longue-lexilala",
    title: "Lexilala - Format Long",
    category: "Site Web",
    description:
      "Projet réalisé lors de ma première BAP pour Lexilala, une sous-firme de Dulala, autour d'une plateforme d'apprentissage du français.",
    longDescription:
      "Lexilala est un projet mené lors de ma première BAP avec un client réel : Lexilala, sous-firme de Dulala. L'objectif était de concevoir un site web facilitant l'intégration des enfants étrangers et de leurs familles en France, grâce à des parcours d'apprentissage de la langue variés, ludiques et accessibles. La plateforme est également pensée pour un usage en classe, afin de permettre aux professeurs de s'appuyer sur des contenus pédagogiques adaptés. Sur ce projet, j'ai contribué en tant que développeuse web, avec un focus sur l'intégration front-end, la structure des pages et la qualité de l'expérience utilisateur.",
    tags: ["HTML/CSS", "SASS", "WordPress", "PHP", "UX/UI"],
    color: "bg-navy",
    imageSrc: "/images/Lexilala.png",
    demoUrl: "https://youtu.be/2a94MAWPDLs",
  },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}
