<script>
export default {

}
</script>

<template>
  <div class="container">
    <div class="pinboard-container">
      <div class="title">
        <h1>Contacts!!!</h1>
      </div>
      <div class="card card-project">
        <form class="form" action="" method="POST">
          <input type="text" placeholder="Name" name="name">
          <input type="email" placeholder="Your E-mail" name="email">
          <textarea name="message" id="" cols="20" rows="10" placeholder="Message"></textarea>
          <input class="button" type="submit" value="Send">
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pinboard-container {
  display: flex;
  flex-direction: column;

  .title {
    margin: 40px 0px;
    position: absolute;
    top: -7%;
    color: rgb(239, 216, 216);
    rotate: -2deg;
  }

  .card.card-project {
    width: 600px;
    height: 600px;


    .form {
      display: flex;
      flex-direction: column;
      align-items: center;

      input,
      textarea {
        background: transparent;
        margin: 10px 0px;
        border: none;
        border-bottom: 2px solid grey;
        outline: none;
        padding: 5px 15px;
      }

      input:focus,
      textarea:focus {
        border-bottom: 3px solid green;
      }

      .button {
        width: 80px;
        border: 3px solid green;
        background-color: rgb(0, 128, 0, 0.6);
        font-weight: bold;
        box-shadow: 3px 3px 3px 1px black;

        &:hover {
          background-color: green;
          color: white;
          box-shadow: 1px 1px 1px 1px black;
        }

        &:active {
          transform: scale(0.9);
        }
      }


    }
  }

  .card.card-project:hover {
    transform: none;
    transition-duration: 0.2s;
    transition-timing-function: linear;
  }
}
</style>