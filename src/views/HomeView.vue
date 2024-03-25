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

library.add(
  faArrowRight,
  faArrowLeftLong,
  faUpLong,
  faArrowTurnDown,
  faArrowRotateRight,
  faArrowTrendUp,
  faArrowTrendDown,
  faLocationArrow,
  faAnglesDown
)
</script>

<template>
  <div class="global-home">
    <h1>{{ $t('accueil.bonjour') }}</h1>

    <div class="moi">
      <div class="text">
        <p>
          {{ $t('accueil.moi') }} <span class="name">Baptiste COURTIN</span>,
          <span class="dev">{{ $t('accueil.metier') }}</span>
        </p>
        <p>
          {{ $t('accueil.photo') }}
          <font-awesome-icon
            icon="fa-solid fa-arrow-right"
            alt=""
            role="presentation"
            aria-hidden="true"
          />
        </p>
      </div>

      <div class="box-tourne">
        <img src="../assets/moi/photoProfil1.jpg" alt="moi en photo" loading="lazy" />
      </div>
    </div>

    <div class="quete">
      <p>
        {{ $t('accueil.quete1') }}
      </p>

      <div class="monCV">
        <font-awesome-icon
          class="fa-solid"
          icon="fa-arrow-right"
          alt=""
          role="presentation"
          aria-hidden="true"
        />
        <font-awesome-icon
          class="fa-solid"
          icon="fa-angles-down"
          alt=""
          role="presentation"
          aria-hidden="true"
        />
        <font-awesome-icon
          class="fa-solid"
          icon="fa-arrow-turn-down"
          alt=""
          role="presentation"
          aria-hidden="true"
        />
        <font-awesome-icon
          class="fa-solid"
          icon="fa-arrow-trend-down"
          alt=""
          role="presentation"
          aria-hidden="true"
        />
        <p class="entoureCV">
          <a
            href="https://drive.google.com/file/d/1gurHMCeUayjvGIYSBpYY24YAiUiw6At3/view?usp=drive_link"
            target="_blank"
            aria-label="lien vers mon CV"
          >
            <span class="ICI">{{ $t('accueil.la') }}</span> {{ $t('accueil.cv') }}
          </a>
        </p>
        <font-awesome-icon
          class="fa-solid"
          icon="fa-arrow-rotate-right"
          alt=""
          role="presentation"
          aria-hidden="true"
        />
        <font-awesome-icon
          class="fa-solid"
          icon="fa-arrow-trend-up"
          alt=""
          role="presentation"
          aria-hidden="true"
        />
        <span class="fa-solid with-bg" alt="" role="presentation" aria-hidden="true">➜</span>
        <font-awesome-icon
          class="fa-solid"
          icon="fa-location-arrow"
          alt=""
          role="presentation"
          aria-hidden="true"
        />
        <font-awesome-icon
          class="fa-solid"
          icon="fa-up-long"
          alt=""
          role="presentation"
          aria-hidden="true"
        />
      </div>
    </div>

    <span class="trait"></span>

    <Technos />
  </div>
</template>
