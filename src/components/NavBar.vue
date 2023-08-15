<script>
import ToggleDarkLight from './ToggleDarkLight.vue'

export default {
  props: ['isDarkTheme'],
  components: {
    ToggleDarkLight
  },
  methods: {
    retourHaut() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<template>
  <div class="global-navbar">
    <nav>
      <ul>
        <li style="--i: 6"><RouterLink to="/" @click="retourHaut()">Accueil</RouterLink></li>
        <li style="--i: 5">
          <RouterLink to="/themes" @click="retourHaut()">Mes Projets</RouterLink>
        </li>
        <li style="--i: 4">
          <RouterLink to="/parcours" @click="retourHaut()">Mon Parcours</RouterLink>
        </li>
        <li style="--i: 3"><RouterLink to="/blog" @click="retourHaut()">Mon Blog</RouterLink></li>
        <!-- style="position z-index" -->
      </ul>
    </nav>
    <ToggleDarkLight :isDarkTheme="isDarkTheme" @toggle="$emit('toggle')" />
  </div>
</template>
