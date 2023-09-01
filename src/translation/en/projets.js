export const PROJETSEN = [
  {
    id: 1,
    titre: 'Showcase site - spa',
    description: 'First project completed during my training at Wild Code School.',
    technosPrincipales: ['HTML', 'CSS', 'JS-DOM'],

    tailleEquipe: '4',
    temps: '2 weeks',
    organisation: '',
    mainImage: './assets/WCS-spa/MAIN.png',
    objectif: 'Using our knowledge of html, css, javascript dom and git in a group project.',

    technos: ['HTML', 'CSS', 'JS-DOM', 'Git / GitHub', 'Figma'],

    gfait: 'I took care of the home page and the navbar.',
    fonctions: [
      {
        title: 'Redirection',
        description:
          'You are redirected to the other pages by clicking on the images on the home page or in the navbar.',
        image: './assets/WCS-spa/menu.png'
      },
      {
        title: 'Responsif',
        description:
          'The site had to be usable on a telephone. Now it is. In the phone version, the navbar, which was at the top of the page, has been moved to the burger menu. When you click on the burger menu, the rest of the page takes on a darker colour.',
        image: './assets/WCS-spa/responsive.png'
      },
      {
        title: 'Plouf',
        description:
          "Since I'd finished my game, I had some fun with the css animations. So in the computer version, when you click on the icon user, it dives and makes a splash. And there's a splashing noise. It started out as a joke but I did it, and it's funny (at least a little), at least it makes me laugh.",
        image: './assets/WCS-spa/plouf.png'
      },
      {
        title: 'Shopping cart',
        description:
          "On the product page, when you click on add to basket, it adds you to the basket. You can click on the basket icon to see it. But you can't remove a product. You click and you pay!",
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
      'Second project completed during my training at Wild Code School. First project with React.',
    technosPrincipales: ['React', 'JavaScript', 'CSS'],

    tailleEquipe: '5',
    temps: '1 month and a half',
    organisation: '',
    mainImage: './assets/WCS-blindtest/MAIN.png',
    objectif:
      'Starting to learn React, agile methods, calls to an API and putting our knowledge of JavaScript into practice',

    technos: ['React', 'JavaScript', 'CSS', 'Git / GitHub', 'Figma', 'Jira'],

    gfait:
      'I took care of the home page and the navbar, and then helped implement the functionality of the other pages.',
    fonctions: [
      {
        title: 'Redirection',
        description:
          'You are redirected to the other pages by clicking on the buttons on the home page or in the navbar. When the navbar is open, the rest of the page takes on a darker colour.',
        image: './assets/WCS-blindtest/menu.png'
      },
      {
        title: 'Research',
        description:
          'You can search for titles using several filters. The first is by decade, the second by genre. A third filter allows you to search by title or artist name.',
        image: './assets/WCS-blindtest/recherche.png'
      },
      {
        title: 'Playing DJ',
        description:
          "In the search page, we can launch the music. If you want, you can play several at once (it's not a bug, it's a feature)."
      },
      {
        title: 'Filters for blindtesting',
        description:
          'You can choose the type of music and the decade. Alternatively, team members have created their own blindtests for you to play.',
        image: './assets/WCS-blindtest/choix.png'
      },
      {
        title: 'Test your knowledge',
        description:
          'Play the game! With 4 randomly arranged suggestions and a timer. If our answer is wrong or if the time limit is exceeded, the correct answer appears. Our score is displayed at the end of the game.',
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
      'Third and final project completed during my training at Wild Code School. Creation of a full-stack website.',
    technosPrincipales: ['React', 'JavaScript', 'SCSS', 'Express', 'SQL'],

    tailleEquipe: '4',
    temps: '2 months and a half',
    organisation: '',
    mainImage: './assets/WCS-babyplace/MAIN.png',
    objectif:
      "Create the site's database, create the entire backend and frontend. In short, use all the knowledge you've learnt so far and acquire and use new knowledge.",

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
      "I took care of the whole 'application' part, the aim being to enable parents to find and book a place for their children.",
    fonctions: [
      {
        title: 'Registration and authentication',
        description:
          'You can create an account or connect to an existing account to fill in the necessary forms, reserve a place and manage your bookings.',
        image: './assets/WCS-babyplace/authent.png'
      },
      {
        title: 'Searching with cards',
        description:
          'You can search for a structure using filters and a map layout. The filters are additive. They are based on what the facility offers in terms of activities and services, but also and above all on opening days and times.',
        image: './assets/WCS-babyplace/recherche.png'
      },
      {
        title: 'But also with a map',
        description:
          'The layout of structures on a map is available. In addition, you can calculate the distance separating you from the location of the structure. Enter its address in the search bar or use the button to locate it automatically.',
        image: './assets/WCS-babyplace/map.png'
      },
      {
        title: 'Reserve a place',
        description:
          'We can make a booking request on a recurring or one-off basis. Once you have entered the times you would like to keep the child, we can ask for certain supplements, find out the total price to be paid and finally send the booking request.',
        image: './assets/WCS-babyplace/demande.png'
      },
      {
        title: 'Notifications',
        description:
          "When a structure has accepted or refused our request, a notification appears. When the request is accepted, you still have to pay (we don't really pay, it's still a non-professional project after all) to validate the booking and have it displayed in our menu.",
        image: './assets/WCS-babyplace/notif.png'
      },
      {
        title: 'Note the structures',
        description:
          'Some time after moving to the crèche, a note request will appear in the notifications section. Once you have entered your notes in the 5 different sections, you can send them.',
        image: './assets/WCS-babyplace/note.png'
      },
      {
        title: 'Completion',
        description: 'A page showing the percentage of completed forms.',
        image: './assets/WCS-babyplace/completion.png'
      },
      {
        title: 'Filling in forms',
        description: 'You can enter information and tick boxes.',
        image: './assets/WCS-babyplace/formulaire.png'
      },
      {
        title: 'Sending files and images',
        description:
          'Files and images are sent to Google Cloud and can then be retrieved. To read or delete them.',
        image: './assets/WCS-babyplace/formCloud.png'
      },
      {
        title: 'Managing your favourites',
        description:
          'In the menu section, you can see which structures you have bookmarked and remove them from your favourites.',
        image: './assets/WCS-babyplace/fav.png'
      },
      {
        title: 'People you can trust',
        description: 'In the menu section, you can add and remove trusted contacts.',
        image: './assets/WCS-babyplace/confiance.png'
      },
      {
        title: 'Not being helped',
        description: 'However, we do not provide after-sales service.',
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
    titre: 'Test of React Native',
    description: 'Testing and understanding React Native.',
    technosPrincipales: ['React Native', 'CSS'],

    tailleEquipe: 'me alone',
    temps: '1 week',
    organisation: '',
    mainImage: './assets/MY-firstNative/MAIN.png',
    objectif:
      'After a demonstration of React Native in class, I decided to take a closer look at the possibilities.',

    technos: ['React Native', 'CSS', 'Git / GitHub'],

    gfait: '',
    fonctions: [
      {
        title: 'Navigate',
        description:
          'Choose which species to visit in detail or try out different navigation options.',
        image: './assets/MY-firstNative/accueil.png'
      },
      {
        title: 'Display images',
        description:
          'Display images of different sizes without leaving large gaps between them or flattening them.',
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
    description: 'Still testing React Native, but with an extra API.',
    technosPrincipales: ['React Native', 'CSS'],

    tailleEquipe: 'me alone',
    temps: '1 week',
    organisation: '',
    mainImage: './assets/MY-digimon/MAIN.png',
    objectif: 'Continue to have fun with React Native and see how it works with an api.',

    technos: ['React Native', 'CSS', 'Git / GitHub'],

    gfait: '',
    fonctions: [
      {
        title: 'Choose',
        description: "Click like if you like it, click pass if you don't.",
        image: './assets/MY-digimon/likePass.png'
      },
      {
        title: 'See your choices',
        description: "Click on stats to see the ones you've already passed.",
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
    titre: 'Internships showcase site',
    description:
      "Creation of a website to present Aubay trainees' projects to clients and future trainees.",
    technosPrincipales: ['Angular', 'JavaScript', 'SCSS', 'Java Springboot', 'SQL'],

    tailleEquipe: '3 full-stack trainees, 1 design trainee, 1 Product Owner, 1 lead developer',
    temps: '6 mois',
    organisation: 'Aubay',
    mainImage: './assets/Aubay-SVS/MAIN.png',
    objectif:
      'Create a professional front- and back-end website while learning new programming languages',

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
      'I was involved in all the front and back-end development, the creation and maintenance of the database, and the creation of unit tests. The site should be available by the end of September 2023.',
    fonctions: [
      {
        title: 'Introducing Aubay',
        description:
          'A short presentation of the company is given on the home page. With its values and commitments.',
        image: './assets/Aubay-SVS/accueil.png'
      },
      {
        title: 'Filter',
        description:
          'Filter projects by theme and activity by clicking on the small chips. Then click on them to see them in more detail.',
        image: './assets/Aubay-SVS/filtres.png'
      },
      {
        title: 'Waiting',
        description:
          'While the necessary elements are being loaded, waiting bars rotate to let us know that this is happening.',
        image: './assets/Aubay-SVS/charge.png'
      },
      {
        title: 'Dark mode',
        description:
          'A button in the navigation bar is used to change the theme colour. When you arrive on the site, the theme is in light mode, then you can change it to dark mode.',
        image: './assets/Aubay-SVS/dark.png'
      },
      {
        title: 'Contact Aubay',
        description:
          'A contact form is available with several design options. Enter your e-mail address and a text and send.',
        image: './assets/Aubay-SVS/contact.png'
      },
      {
        title: 'Sharing the project',
        description:
          "At the bottom of each project page, there's a button to copy the url to the clipboard. Just press ctrl+V and it's shared!",
        image: './assets/Aubay-SVS/lien.png'
      },
      {
        title: 'Export as PDF',
        description:
          'There is also a button for exporting projects as pdf files. It contains everything you have on the project page. The link remains clickable on the PDF.',
        image: './assets/Aubay-SVS/pdf.png'
      },

      {
        title: 'The admin area',
        description:
          'Here we can see projects that are not visible to ordinary visitors. This section is also used to manage the entire site.',
        image: './assets/Aubay-SVS/admin.png'
      },
      {
        title: 'Manage themes and activities.',
        description:
          'A small form is available for adding or modifying any of these elements. Enter the necessary information and save.',
        image: './assets/Aubay-SVS/adminTheme.png'
      },
      {
        title: 'Administering projects',
        description:
          'As the form is quite large, it is visually divided into several parts. Information is entered, including an image that will be converted to base64, and the whole thing is saved.',
        image: './assets/Aubay-SVS/adminProjet.png'
      },
      {
        title: 'Delete',
        description:
          "To avoid miss-clicks, when you want to delete a theme, activity or project, a dialog box appears asking you to enter some information to make sure it's what you want.",
        image: './assets/Aubay-SVS/supp.png'
      },
      {
        title: 'History',
        description:
          'Projects have several versions. It was therefore necessary to be able to switch versions while on the project and to choose which version would be shown first and display only that version when searching for a project.',
        image: './assets/Aubay-SVS/historique.png'
      },
      {
        title: '404 ?',
        description:
          'If the URL entered is not correct, a 404 page will redirect you to the right site.',
        image: './assets/Aubay-SVS/404.png'
      }
    ],

    video: '',
    lienSite: '',
    lienGithub: ''
  }
  // -----
]
