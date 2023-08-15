<script setup>
import { RouterView } from 'vue-router'
</script>

<script>
import Navbar from './components/NavBar.vue'
import Burger from './components/Burger.vue'
import Footer from './components/Footer.vue'

export default {
  data() {
    return {
      isDarkTheme: 'dark-theme',
      opened: false
    }
  },
  components: {
    Navbar,
    Burger
  },
  methods: {
    toggle() {
      if (this.isDarkTheme === 'light-theme') {
        this.isDarkTheme = 'dark-theme'
      } else {
        this.isDarkTheme = 'light-theme'
      }
    },
    toggleNavbar() {
      this.opened = !this.opened
    }
  }
}
</script>

<template>
  <div class="global-wrapper" :class="isDarkTheme">
    <div class="wrapper-right-left" :class="opened ? 'open' : 'false'">
      <!-- les pages -->
      <RouterView class="global-pages" />

      <!-- navbar en 3D-->
      <Navbar
        :isDarkTheme="isDarkTheme"
        @toggle="toggle()"
        class="bigNavbar"
        :class="opened ? 'open' : 'false'"
      />

      <!-- menu burger -->
      <Burger
        :opened="opened"
        class="burgerNavbar"
        :class="opened ? 'open' : 'false'"
        @click="toggleNavbar()"
      />
    </div>
    <Footer class="global-footer"></Footer>
  </div>
</template>
