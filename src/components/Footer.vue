<template>
  <div class="jumbotron jumbotron-fluid" data-aos="fade-in">
    <p class="lead">
      DOŁĄCZ JUŻ TERAZ
    </p>
   
   <!-- ADD HERE REDIRECT TO A FORUM/DISCORD -->
    <button class="join mx-auto w-25">KLIK</button>
    <!-- <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> -->
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {};
  }
};
</script>

<style scoped>
.jumbotron {
  background-image: url("~@/assets/balkonik.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  text-align: center;
  color: white;

  height: 40vh;
  margin-bottom: 0px;
}
p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 50px;
  margin: 0 auto;
  text-align: center;
  margin-top: 5%;
}
.join {
  color: white;
  padding: 5px;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid rgb(216, 2, 134);
  box-shadow: inset 0 0 0 0 #d80286;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
  decoration: none;
  outline: none;
}
.join:hover {
  box-shadow: inset 400px 0 0 0 #D80286;
}
</style>
