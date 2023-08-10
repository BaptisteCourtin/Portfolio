<script>
import CardProjet from '../components/CardProjet.vue'

export default {
  components: {
    CardProjet
  }
}
</script>

<template>
  <div class="global-theme">
    <h1>La page thème - avec des cards de projets</h1>
    <section class="wrapper-card-project">
      <CardProjet />
      <CardProjet />
      <CardProjet />
      <CardProjet />
      <CardProjet />
      <CardProjet />
    </section>
  </div>
</template>
