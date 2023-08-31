<script>
import ToggleDarkLight from './ToggleDarkLight.vue'
import ToggleLanguage from './ToggleLanguage.vue'

export default {
  props: ['isDarkTheme'],
  components: {
    ToggleDarkLight,
    ToggleLanguage
  },
  methods: {
    retourHaut() {
      this.$emit('close-navbar')
      window.scrollTo(0, 0)
    }
  }
}
</script>

<template>
  <div class="global-navbar">
    <nav>
      <ul>
        <li style="--i: 6">
          <RouterLink to="/" @click="retourHaut()">{{ $t('navbar.accueil') }}</RouterLink>
        </li>
        <li style="--i: 5">
          <RouterLink to="/parcours" @click="retourHaut()">{{ $t('navbar.parcours') }}</RouterLink>
        </li>
        <li style="--i: 4">
          <RouterLink to="/themes" @click="retourHaut()">{{ $t('navbar.projets') }}</RouterLink>
        </li>
        <li style="--i: 3">
          <RouterLink to="/blog" @click="retourHaut()">{{ $t('navbar.blog') }}</RouterLink>
        </li>
        <!-- style="position z-index" -->
      </ul>
    </nav>
    <ToggleDarkLight :isDarkTheme="isDarkTheme" @toggleTheme="$emit('toggleTheme')" />

    <ToggleLanguage />
  </div>
</template>
