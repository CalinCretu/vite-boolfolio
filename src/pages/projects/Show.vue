<script>
import axios from 'axios'
export default {
  props: {
    slug: String
  },
  data() {
    return {
      project: null,
      BASE_URL: 'http://127.0.0.1:8000/api'
    }
  },
  methods: {
    fetchProject() {
      axios.get(`${this.BASE_URL}/projects/${this.slug}`)
        .then(res => {
          // console.log(res.data.project)
          this.project = res.data.project
        })
    }
  },
  created() {
    const slug = this.$route.params.slug
    // console.log(slug)
    // console.log("rotta:", this.$route)
    this.fetchProject()
  }
}
</script>

<template>
  <div class="container">
    <div class="pinboard-container">
      <h1 class="title">Details!!!</h1>
      <p>{{ project.name }}</p>
      <p>{{ slug }}</p>
    </div>
  </div>
</template>

<style lang="scss"></style>