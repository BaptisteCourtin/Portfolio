<template>
  <div class="global-techno">
    <h3>{{ $t('technos.titre') }}</h3>

    <div class="cadre">
      <h4>{{ $t('technos.front') }}</h4>
      <ul>
        <li>HTML <img src="../assets/logos/html.png" alt="logo" loading="lazy" /></li>
        <li>
          CSS / SCSS<img src="../assets/logos/css.png" alt="logo" loading="lazy" /><img
            src="../assets/logos/scss.png"
            alt="logo"
            loading="lazy"
          />
        </li>
        <li>
          JavaScript / TypeScript<img src="../assets/logos/js.png" alt="logo" loading="lazy" /><img
            src="../assets/logos/ts.png"
            alt="logo"
            loading="lazy"
          />
        </li>
        <li>React<img src="../assets/logos/react.png" alt="logo" loading="lazy" /></li>
        <li>Angular<img src="../assets/logos/angular.png" alt="logo" loading="lazy" /></li>
        <li>Vue<img src="../assets/logos/vue.png" alt="logo" loading="lazy" /></li>
        <li>React Native<img src="../assets/logos/react.png" alt="logo" loading="lazy" /></li>
      </ul>
    </div>

    <div class="cadre">
      <h4>{{ $t('technos.back') }}</h4>
      <ul>
        <li>Node.js<img src="../assets/logos/node.png" alt="logo" loading="lazy" /></li>
        <li>Express<img src="../assets/logos/node.png" alt="logo" loading="lazy" /></li>
        <li>Java<img src="../assets/logos/java.png" alt="logo" loading="lazy" /></li>
        <li>
          Java Springboot<img src="../assets/logos/springboot.png" alt="logo" loading="lazy" />
        </li>
        <li>SQL<img src="../assets/logos/sql.png" alt="logo" loading="lazy" /></li>
      </ul>
    </div>

    <div class="cadre">
      <h4>{{ $t('technos.outils') }}</h4>
      <ul>
        <li>
          Git / Github / Gitlab<img src="../assets/logos/git.png" alt="logo" loading="lazy" /><img
            src="../assets/logos/github.png"
            alt="logo"
            loading="lazy"
          /><img src="../assets/logos/gitlab.png" alt="logo" loading="lazy" />
        </li>
        <li>MySQLWorkbench<img src="../assets/logos/workbench.png" alt="logo" loading="lazy" /></li>
        <li>PostgreSQL<img src="../assets/logos/pgadmin.png" alt="logo" loading="lazy" /></li>
        <li>PgAdmin<img src="../assets/logos/pgadmin.png" alt="logo" loading="lazy" /></li>
        <li>jenkins<img src="../assets/logos/jenkins.png" alt="logo" loading="lazy" /></li>
        <li>SonarQube<img src="../assets/logos/sonar.png" alt="logo" loading="lazy" /></li>
        <li>AWS<img src="../assets/logos/aws.png" alt="logo" loading="lazy" /></li>
        <li>Google Cloud<img src="../assets/logos/googleCloud.png" alt="logo" loading="lazy" /></li>
        <li>Jira<img src="../assets/logos/jira.png" alt="logo" loading="lazy" /></li>
        <li>Figma<img src="../assets/logos/figma.png" alt="logo" loading="lazy" /></li>
      </ul>
    </div>

    <div class="cadre">
      <h4>{{ $t('technos.env') }}</h4>
      <ul>
        <li>VSCode<img src="../assets/logos/vscode.png" alt="logo" loading="lazy" /></li>
        <li>Eclipse<img src="../assets/logos/eclipse.png" alt="logo" loading="lazy" /></li>
      </ul>
    </div>

    <div class="cadre">
      <h4>{{ $t('technos.langues') }}</h4>
      <ul>
        <li>
          {{ $t('technos.fr') }}<img src="../assets/logos/fr.png" alt="logo" loading="lazy" />
        </li>
        <li>
          {{ $t('technos.en') }}
          <a
            href="https://drive.google.com/file/d/1oYb74V4GNN8yknTpi5SNoENS8QWXi7Y7/view?usp=sharing"
            target="_blank"
            class="ICI"
            >(B2)</a
          >
          <img src="../assets/logos/en.png" alt="logo" loading="lazy" />
        </li>
      </ul>
    </div>
  </div>
</template>
