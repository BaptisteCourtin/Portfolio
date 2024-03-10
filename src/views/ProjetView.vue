<script>
import { PROJETSFR } from '../translation/fr/projets'
import { PROJETSEN } from '../translation/en/projets'

export default {
  data() {
    return {
      projectId: null,
      myPrj: null,
      currentLanguage: this.$i18next.language // Stocke la langue actuelle
    }
  },
  watch: {
    '$i18next.language': 'languageChanged' // Surveille les changements de langue
  },
  created() {
    this.projectId = this.$route.params.id
    this.fetchProjectDetails()
  },
  methods: {
    fetchProjectDetails() {
      if (this.currentLanguage == 'en') {
        this.myPrj = PROJETSEN[this.projectId - 1]
      } else {
        this.myPrj = PROJETSFR[this.projectId - 1]
      }
    },
    languageChanged(newLanguage) {
      // Met à jour la langue actuelle et recharge les détails du projet
      this.currentLanguage = newLanguage
      this.fetchProjectDetails()
    }
  }
}
</script>

<template>
  <div class="global-projet" v-if="myPrj">
    <h1>{{ myPrj.titre }}</h1>
    <section class="global">
      <div class="text">
        <p class="main-desc">{{ myPrj.description }}</p>
        <p>
          <span>{{ $t('projet.taille') }} :</span> {{ myPrj.tailleEquipe }}
        </p>
        <p>
          <span>{{ $t('projet.temps') }} :</span> {{ myPrj.temps }}
        </p>
        <p v-if="myPrj.organisation">
          <span>{{ $t('projet.entreprise') }} :</span> {{ myPrj.organisation }}
        </p>
        <p>
          <span>{{ $t('projet.objectif') }} :</span> {{ myPrj.objectif }}
        </p>
      </div>
      <img :src="'/' + myPrj.mainImage" alt="img-projet" loading="lazy" />
    </section>

    <span class="trait"></span>

    <ul>
      <li v-for="techno in myPrj.technos" :class="techno">{{ techno }}</li>
    </ul>

    <span class="trait" v-if="myPrj.fonctions"></span>

    <section class="gfe" v-if="myPrj.gfait || myPrj.fonctions">
      <p v-if="myPrj.gfait" class="myJob">
        <span>{{ $t('projet.gfait') }} :</span> {{ myPrj.gfait }}
      </p>
      <div v-for="func in myPrj.fonctions" class="full-container-func">
        <div class="container-func">
          <div class="func-text">
            <h3>{{ func.title }}</h3>
            <p>{{ func.description }}</p>
          </div>
          <img v-if="func.image" :src="'/' + func.image" alt="img-func" loading="lazy" />
        </div>
        <div>
          <span class="points">---</span>
        </div>
      </div>
    </section>

    <span class="trait" v-if="myPrj.lienSite || myPrj.lienGithub"></span>

    <section class="liens">
      <p v-if="myPrj.lienSite">
        {{ $t('projet.le')
        }}<a :href="myPrj.lienSite" target="_blank" class="ICI"> {{ $t('projet.lien') }}</a>
        {{ $t('projet.versEnLigne') }}
      </p>

      <p v-if="myPrj.lienGithub">
        {{ $t('projet.le') }}
        <a :href="myPrj.lienGithub" target="_blank" class="ICI"> {{ $t('projet.lien') }}</a>
        {{ $t('projet.versGithub') }}
      </p>
    </section>
  </div>
</template>
