<template>
  <div class="jumbotron jumbotron-fluid" data-aos="fade">

    <h1 data-aos="fade" class="display-4">Project: VinityRP</h1>
    <p data-aos="fade" class="lead">
      Najlepszy serwer RP w Polsce
    </p>

  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.jumbotron {
  background-image: url("~@/assets/header.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  text-align: center;
  color: white;

  height: 100vh;
  margin-bottom: 0px;
}
#logo {
  position: relative;

}
</style>
