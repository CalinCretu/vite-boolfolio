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
    <h3>{{ project.name }}</h3>
    <p v-if="project.type">{{ project.type.name }}</p>
    <p v-if="project.technologies.length > 0">
      <span class="tech" v-for="technology in project.technologies">
        {{ technology.name }}
      </span>
    </p>
    <p v-else>N.a.</p>
  </div>
</template>

<style lang="scss">
.card.card-project {
  padding: 20px;
  border-radius: 8px;
  background: #dedede;

  .tech {
    margin: 5px;
  }
}
</style>