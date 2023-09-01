<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18next.changeLanguage(lang)
    }
  }
}
</script>

<template>
  <div class="toggle-language">
    <div class="container-stars">
      <div class="stars"></div>
    </div>
    <button @click="changeLanguage('fr')">FR</button>
    <button @click="changeLanguage('en')">EN</button>
  </div>
</template>
