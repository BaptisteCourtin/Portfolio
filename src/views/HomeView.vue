<script>
import Technos from '../components/Technos.vue'

export default {
  components: {
    Technos
  }
}

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowRight)
</script>

<template>
  <div class="global-home">
    <h1>Bonjour</h1>

    <div class="moi">
      <div class="text">
        <p>
          Moi c'est <span class="name">Baptiste COURTIN</span>,
          <span class="dev">développeur web full-stack</span>
        </p>
        <p>c'est moi là <font-awesome-icon icon="fa-solid fa-arrow-right" /></p>
      </div>
      <img src="../assets/moi/photo profil.jpg" alt="moi en photo" />
    </div>

    <div class="quete">
      <p>
      Actuellement en quête d'un <h4>CDI</h4> à partir du 1er septembre 2024, ou d'une <h4>alternance (contrat de professionalisation)</h4> de
      développeur web (full stack) à partir du 18 septembre 2023, dans la région Nantaise. </p>
      <a
        href="https://drive.google.com/file/d/13VghsOAlfdumM_xno9FbPUwlhvSpIX-z/view?usp=sharing"
        target="_blank"
        class="ICI"
        >Là
      </a>
      c'est mon CV
    </div>

    <Technos />

  </div>
</template>
