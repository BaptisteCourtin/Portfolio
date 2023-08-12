<script setup>
import { RouterView } from 'vue-router'
</script>

<script>
import Navbar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  data() {
    return {
      isDarkTheme: 'dark-theme'
    }
  },
  components: {
    Navbar
  },
  methods: {
    toggle() {
      if (this.isDarkTheme === 'light-theme') {
        this.isDarkTheme = 'dark-theme'
      } else {
        this.isDarkTheme = 'light-theme'
      }
    }
  }
}
</script>

<template>
  <div class="global-wrapper" :class="isDarkTheme">
    <div class="wrapper-right-left">
      <RouterView class="global-pages" />
      <!-- les pages -->

      <Navbar :isDarkTheme="isDarkTheme" @toggle="toggle" />
      <!-- la navbar -->
    </div>
    <Footer class="global-footer"></Footer>
  </div>
</template>
