<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faLinkedin, faGithub, faEnvelope)
</script>

<template>
  <div class="global-footer">
    <section class="mesLiens">
      <a href="https://www.linkedin.com/in/baptistecourtin/" target="_blank"
        ><font-awesome-icon icon="fa-brands fa-linkedin"
      /></a>
      <a href="https://github.com/BaptisteCourtin" target="_blank"
        ><font-awesome-icon icon="fa-brands fa-github"
      /></a>
      <div class="myMail">
        <a href="mailto:bap2910@gmail.com"
          ><font-awesome-icon icon="fa-solid fa-envelope" /> Contactez-moi !
        </a>
        <span>bap2910@gmail.com</span>
      </div>
    </section>
    <p class="myTag">2023 © Baptiste Courtin</p>
  </div>
</template>
