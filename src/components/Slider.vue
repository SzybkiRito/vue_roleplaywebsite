<template>
  <div class="jumbotron jumbotron-fluid">
    <p class="lead">
      ZOSTAŃ KIM CHCESZ<br>
      <a style="color: pink;"><strong>{{ this.data[this.count] }}</strong></a>
    </p>
    <!-- <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> -->
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      data: ["Policjantem", "Przestępcą", "Biznesmenem"],
      count: 0
    };
  },
  methods: {
    changeText() {
      this.count++;
      if (this.count >= this.data.length) {
        this.count = 0;
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.changeText();
    }, 1000);
  }
};
</script>

<style scoped>
.jumbotron {
  background-image: url("~@/assets/slider.png");
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
</style>
