<script>
export default {
  props: {
    prj: Object,
    message: String
  }
}
</script>

<template>
  <RouterLink :to="{ name: 'projet', params: { id: prj.id } }" class="global-cardProjet">
    <!--  -->

    <img src="{{prj.mainImage}}" alt="img-projet" />
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
            <li>{{ techno }}</li>
          </section>
        </ul>
      </div>
    </div>

    <!--  -->
    <i></i>
  </RouterLink>
</template>
