<script>
import ProjectIndex from './pages/projects/Index.vue';

export default {
  components: {
    ProjectIndex
  }
}
</script>

<template>
  <div class="background">
    <ProjectIndex />
  </div>
</template>

<style lang="scss">
@use './style/general.scss';

.background {
  background-image: url(../public/images/wood_background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
