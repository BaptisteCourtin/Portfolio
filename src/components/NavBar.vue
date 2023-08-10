<script>
import ToggleDarkLight from './ToggleDarkLight.vue'

export default {
  props: ['isDarkTheme'],
  components: {
    ToggleDarkLight
  }
}
</script>

<template>
  <div class="global-navbar">
    <nav>
      <ul>
        <li style="--i: 6"><RouterLink to="/">Accueil</RouterLink></li>
        <li style="--i: 5"><RouterLink to="/themes">Mes Projets</RouterLink></li>
        <li style="--i: 4"><RouterLink to="/parcours">Mon Parcours</RouterLink></li>
        <li style="--i: 3"><RouterLink to="/blog">Mon Blog</RouterLink></li>
        <!-- style="position z-index" -->
      </ul>
    </nav>
    <ToggleDarkLight :isDarkTheme="isDarkTheme" @toggle="$emit('toggle')" />
  </div>
</template>
