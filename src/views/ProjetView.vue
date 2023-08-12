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
    <h1>Ce projet {{ projectId }}</h1>
    <p>{{ myPrj.titre }}</p>
  </div>
</template>
