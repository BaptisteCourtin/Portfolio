<script>
import Technos from '../components/Technos.vue'

export default {
  components: {
    Technos
  }
}

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'


import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'


import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowTrendDown } from '@fortawesome/free-solid-svg-icons'


import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'




library.add(faArrowRight, faArrowLeftLong, faUpLong, faArrowTurnDown, faArrowRotateRight, faArrowTrendUp, faArrowTrendDown, faLocationArrow, faAnglesDown)
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

      <div class="box-tourne">
        <img src="../assets/moi/photoProfil1.jpg" alt="moi en photo" loading="lazy"/>
      </div>
    </div>

    <div class="quete">
      <p>
      Actuellement en quête d'un <h4>CDI</h4> à partir du 1er septembre 2023, ou d'une <h4>alternance (contrat d'apprentissage)</h4> de
      développeur web (full stack) à partir du 18 septembre 2023, dans la région Nantaise. </p>


      <div class="monCV">

        <font-awesome-icon class="fa-solid" icon="fa-arrow-right" />
        <font-awesome-icon class="fa-solid" icon="fa-angles-down" />
        <font-awesome-icon class="fa-solid" icon="fa-arrow-turn-down" />
        <font-awesome-icon class="fa-solid" icon="fa-arrow-trend-down" />
        <p>
          <a
          href="https://drive.google.com/file/d/1RotGczuEcBPaLRzidQrq4pCItXJc6Tub/view?usp=sharing"
          target="_blank"
          > <span class="ICI">Là</span> c'est mon CV
        </a>
      </p>
        <font-awesome-icon class="fa-solid" icon="fa-arrow-rotate-right" />
        <font-awesome-icon class="fa-solid" icon="fa-arrow-trend-up" />
        <span class="fa-solid with-bg">➜</span>
        <font-awesome-icon class="fa-solid" icon="fa-location-arrow" />
        <font-awesome-icon class="fa-solid" icon="fa-up-long" />

      </div>


    </div>

    <span class="trait"></span>

    <Technos />

  </div>
</template>
