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
    <h1>{{ myPrj.titre }}</h1>
    <section class="global">
      <div class="text">
        <p class="main-desc">{{ myPrj.description }}</p>
        <p><span>Taille de l'équipe :</span> {{ myPrj.tailleEquipe }}</p>
        <p><span>Temps :</span> {{ myPrj.temps }}</p>
        <p v-if="myPrj.organisation"><span>Organisation :</span> {{ myPrj.organisation }}</p>
        <p><span>Objectif :</span> {{ myPrj.objectif }}</p>
      </div>
      <img :src="'/' + myPrj.mainImage" alt="img-projet" loading="lazy" />
    </section>

    <span class="trait"></span>

    <ul>
      <li v-for="techno in myPrj.technos" :class="techno">{{ techno }}</li>
    </ul>

    <span class="trait"></span>

    <section class="gfe">
      <p v-if="myPrj.gfait" class="myJob">
        <span>Ce que j'ai fait et dont je vais parler par la suite :</span> {{ myPrj.gfait }}
      </p>
      <div v-for="func in myPrj.fonctions" class="full-container-func">
        <div class="container-func">
          <div class="func-text">
            <h4>{{ func.title }}</h4>
            <p>{{ func.description }}</p>
          </div>
          <img v-if="func.image" :src="'/' + func.image" alt="img-func" loading="lazy" />
        </div>
        <div>
          <span class="points">---</span>
        </div>
      </div>
    </section>

    <span class="trait"></span>

    <section class="liens">
      <p v-if="myPrj.lienSite">
        Le<a :href="myPrj.lienSite" target="_blank" class="ICI"> lien</a> vers le site en ligne
      </p>

      <p v-if="myPrj.lienGithub">
        Le
        <a :href="myPrj.lienGithub" target="_blank" class="ICI"> lien</a>
        vers le repo Github
      </p>
    </section>
  </div>
</template>
