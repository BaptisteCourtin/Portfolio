<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faLinkedin, faGithub, faEnvelope)
</script>

<template>
  <div class="global-footer">
    <section class="mesLiens">
      <a
        href="https://www.linkedin.com/in/baptistecourtin/"
        target="_blank"
        aria-label="lien vers ma page LinkedIn"
        ><font-awesome-icon icon="fa-brands fa-linkedin"
      /></a>
      <a
        href="https://github.com/BaptisteCourtin"
        target="_blank"
        aria-label="lien vers ma page GitHub"
        ><font-awesome-icon icon="fa-brands fa-github"
      /></a>
      <div class="myMail">
        <a href="mailto:bap2910@gmail.com" target="_blank" aria-label="lien pour m'envoyer un mail"
          ><font-awesome-icon icon="fa-solid fa-envelope" /> {{ $t('footer.contact') }}
        </a>
        <span>bap2910@gmail.com</span>
      </div>
    </section>
    <p class="myTag">2023 © Baptiste Courtin</p>
  </div>
</template>
