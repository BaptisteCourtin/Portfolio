<script>
export default {
  props: {
    prj: Object
  },
  methods: {
    retourHaut() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<template>
  <RouterLink
    :to="{ name: 'projet', params: { id: prj.id } }"
    class="global-cardProjet"
    @click="retourHaut()"
  >
    <!--  -->

    <img :src="prj.mainImage" alt="img-projet" loading="lazy" />
    <div class="hidden">
      <div class="info">
        <div class="text">
          <h4>{{ prj.titre }}</h4>
          <p>{{ prj.description }}</p>
        </div>
        <ul>
          <section
            class="wrapper-card-project"
            v-for="techno in prj.technosPrincipales"
            :key="prj.id"
          >
            <li :class="techno">{{ techno }}</li>
          </section>
        </ul>
      </div>
    </div>

    <!--  -->
    <i></i>
  </RouterLink>
</template>
