export const PROJETSFR = [
  {
    id: 1,
    titre: 'Site vitrine - spa',
    description: 'Premier projet réalisé durant ma formation à la Wild Code School.',
    technosPrincipales: ['HTML', 'CSS', 'JS-DOM'],

    tailleEquipe: '4',
    temps: '2 semaines',
    organisation: '',
    mainImage: './assets/WCS-spa/MAIN.png',
    objectif:
      'Se servir de nos acquis en html, css, javascript dom et git dans un projet en groupe.',

    technos: ['HTML', 'CSS', 'JS-DOM', 'Git / GitHub', 'Figma'],

    gfait: "Je me suis occupé de la page d'accueil et de la navbar.",
    fonctions: [
      {
        title: 'Redirection',
        description:
          "On est redirigé sur les autres pages en cliquant sur les images de la page d'accueil ou dans la navbar.",
        image: './assets/WCS-spa/menu.png'
      },
      {
        title: 'Responsif',
        description:
          "Il fallait que le site soit utilisable sur un téléphone. C'est fait. En version téléphone, la navbar, qui était en haut de page, passe en menu burger. Quand on clique sur le menu burger, le reste de la page prend une couleur plus foncée.",
        image: './assets/WCS-spa/responsive.png'
      },
      {
        title: 'Plouf',
        description:
          "Vu que j'avais fini ma partie je me suis amusé avec les animations en css. Du coup en version ordinateur quand on clique sur l'icon user, il plonge et fait plouf. Et il y'a un bruit de plouf. C'est parti d'une blague mais je l'ai fait, et c'est drôle (au moins un peu), en tout cas moi ça me fait rire.",
        image: './assets/WCS-spa/plouf.png'
      },
      {
        title: 'Caddie',
        description:
          "Dans la page produit, quand on clique sur ajouter au panier, ça ajoute au panier. On peut cliquer sur l'icon panier pour le voir. Par contre on ne peut pas enlever de produit. Tu cliques tu payes !",
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
    titre: 'Blindtest',
    description:
      'Deuxième projet réalisé durant ma formation à la Wild Code School. Premier projet avec React.',
    technosPrincipales: ['React', 'JavaScript', 'CSS'],

    tailleEquipe: '5',
    temps: '1 mois et demi',
    organisation: '',
    mainImage: './assets/WCS-blindtest/MAIN.png',
    objectif:
      'Commencer à apprendre React, les méthodes agiles, les appels à une api et, mise en pratique de nos acquis en JavaScript.',

    technos: ['React', 'JavaScript', 'CSS', 'Git / GitHub', 'Figma', 'Jira'],

    gfait:
      "Je me suis occupé de la page d'accueil et de la navbar puis, j'ai aidé à l'implémentation des fonctionnalités des autres pages.",
    fonctions: [
      {
        title: 'Redirection',
        description:
          "On est redirigé sur les autres pages en cliquant sur les boutons de la page d'accueil ou dans la navbar. Quand la navbar est ouverte, le reste de la page prend une teinte plus foncée.",
        image: './assets/WCS-blindtest/menu.png'
      },
      {
        title: 'Recherche',
        description:
          "On peut rechercher les titres selon plusieurs filtres. Le premier est selon la décennie, le second par rapport au genre. Enfin, un troisième filtre permet de rechercher par rapport au nom du titre ou de l'artiste.",
        image: './assets/WCS-blindtest/recherche.png'
      },
      {
        title: 'Jouer au DJ',
        description:
          "Dans la page de recherche, nous pouvons lancer les musiques. Si l'on veut on peut en lancer plusieurs à la fois (ce n'est pas un bug mais une feature)."
      },
      {
        title: 'Des filtres pour jouer au blindtest',
        description:
          "On peut choisir le type de musiques ainsi que la décennie. Sinon, les membres de l'équipe ont créés leurs propres blindtests auxquels vous pouvez jouer.",
        image: './assets/WCS-blindtest/choix.png'
      },
      {
        title: 'Tester ses connaissances',
        description:
          "Jouer ! Avec 4 propositions disposées de manière aléatoire et un timer. Si notre réponse est fausse ou si le temps imparti est dépassé, la bonne réponse apparait. Notre score s'affiche en fin de partie.",
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
    description:
      "Troisième et dernier projet réalisé durant ma formation à la Wild Code School. Création d'un site full-stack.",
    technosPrincipales: ['React', 'JavaScript', 'SCSS', 'Express', 'SQL'],

    tailleEquipe: '4',
    temps: '2 mois et demi',
    organisation: '',
    mainImage: './assets/WCS-babyplace/MAIN.png',
    objectif:
      "Créer la base de données du site, créer entièrement le backend et le frontend. En somme, utiliser toutes les connaissances apprises jusqu'alors et en acquérir et utiiser de nouvelles.",

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
      "Je me suis occupé de toute la partie dite 'application', son but étant de permettre aux parents de trouver et réserver une place pour leurs enfants.",
    fonctions: [
      {
        title: 'Inscription et authentification',
        description:
          'On peut créer un compte ou se connecter à un compte existant pour remplir les formulaires nécessaires, réserver une place et gérer ses réservations.',
        image: './assets/WCS-babyplace/authent.png'
      },
      {
        title: 'Recherche avec des cartes',
        description:
          "On peut rechercher une structure avec des filtres et une disposition sous forme de cartes. Les filtres sont additifs. Ils sont par rapport à ce que la structure propose comme activités, ses services mais aussi et surtout par rapport aux jours et horaires d'ouvertures.",
        image: './assets/WCS-babyplace/recherche.png'
      },
      {
        title: 'Mais aussi avec une map',
        description:
          "La disposition des structures sur une map est disponible. En plus de cela, on peut calculer la distance nous séparant de l'emplacement de la structure. En rentrant son adresse dans la barre de recherche ou en utilisant le bouton pour nous localiser automatiquement.",
        image: './assets/WCS-babyplace/map.png'
      },
      {
        title: 'Réserver une place',
        description:
          'Nous pouvons faire une demande de réservation de façon récurrente ou exceptionnelle. Après avoir entré les horaires de garde, nous pouvons demander certains suppléments, connaitre le prix total à payer et enfin envoyer la demande de réservation.',
        image: './assets/WCS-babyplace/demande.png'
      },
      {
        title: 'Les notifications',
        description:
          "Quand une structure a accepté ou refusé notre demande, une notification apparait. Quand la demande est acceptée il reste à payer (on ne paye pas vraiment, ça reste un projet non professionnel malgré tout) pour valider la réservation et qu'elle s'affiche dans notre menu.",
        image: './assets/WCS-babyplace/notif.png'
      },
      {
        title: 'Noter les structures',
        description:
          'Un certain temps après le passage en crèche, une demande de note apparaît dans la section notifications. Après avoir rentré les notes dans les 5 différentes sections, on peut envoyer.',
        image: './assets/WCS-babyplace/note.png'
      },
      {
        title: 'Complétion',
        description: 'Une page rassemble le pourcentage de complétion des différents formulaires',
        image: './assets/WCS-babyplace/completion.png'
      },
      {
        title: 'Remplir des formulaires',
        description: 'On peut y mettre des informations et cocher des case.',
        image: './assets/WCS-babyplace/formulaire.png'
      },
      {
        title: 'Envoyer des fichiers et images',
        description:
          'Les fichiers et images sont envoyés vers google Cloud et peuvent ensuite être récupérés. Pour les lires ou les supprimer.',
        image: './assets/WCS-babyplace/formCloud.png'
      },
      {
        title: 'Gérer ses favoris',
        description:
          "Dans la partie menu, on peut voir quelles sont les structures que l'on a mis en favoris et les enlever de nos favoris.",
        image: './assets/WCS-babyplace/fav.png'
      },
      {
        title: 'Personnes de confiance',
        description:
          'Dans la partie menu, on peut ajouter et supprimer des personnes de confiance.',
        image: './assets/WCS-babyplace/confiance.png'
      },
      {
        title: 'Ne pas être aidé',
        description: 'Par contre on ne fait pas de service après-vente.',
        image: './assets/WCS-babyplace/aide.png'
      }
    ],

    video: '',
    lienSite: 'http://vps-d5babf40.vps.ovh.net:5006/',
    lienGithub: 'https://github.com/BaptisteCourtin/babyplace'
  },
  // -----
  {
    id: 4,
    titre: 'Test de React Native',
    description: 'Tester et comprendre React Native.',
    technosPrincipales: ['React Native', 'CSS'],

    tailleEquipe: 'moi seul',
    temps: '1 semaine',
    organisation: '',
    mainImage: './assets/MY-firstNative/MAIN.png',
    objectif:
      "Après une démonstration en cours de React Native, j'ai décidé d'approfondir pour voir les possibilités.",

    technos: ['React Native', 'CSS', 'Git / GitHub'],

    gfait: '',
    fonctions: [
      {
        title: 'Naviguer',
        description:
          'Choisir quelle espèce aller voir en détail ou tester différentes possibilités de navigation.',
        image: './assets/MY-firstNative/accueil.png'
      },
      {
        title: 'Afficher des images',
        description:
          'Afficher des images qui ont différentes tailles sans laisser de gros espaces entre chaque ou les aplatir.',
        image: './assets/MY-firstNative/images.png'
      }
    ],

    video: '',
    lienSite: '',
    lienGithub: 'https://github.com/BaptisteCourtin/firstNativeProject'
  },
  // -----
  {
    id: 5,
    titre: 'Like or pass digimon',
    description: 'Toujours pour tester React Native mais avec une api en plus.',
    technosPrincipales: ['React Native', 'CSS'],

    tailleEquipe: 'moi seul',
    temps: '1 semaine',
    organisation: '',
    mainImage: './assets/MY-digimon/MAIN.png',
    objectif: "Continuer à s'amuser avec React Native et voir comment ça fonctionne avec une api.",

    technos: ['React Native', 'CSS', 'Git / GitHub'],

    gfait: '',
    fonctions: [
      {
        title: 'Choisir',
        description: "Clique sur like si tu aimes, clique sur pass si tu n'aimes pas.",
        image: './assets/MY-digimon/likePass.png'
      },
      {
        title: 'Voir ses choix',
        description: 'Clique sur stats pour voir ceux que tu as déjà passé.',
        image: './assets/MY-digimon/stats.png'
      }
    ],

    video: '',
    lienSite: '',
    lienGithub: 'https://github.com/BaptisteCourtin/likeOrPass-digimon'
  },
  // -----
  {
    id: 6,
    titre: 'Site Vitrine des stages',
    description:
      "Création du site pour présenter les projets des stagiaires d'Aubay aux clients et aux futurs stagiaires.",
    technosPrincipales: ['Angular', 'JavaScript', 'SCSS', 'Java Springboot', 'SQL'],

    tailleEquipe:
      '3 stagiaires full-stack, 1 stagiaire designeuse, 1 Product Owner, 1 lead developpeur',
    temps: '6 mois',
    organisation: 'Aubay',
    mainImage: './assets/Aubay-SVS/MAIN.png',
    objectif:
      'Créer un site professionnel en front et en back tout en apprenant de nouveaux langages de programmation.',

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

    gfait:
      "J'ai participé à tout le développement front et back, à la création et la maintenance de la base de données, ainsi qu'à la création de tests unitaires. Le site devrait être en accessible fin septembre 2023.",
    fonctions: [
      {
        title: "Présenter l'entreprise Aubay",
        description:
          "Une petite présentation de l'entreprise est faite sur la page d'accueil. Avec ses valeurs et engagements.",
        image: './assets/Aubay-SVS/accueil.png'
      },
      {
        title: 'Filtrer',
        description:
          'Filtrer les projets selon leur thème et activité en cliquant sur les petits chips. Puis on clique dessus pour aller les voir plus en détail.',
        image: './assets/Aubay-SVS/filtres.png'
      },
      {
        title: 'Attente',
        description:
          "Pendant le chargement des éléments nécessaires, des barres d'attente tournent pour nous dire que ça arrive.",
        image: './assets/Aubay-SVS/charge.png'
      },
      {
        title: 'Dark mode',
        description:
          'Un bouton présent dans la barre de navigation sert à changer le thème de couleur. Quand on arrive sur le site, le thème est en light, puis on peut le changer en dark mode.',
        image: './assets/Aubay-SVS/dark.png'
      },
      {
        title: 'Contacter Aubay',
        description:
          'Un formulaire de contact est disponible avec plusieurs possibilités de motif. On y rentre son e-mail, un texte et on envoie.',
        image: './assets/Aubay-SVS/contact.png'
      },
      {
        title: 'Partager le projet',
        description:
          "En bas de la page de chaque projet, se trouve un bouton pour copier l'url dans le presse papier. Il suffit de faire un ctrl+V et c'est partagé !",
        image: './assets/Aubay-SVS/lien.png'
      },
      {
        title: 'Exporter en PDF',
        description:
          "Un autre bouton est présent pour exporter les projets en pdf. On y retrouve tout ce que l'on a sur la page projet. Le lien reste cliquable sur le PDF.",
        image: './assets/Aubay-SVS/pdf.png'
      },

      {
        title: 'La partie admin',
        description:
          "Nous pouvons y voir des projets non visibles par les visiteurs lambdas. Cette partie permet aussi d'administrer tout le site.",
        image: './assets/Aubay-SVS/admin.png'
      },
      {
        title: 'Administrer les thèmes et activités.',
        description:
          "Un petit formulaire est disponible pour ajouter ou modifier l'un de ces élements. On y entre les informations nécessaire et on enregistre.",
        image: './assets/Aubay-SVS/adminTheme.png'
      },
      {
        title: 'Administrer les projets',
        description:
          'Le formulaire étant assez grand, il est visuellement divisé en plusieurs parties. On y entre les informations dont une image qui sera convertie en base64, et on enregistre le tout.',
        image: './assets/Aubay-SVS/adminProjet.png'
      },
      {
        title: 'Supprimer',
        description:
          "Pour éviter tout miss-click, quand on veut supprimer un thème, une activité ou un projet, un dialogue apparait et nous demande de rentrer des informations pour être sûr que c'est ce que l'on veut.",
        image: './assets/Aubay-SVS/supp.png'
      },
      {
        title: "L'historique",
        description:
          'Les projets ont plusieurs versions. Il fallait donc pouvoir switcher de version en étant sur le projet ainsi que choisir quelle version serait montrée en premier et afficher seulement celle-ci lors de la recherche de projet.',
        image: './assets/Aubay-SVS/historique.png'
      },
      {
        title: '404 ?',
        description:
          "Dans le cas où l'url entré n'est pas bonne, une page 404 est là pour nous rediriger sur le droit chemin du site.",
        image: './assets/Aubay-SVS/404.png'
      }
    ],

    video: '',
    lienSite: '',
    lienGithub: ''
  },
  // -----
  {
    id: 7,
    titre: 'Portfolio',
    description: "C'est le site là, genre ... ici, enfait on est déjà dessus.",
    technosPrincipales: ['Vue', 'JavaScript', 'SCSS'],

    tailleEquipe: 'moi',
    temps: '3 semaines, mais il y aura des mise à jour',
    organisation: '',
    mainImage: './assets/Portfolio/MAIN.png',
    objectif:
      'Trouver un travail, mettre tout mes projets intéressants au même endroit pour les retrouver facilement',

    technos: ['Vue', 'JavaScript', 'SCSS', 'Git / GitHub'],

    video: '',
    lienSite: 'https://portfolio-baptiste-courtin.netlify.app/',
    lienGithub: ''
  }
  // -----
]
