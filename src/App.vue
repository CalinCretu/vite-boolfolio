<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <div class="background">
    <AppHeader />
    <router-view></router-view>
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
