<script>
export default {
  props: ['isDarkTheme']
}

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
library.add(faSun, faMoon)
</script>

<template>
  <div class="toggle-mode" :class="isDarkTheme">
    <input
      type="checkbox"
      id="toggle"
      :checked="isDarkTheme === 'dark-theme' ? 'checked' : false"
      @change="$emit('toggle')"
    />
    <label class="toggle" for="toggle">
      <font-awesome-icon icon="fa-sun" class="sun icon" />
      <font-awesome-icon icon="fa-moon" class="moon icon" />
      <span class="ball"></span>
    </label>
  </div>
</template>
