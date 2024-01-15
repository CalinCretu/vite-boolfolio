<script>
import axios from 'axios';

export default {
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
          this.projects = res.data.results
          console.log(res)
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
      I nostri ultimi progetti
    </h1>
  </div>
  <div class="container">
    <div class="grid">
      <div class="card project-card" v-for="project in projects" key="project.id">
        <h3>{{ project.name }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>