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

    <img :src="prj.mainImage" alt="" role="presentation" aria-hidden="true" loading="lazy" />
    <div class="hidden">
      <div class="info">
        <div class="text">
          <h3>{{ prj.titre }}</h3>
          <p>{{ prj.description }}</p>
        </div>
        <ul>
          <li class="wrapper-card-project" v-for="techno in prj.technosPrincipales" :key="prj.id">
            <p :class="techno">{{ techno }}</p>
          </li>
        </ul>
      </div>
    </div>

    <!--  -->
    <i></i>
  </RouterLink>
</template>
