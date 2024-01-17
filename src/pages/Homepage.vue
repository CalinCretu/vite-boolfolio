<script>

export default {
  components: {
  },
  data() {
    return {
      title: 'Calin Cretu',
      jobTitle: 'Student',
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="pinboard-container">
      <div class="card-name card card-project">
        <h1>{{ title }}</h1>
        <h2>{{ jobTitle }}</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.title {
  margin: 40px 0px;
  position: absolute;
  top: -5%;
  font-size: 28px;
  color: rgb(239, 216, 216);
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

  .card.card-name {
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 250px;
  }
}
</style>