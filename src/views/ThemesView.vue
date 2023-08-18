<script>
import { PROJETS } from '../assets/projets'
import CardProjet from '../components/CardProjet.vue'

export default {
  components: {
    CardProjet
  },
  data() {
    return {
      PROJETS: PROJETS
    }
  }
}
</script>

<template>
  <div class="global-theme">
    <h1>Mes Projets</h1>

    <section class="wrapper-card-project">
      <CardProjet v-for="prj in PROJETS" :key="prj.id" :prj="prj" />
    </section>
  </div>
</template>
