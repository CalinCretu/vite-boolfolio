<script>
export default {

}
</script>

<template>
  <header>
    <div>
      <nav>
        <ul class="header-navbar">
          <li class="nav-links">
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="nav-links">
            <router-link :to="{ name: 'projects.index' }">Portfolio</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
nav {
  display: flex;
  justify-content: center;

  .header-navbar {
    display: flex;
    grid-template-columns: repeat(2, 1fr);
    position: absolute;
    justify-content: space-between;
    width: 1600px;
    margin-top: 20px;

    a:hover {
      color: white;
      text-shadow: 5px 5px 5px grey;
    }

    .nav-links {
      background-image: url(../public/images/blackboard.jpg);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      width: 200px;
      height: 120px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      font-size: 25px;
      text-transform: uppercase;
      box-shadow: 0px 10px 20px 15px black;
    }
  }
}
</style>