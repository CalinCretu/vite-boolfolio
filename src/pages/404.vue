<script>
export default {

}
</script>

<template>
  <div class="container">
    <div class="pinboard-container">
      <div id="not-found-card" class="card card-project">
        <span>Are you lost?</span>
        <span>(┬┬﹏┬┬)</span>
        <span>Error 404</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#not-found-card {
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(20deg);

  span {
    margin: 10px 0;
  }
}
</style>