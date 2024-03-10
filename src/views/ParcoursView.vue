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
      <h1>{{ $t('parcours.titre') }}</h1>
      <p>{{ $t('parcours.haut') }}</p>
    </div>

    <div>
      <h2>{{ $t('parcours.AlternanceTitre') }}</h2>
      <div class="container-xp">
        <p class="date">{{ $t('parcours.AlternanceDate') }}</p>
        <ul>
          <li class="PHP">PHP</li>
          <li class="Laravel">Laravel</li>
          <li class="Java">Java</li>
          <li class="JSF">JSF</li>
          <li class="Primefaces">Primefaces</li>

          <li class="Git">GitTortoise / GitLab</li>
          <li class="SQL">SQL</li>
          <li class="HeidiSQL">HeidiSQL</li>

          <li class="Jira">Jira</li>
          <li class="Mantis">Mantis</li>
          <li class="Talend">Talend</li>
          <li class="VSCode">VSCode</li>
          <li class="Eclipse">Eclipse</li>
        </ul>
        <ul>
          <li class="TypeScript">TypeScript</li>
          <li class="React">React</li>
          <li class="React">React Native</li>
          <li class="NodeJS">Node.js</li>
          <li class="Express">Express</li>
          <li class="GraphQL">GraphQL</li>
          <li class="TypeGraphQL">TypeGraphQL</li>
          <li class="TypeORM">TypeORM</li>

          <li class="Git">Git / GitHub</li>
          <li class="SQL">SQL</li>

          <li class="Docker">Docker</li>
          <li class="VSCode">VSCode</li>
        </ul>
        <p>
          {{ $t('parcours.AlternanceDesc1') }}
          <br />
          <br />
          {{ $t('parcours.AlternanceDesc2') }}
          <br />
          <br />
          {{ $t('parcours.AlternanceDesc3') }}
          <br />
          <br />
          {{ $t('parcours.AlternanceDesc4') }}
        </p>
      </div>
    </div>

    <div>
      <h2>{{ $t('parcours.AubayTitre') }}</h2>
      <div class="container-xp">
        <p class="date">{{ $t('parcours.AubayDate') }}</p>
        <ul>
          <li class="Angular">Angular</li>
          <li class="TypeScript">TypeScript</li>
          <li class="SCSS">SCSS</li>
          <li class="Springboot">Java Springboot</li>
          <li class="SQL">SQL</li>

          <li class="Git">Git / GitLab</li>
          <li class="PgAdmin">PgAdmin</li>
          <li class="Jenkins">Jenkins</li>
          <li class="SonarQube">SonarQube</li>

          <li class="Jira">Jira</li>
          <li class="Figma">Figma</li>
          <li class="VSCode">VSCode</li>
          <li class="Eclipse">Eclipse</li>
        </ul>
        <p>
          {{ $t('parcours.AubayDesc1') }}
          <br />
          <br />
          {{ $t('parcours.AubayDesc2') }}
          <br />
          <br />
          {{ $t('parcours.AubayDesc3') }}
          <br />
          <br />
          {{ $t('parcours.AubayDesc4') }}
        </p>
      </div>
    </div>

    <div>
      <h2>{{ $t('parcours.WCSTitre') }}</h2>
      <div class="container-xp">
        <p class="date">{{ $t('parcours.WCSDate') }}</p>
        <ul>
          <li class="HTML">HTML</li>
          <li class="CSS">CSS</li>
          <li class="JavaScript">JavaScript</li>
          <li class="React">React</li>
          <li class="SCSS">SCSS</li>
          <li class="React-Native">React Native</li>

          <li class="Git">Git / GitHub</li>
          <li class="NodeJS">Node.js</li>
          <li class="Express">Express</li>
          <li class="SQL">SQL</li>
          <li class="MySQLWorkbench">MySQLWorkbench</li>
          <li class="AWS">AWS</li>
          <li class="Google-Cloud">Google Cloud</li>

          <li class="Figma">Figma</li>
          <li class="Jira">Jira</li>

          <li class="VSCode">VSCode</li>
        </ul>
        <p>
          {{ $t('parcours.WCSDesc1') }}
          <br />
          <br />
          {{ $t('parcours.WCSDesc2') }}
          <br />
          <br />
          {{ $t('parcours.WCSDesc3') }}
          <br />
          <br />
          {{ $t('parcours.WCSDesc4') }}
        </p>
      </div>
    </div>

    <div>
      <h2>{{ $t('parcours.FacTitre') }}</h2>
      <div class="container-xp">
        <p class="date">{{ $t('parcours.FacDate') }}</p>
        <p>
          {{ $t('parcours.FacDesc1') }}
          <br />
          <br />
          {{ $t('parcours.FacDesc2') }}
          <br />
          <br />
          {{ $t('parcours.FacDesc3') }}
        </p>
      </div>
    </div>

    <span class="trait"></span>

    <h2>{{ $t('parcours.CertifTitre') }}</h2>

    <div class="container-xp">
      <h3>{{ $t('parcours.Certif2Titre') }}</h3>
      <p class="date">{{ $t('parcours.Certif2Date') }}</p>
      <p>
        {{ $t('parcours.Certif2Desc') }}
      </p>
    </div>

    <div class="container-xp">
      <h3>{{ $t('parcours.Certif1Titre') }}</h3>
      <p class="date">{{ $t('parcours.Certif1Date') }}</p>
      <p>
        {{ $t('parcours.Certif1Desc') }}
        <a
          href="https://drive.google.com/file/d/1oYb74V4GNN8yknTpi5SNoENS8QWXi7Y7/view?usp=sharing"
          target="_blank"
          class="ICI"
          >{{ $t('parcours.Certif1Doc') }}</a
        >
      </p>
    </div>

    <span class="trait"></span>

    <div>
      <p class="redite">
        {{ $t('parcours.technos') }}
      </p>
      <Technos />
    </div>
  </div>
</template>
