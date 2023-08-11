<script>
import Technos from '../components/Technos.vue'

export default {
  components: {
    Technos
  }
}
</script>

<template>
  <div class="global-parcours">
    <div>
      <h1>Mon parcours</h1>
      <p>(le dernier en haut)</p>
    </div>

    <div class="container-xp">
      <h3>Stage chez Aubay</h3>
      <p class="date">février 2023 - août 2023</p>
      <ul>
        <li class="angular">Angular</li>
        <li class="ts">TypeScript</li>
        <li class="scss">SCSS</li>
        <li class="springboot">Java Springboot</li>
        <li class="sql">SQl</li>
        <li class="git">Git / Gitlab</li>
        <li class="pgadmin">PgAdmin</li>
        <li class="jenkins">Jenkins</li>
        <li class="sonar">SonarQube</li>
        <li class="jira">Jira</li>
        <li class="figma">Figma</li>
        <li class="vscode">VSCode</li>
        <li class="eclipse">Eclipse</li>
      </ul>
      <p>
        Durant ce stage j'ai contribué à créer le site vitrine des stages. Le but est de pouvoir
        montrer les projets des stagiaires aux clients ainsi qu'aux futurs stagiaires. Le site sera
        normalement en ligne fin septembre.
      </p>
    </div>

    <div>
      <h3>Formation à la Wild Code School</h3>
    </div>

    <div>
      <h3>La fac</h3>
    </div>

    <div>
      <h3>Mes certifications</h3>
    </div>

    <div>
      <p>
        Je remet ici les technos et outils que je connais, c'est pareil quand dans la partie accueil
        mais je les remet quand même
      </p>
      <Technos />
    </div>
  </div>
</template>
