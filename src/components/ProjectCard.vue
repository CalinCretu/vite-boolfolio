<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="card card-project">
    <h3 class="card-title">{{ project.name }}</h3>
    <p class="types" v-if="project.type">{{ project.type.name }}</p>
    <p class="technologies" v-if="project.technologies.length > 0">
      <span v-for="technology in project.technologies">
        {{ technology.name }}
      </span>
    </p>
    <p v-else>N.a.</p>
    <router-link class="router-link" :to="{ name: 'projects.show', params: { slug: project.slug } }">More...</router-link>
  </div>
</template>

<style lang="scss">
.card.card-project {
  padding: 10px;
  background-image: url(../public/images/post-it.jpg);
  box-shadow: 0px 10px 10px black;
  display: flex;
  flex-direction: column;

  .card-title {
    margin-bottom: 10px;
    border-bottom: 3px solid rgb(191, 197, 38);
  }

  .types {
    font-weight: bold;
  }

  .technologies {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 12px;
    color: rgb(77, 77, 77);
    flex-grow: 1;
  }

  .router-link {
    color: green;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.card.card-project:hover {
  transform: scale(1.15);
  transition-duration: 0.2s;
  transition-timing-function: linear;
}
</style>