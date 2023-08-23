<script>
import { PROJETS } from '../assets/projets'
import CardProjet from '../components/CardProjet.vue'

export default {
  components: {
    CardProjet
  },
  data() {
    return {
      PROJETS: PROJETS,
      sortByField: 'id',
      sortOrder: -1
    }
  },
  computed: {
    sortedProjects() {
      const projects = [...this.PROJETS]
      if (this.sortByField) {
        projects.sort((a, b) => {
          const aValue = a[this.sortByField]
          const bValue = b[this.sortByField]
          if (aValue < bValue) return -1 * this.sortOrder
          if (aValue > bValue) return 1 * this.sortOrder
          return 0
        })
      }
      return projects
    }
  },
  methods: {
    sortBy(field) {
      if (this.sortByField === field) {
        this.sortOrder *= -1
      } else {
        this.sortByField = field
        this.sortOrder = 1
      }
    }
  }
}
</script>

<template>
  <div class="global-theme">
    <h1>Mes Projets</h1>

    <button @click="sortBy('id')">
      <span>
        {{ sortOrder === 1 ? 'Les plus récents avant' : 'Les plus anciens avant' }}
      </span>
    </button>

    <section class="wrapper-card-project">
      <CardProjet v-for="prj in sortedProjects" :key="prj.id" :prj="prj" />
    </section>
  </div>
</template>
