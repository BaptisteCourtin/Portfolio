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
      <h3>{{ $t('parcours.AubayTitre') }}</h3>
      <div class="container-xp">
        <p class="date">{{ $t('parcours.AubayDate') }}</p>
        <ul>
          <li class="Angular">Angular</li>
          <li class="TypeScript">TypeScript</li>
          <li class="SCSS">SCSS</li>
          <li class="Springboot">Java Springboot</li>
          <li class="SQL">SQL</li>

          <li class="Git">Git / Gitlab</li>
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
      <h3>{{ $t('parcours.WCSTitre') }}</h3>
      <div class="container-xp">
        <p class="date">{{ $t('parcours.WCSDate') }}</p>
        <ul>
          <li class="HTML">HTML</li>
          <li class="CSS">CSS</li>
          <li class="JavaScript">JavaScript</li>
          <li class="React">React</li>
          <li class="SCSS">SCSS</li>
          <li class="React-Native">React Native</li>

          <li class="Git">Git / Gitlab</li>
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
      <h3>{{ $t('parcours.FacTitre') }}</h3>
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
      <h4>{{ $t('parcours.Certif1Titre') }}</h4>
      <p class="date">{{ $t('Certif1Date') }}</p>
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

    <div class="container-xp">
      <h4>{{ $t('parcours.Certif2Titre') }}</h4>
      <p class="date">{{ $t('parcours.Certif2Date') }}</p>
      <p>
        {{ $t('parcours.Certif2Desc') }}
      </p>
    </div>

    <span class="trait"></span>

    <div>
      <p>
        {{ $t('parcours.technos') }}
      </p>
      <Technos />
    </div>
  </div>
</template>
