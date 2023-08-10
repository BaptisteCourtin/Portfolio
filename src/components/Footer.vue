<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin, faGithub)
</script>

<template>
  <div class="global-footer">
    <h1>Footer</h1>
    <section class="mesLiens">
      <a href="https://www.linkedin.com/in/baptistecourtin/" target="_blank"
        ><font-awesome-icon icon="fa-brands fa-linkedin"
      /></a>
      <a href="https://github.com/BaptisteCourtin" target="_blank"
        ><font-awesome-icon icon="fa-brands fa-github"
      /></a>
    </section>
    <section class="MyTag">
      <p>2023</p>
      <p>© Baptiste Courtin</p>
    </section>
    <section class="contact">
      <a href="mailto:bap2910@gmail.com">Contactez-moi !</a>
    </section>
  </div>
</template>
