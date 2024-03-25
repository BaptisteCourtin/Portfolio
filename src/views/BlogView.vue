<template>
  <div class="global-blog">
    <h1>{{ $t('blog.titre') }}</h1>

    <article>
      <h2>les dossiers pour la certification développeur web et web mobile</h2>
      <div class="paragraphe">
        <p>
          <a
            href="https://drive.google.com/file/d/1_dGXZabipBMyLFJ_tyoTrB8_2aoWPh8n/view?usp=sharing"
            target="_blank"
            class="ICI"
            aria-label="lien vers mon dossier projet"
            >{{ $t('blog.ici') }}</a
          >
          {{ $t('blog.doss_projet1') }} <span>{{ $t('blog.doss_projet2') }}</span>
          {{ $t('blog.doss_projet3') }}
        </p>
        <br />
        <br />
        <p>
          <a
            href="https://drive.google.com/file/d/1vJX-VTvsOiZ191m5MjXZ-z7wYUw7DDqr/view?usp=sharing"
            target="_blank"
            class="ICI"
            aria-label="lien vers mon dossier professionnel"
          >
            {{ $t('blog.ici') }}
          </a>
          {{ $t('blog.doss_pro1') }} <span>{{ $t('blog.doss_pro2') }}</span>
          {{ $t('blog.doss_pro3') }}
          <RouterLink to="/themes" class="ICI">{{ $t('blog.doss_pro4') }}</RouterLink>
        </p>
        <br />
        <br />
        <p>
          <a
            href="https://docs.google.com/presentation/d/1I6ZxwtqlLFDMAAFvLns9ozyKtiqkaFWT/edit?usp=drive_link&ouid=116445626505765671235&rtpof=true&sd=true"
            target="_blank"
            class="ICI"
            aria-label="lien vers ma présentation pour ma certification développeur web et web mobile"
            >{{ $t('blog.ici') }}</a
          >
          {{ $t('blog.pres1') }}
        </p>
      </div>
    </article>
  </div>
</template>
