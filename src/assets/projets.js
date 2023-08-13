export const PROJETS = [
  {
    id: 1,
    titre: 'site vitrine - spa',
    description: 'premier projet réalisé durant ma formation à la Wild Code School ',
    technosPrincipales: ['HTML', 'CSS', 'JS-DOM'],

    tailleEquipe: '4',
    temps: '2 semaines',
    organisation: '',
    mainImage: './assets/WCS-spa/MAIN.png',
    objectif:
      'Se servir de nos acquis en html, css, javascript dom et git dans un projet en groupe.',

    technos: ['HTML', 'CSS', 'JS-DOM', 'Git / GitHub', 'Figma'],

    gfait: "je me suis occupé de la page d'accueil et de la navbar.",
    fonctions: [
      {
        title: 'redirection',
        description:
          "on est redirigé sur les autres pages en cliquant sur le images de la page d'accueil ou dans la navbar.",
        image: './assets/WCS-spa/menu.png'
      },
      {
        title: 'responsif',
        description: "Il fallait que le site soit utilisable sur un téléphone. C'est fait",
        image: './assets/WCS-spa/responsive.png'
      },
      {
        title: 'plouf',
        description:
          "vu que j'avais fini ma partie je me suis amusé avec les animation en css. Du coup en version ordinateur quand on clique sur l'icon user, il plonge et fait plouf",
        image: './assets/WCS-spa/plouf.png'
      },
      {
        title: 'cadie',
        description:
          "Dans la page produit, quand on clique sur ajouter au panier, ça ajoute au panier. On peut cliquer sur l'icon panier pour le voir. Par contre on ne peut pas l'enlever. Tu touche tu paye !",
        image: './assets/WCS-spa/cart.png'
      }
    ],

    video: '',
    lienSite: 'https://baptistecourtin.github.io/Projet1-SPA/pages/',
    lienGithub: 'https://github.com/BaptisteCourtin/Projet1-SPA'
  },
  // -----
  {
    id: 2,
    titre: 'blindtest',
    description: 'deuxième projet réalisé durant ma formation à la Wild Code School ',
    technosPrincipales: ['React', 'JavaScript', 'CSS'],

    tailleEquipe: '5',
    temps: '1 mois et demi',
    organisation: '',
    mainImage: './assets/WCS-blindtest/MAIN.png',
    objectif:
      "Commencer à apprendre React, les méthodes agiles, les appels à l'api et, mise en pratique de nos acquis en JavaScript",

    technos: ['React', 'JavaScript', 'CSS', 'Git / GitHub', 'Figma', 'Jira'],

    gfait:
      "je me suis occupé de la page d'accueil et de la navbar puis, j'ai aidé à l'implémentation des fonctionnalités des autres pages.",
    fonctions: [
      {
        title: 'redirection',
        description:
          "on est redirigé sur les autres pages en cliquant sur les buttons de la page d'accueil ou dans la navbar.",
        image: './assets/WCS-blindtest/menu.png'
      },
      {
        title: 'recherche',
        description: 'On peut rechercher les titres selon plusieurs filtres',
        image: './assets/WCS-blindtest/recherche.png'
      },
      {
        title: 'jouer au DJ',
        description:
          "On peut lancer les musiques. Si l'on veut on peut en lancer plusieurs à la fois (c'est pas un bug mais une feature)"
      },
      {
        title: 'des filtres pour jouer au blindtest',
        description: 'On peut choisir le type de musiques ainsi que la décennie',
        image: './assets/WCS-blindtest/choix.png'
      },
      {
        title: 'tester ces connaissances',
        description:
          "Jouer ! Avec 4 propositions disposées de manière aléatoire et un timer. Si notre réponse est fausse, la bonne apparait. Notre score s'affiche en fin de partie.",
        image: './assets/WCS-blindtest/test.png'
      }
    ],

    video: '',
    lienSite: '',
    lienGithub: 'https://github.com/BaptisteCourtin/Blindtest-projet2-WCS-'
  },
  // -----
  {
    id: 3,
    titre: 'Babyplace',
    description: 'troisième projet réalisé durant ma formation à la Wild Code School ',
    technosPrincipales: ['React', 'JavaScript', 'SCSS', 'Express', 'SQL'],

    tailleEquipe: '4',
    temps: '2 mois et demi',
    organisation: '',
    mainImage: './assets/WCS-babyplace/MAIN.png',
    objectif:
      'Se servir de nos acquis en html, css, javascript dom et git dans un projet en groupe.',

    technos: [
      'React',
      'JavaScript',
      'SCSS',
      'Express',
      'NodeJS',
      'SQL',
      'MySQLWorkbench',
      'Git / GitHub',
      'AWS',
      'Google-Cloud',
      'Figma',
      'Jira'
    ],

    gfait:
      "Je me suis occupé de toute la patie dite 'application', son but étant de permettre aux parents de trouver et réserver une place pour leurs enfants.",
    fonctions: [
      {
        title: 'inscription et authentification',
        description: 'On peut créer un compte pour réserver une place',
        image: './assets/WCS-babyplace/.png'
      },
      {
        title: 'recherche avec des cartes',
        description:
          'On peut rechercher une structure avec des filtres et une disposition sous forme de cartes.',
        image: './assets/WCS-babyplace/.png'
      },
      {
        title: 'mais aussi avec une map',
        description: 'Une disposition des structures sur une map est disponible',
        image: './assets/WCS-babyplace/.png'
      },
      {
        title: 'réservation',
        description:
          'On peut faire une demande de réservation de façon récurrente ou exceptionnelle',
        image: './assets/WCS-babyplace/.png'
      },
      {
        title: 'les notifications',
        description:
          'Quand une structure à accepté ou refusé notre demande, une notification apparait',
        image: './assets/WCS-babyplace/.png'
      },
      {
        title: 'noter les structures',
        description:
          'Un certain temps après le passage en crèche, une demande de note apparit dans la section notifications',
        image: './assets/WCS-babyplace/.png'
      },
      {
        title: 'remplir des formulaires',
        description: 'On peut y mettre des informations mais aussi des documents et des images',
        image: './assets/WCS-babyplace/.png'
      },
      {
        title: 'ne pas être aidé',
        description: 'Par contre on ne fait pas de service après vente',
        image: './assets/WCS-babyplace/.png'
      }
    ],

    video: '',
    lienSite: 'http://vps-d5babf40.vps.ovh.net:5006/',
    lienGithub: 'https://github.com/BaptisteCourtin/babyplace'
  },
  // -----
  {
    id: 4,
    titre: 'test de React Native',
    description: 'Tester et comprendre React Native',
    technosPrincipales: ['React Native', 'CSS'],

    tailleEquipe: 'moi seul',
    temps: '1 semaine',
    organisation: '',
    mainImage: './assets/MY-firstNative/MAIN.png',
    objectif:
      "Après une démonstartion en cours de React Native, j'ai décidé d'approfondir pour voir les posibilités",

    technos: ['React Native', 'CSS', 'Git / GitHub'],

    gfait: '',
    fonctions: [
      {
        title: 'naviguer',
        description: 'choisir quelle espèce aller voir ou tester les navigations',
        image: './assets/MY-firstNative/accueil.png'
      },
      {
        title: 'images',
        description: 'afficher des images qui ont différentes tailles',
        image: './assets/MY-firstNative/images.png'
      }
    ],

    video: '',
    lienSite: '',
    lienGithub: ''
  },
  // -----
  {
    id: 5,
    titre: 'like or pass digimon',
    description: 'toujours pour tester React Native mais avec une api en plus',
    technosPrincipales: ['React Native', 'CSS'],

    tailleEquipe: 'moi seul',
    temps: '1 semaine',
    organisation: '',
    mainImage: './assets/MY-digimon/MAIN.png',
    objectif: "Continuer à s'amuser avec React Native et voir comment ça fonctionne avec une api",

    technos: ['React Native', 'CSS', 'Git / GitHub'],

    gfait: '',
    fonctions: [
      {
        title: 'choisir',
        description: "clique sur like si c'est bien, clique sur pass si c'est pas bien",
        image: './assets/MY-digimon/likePass.png'
      },
      {
        title: 'voir ses choix',
        description: 'clique sur stats pour voir ceux que tu as déjà passé',
        image: './assets/MY-digimon/stats.png'
      }
    ],

    video: '',
    lienSite: '',
    lienGithub: ''
  },
  // -----
  {
    id: 6,
    titre: 'Site Vitrine des stages',
    description:
      'création du site pour montrer les projets des stagiaires aux clients et aux futurs stagiaires.',
    technosPrincipales: ['Angular', 'JavaScript', 'SCSS', 'Java Springboot', 'SQL'],

    tailleEquipe:
      '3 stagiaires full-stack, 1 stagiaire designeuse, 1 Product Owner, 1 lead developpeur',
    temps: '6 mois',
    organisation: 'Aubay',
    mainImage: './assets/WCS-digimon/MAIN.png',
    objectif: "Continuer à s'amuser avec React Native et voir comment ça fonctionne avec une api",

    technos: [
      'Angular',
      'JavaScript',
      'SCSS',
      'Java Springboot',
      'SQL',
      'PostgreSQL',
      'PgAdmin',
      'Git / GitLab',
      'Jenkins',
      'SonarQube',
      'Figma',
      'Jira'
    ],

    gfait: '',
    fonctions: [
      {
        title: '',
        description: '',
        image: './assets/WCS-digimon/.png'
      }
    ],

    video: '',
    lienSite: '',
    lienGithub: ''
  }
  // -----
]
