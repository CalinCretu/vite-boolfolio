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
          console.log(res.data.project)
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
      <div class="card card-project details">
        <div class="project-detail">
          <span class="titles">Name:</span>
          <span>{{ project.name }}</span>
        </div>
        <div class="project-detail">
          <span class="titles">Description:</span>
          <span>{{ project.description }}</span>
        </div>
        <div class="project-detail">
          <span class="titles">Start Date:</span>
          <span>{{ project.start_date }}</span>
        </div>
        <div class="project-detail">
          <span class="titles">End Date:</span>
          <span>{{ project.end_date ?? 'Still going' }}</span>
        </div>
        <div class="project-detail">
          <span class="titles">Status:</span>
          <span>{{ project.status }}</span>
        </div>
        <div class="project-detail badges">
          <div>
            <span class="titles">Type:</span>
            <span class="type" v-if="project.type">{{ project.type.name }}</span>
          </div>
          <div>
            <span class="titles">Technologies:</span>
            <span class="show-technologies" v-if="project.technologies.length > 0">
              <span class="show-technology" v-for="technology in project.technologies">
                {{ technology.name }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card.card-project.details {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 700px;
  height: 700px;
  padding: 50px;

  .project-detail {
    margin-bottom: 15px;
    font-size: 20px;

    .titles {
      font-weight: bold;
      color: rgb(21, 20, 20);
    }
  }

  .project-detail.badges {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .type {
      margin-top: 10px;
      color: blue;
      border-bottom: 2px solid blue;
      padding: 0px 4px;
      justify-content: center;

    }

    .show-technologies {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 10px;
      width: 200px;

      .show-technology {
        color: green;
        border-bottom: 2px solid green;
        padding: 0px 4px;
      }
    }
  }

  span {
    display: block;
    color: rgb(71, 67, 67);
  }
}



.card.card-project.details:hover {
  transform: none;
  transition-duration: 0.2s;
  transition-timing-function: linear;
}
</style>