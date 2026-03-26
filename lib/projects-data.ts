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
  featured?: boolean;
};

export const projectsData: ProjectItem[] = [
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
    color: "bg-tan",
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
    color: "bg-navy",
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
    color: "bg-tan",
    imageSrc: "/images/Lexilala.png",
    demoUrl: "https://youtu.be/2a94MAWPDLs",
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
    color: "bg-navy",
    imageSrc: "/images/pixel-trader.png",
    demoUrl: "https://youtu.be/joPIAB6JLfM",
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
    imageSrc: "/images/chatbot.png",
    demoUrl: "https://youtu.be/4yqFBr0aM5M",
  },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}
