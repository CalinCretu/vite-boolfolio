<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [],
      BASE_ULR: 'http://127.0.0.1:8000/api'
    }
  },
  methods: {
    fetchProjects() {
      axios.get(`${this.BASE_ULR}/projects`)
        .then((res) => {
          this.projects = res.data.results.data
        })
    }
  },
  created() {
    this.fetchProjects()
  }
}
</script>

<template>
  <div class="container">
    <h1>
      Our latest Projects
    </h1>
  </div>
  <div class="container">
    <div class="grid">
      <ProjectCard class="card project-card" v-for="project in projects" :project="project" key="project.id" />
    </div>
  </div>
</template>

<style lang="scss">
.container {

  margin: 10px;

  .grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>