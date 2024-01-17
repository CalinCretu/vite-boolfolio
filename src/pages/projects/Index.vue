<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,

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
    <div class="pinboard-container">
      <div class="title">
        <h3>
          Our latest Projects!!!
        </h3>
      </div>
      <div class="grid">
        <ProjectCard class="card project-card" v-for="project in projects" :project="project" key="project.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {

  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    margin: 40px 0px;
    position: absolute;
    top: -4%;
    color: rgb(239, 216, 216);
    rotate: -2deg;
  }

  .pinboard-container {
    background-image: url(../public/images/pinboard.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 1200px;
    height: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 10px 20px 15px black;
    position: relative;

    .grid {
      display: grid;
      text-align: center;
      justify-content: center;
      gap: 70px;
      grid-template-columns: repeat(3, 1fr);
      justify-items: end;
      max-width: 1000px;

      .project-card {
        width: 200px;
      }
    }
  }
}
</style>