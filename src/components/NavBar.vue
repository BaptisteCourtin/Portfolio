<script>
export default {
  props: ['isDarkTheme']
}
</script>

<template>
  <div class="global-navbar">
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/themes">Mes Projets</RouterLink>
      <RouterLink to="/parcours">Mon Parcours</RouterLink>
      <!-- <RouterLink to="/blog">Mon Blog</RouterLink> -->

      <div class="toggle-mode" :class="isDarkTheme">
        <input
          type="checkbox"
          id="toggle"
          :checked="isDarkTheme === 'dark-theme' ? 'checked' : false"
          @change="$emit('toggle')"
        />
        <label class="toggle" for="toggle">
          <font-awesome-icon icon="fa-solid fa-sun" class="sun icon" />
          <font-awesome-icon icon="fa-solid fa-moon" class="moon icon" />
          <span class="ball"></span>
        </label>
      </div>
    </nav>
  </div>
</template>
