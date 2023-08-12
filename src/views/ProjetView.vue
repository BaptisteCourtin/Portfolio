<script>
import { PROJETS } from '../assets/projets'

export default {
  data() {
    return {
      projectId: null,
      myPrj: null // Nouvelle propriété pour stocker les détails du projet
    }
  },
  created() {
    this.projectId = this.$route.params.id
    this.fetchProjectDetails() // Appel initial pour charger les détails du projet
  },
  methods: {
    fetchProjectDetails() {
      this.myPrj = PROJETS[this.projectId - 1]
      // Tu peux maintenant accéder à this.myPrj dans le template
    }
  }
}
</script>

<template>
  <div class="global-projet" v-if="myPrj">
    <section>
      <div>
        <h1>{{ myPrj.titre }}</h1>
        <p>{{ myPrj.description }}</p>
        <p>taille de léquipe : {{ myPrj.tailleEquipe }}</p>
        <p>temps : {{ myPrj.temps }}</p>
        <p v-if="myPrj.organisation">organisation : {{ myPrj.organisation }}</p>
        <p>objectif : {{ myPrj.objectif }}</p>
      </div>
      <img :src="'/' + myPrj.mainImage" alt="img-projet" />
    </section>

    <ul>
      <li v-for="techno in myPrj.technos">{{ techno }}</li>
    </ul>

    <section>
      <p v-if="myPrj.gfait">
        ce que j'ai fait (et dont je vais parler par la suite) : {{ myPrj.gfait }}
      </p>
      <div v-for="func in myPrj.fonctions">
        <h4>{{ func.title }}</h4>
        <p>{{ func.description }}</p>
        <img :src="'/' + func.image" alt="img-func" />
      </div>
    </section>

    <section>
      <a v-if="myPrj.lienSite" href="{{myPrj.lienSite}}" target="_blank"
        >Le lien vers le site en ligne</a
      >
      <a v-if="myPrj.lienGithub" href="{{myPrj.lienGithub}}" target="_blank"
        >Le lien vers le repo Github</a
      >
    </section>
  </div>
</template>
