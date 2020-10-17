<template>
  <div class="container w-100" style="text-align: center; padding: 20px;" data-aos="fade-down">
    <h3>Trailer</h3>
    <p style="width: 300px; margin: auto;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      efficitur nec tortor vitae dignissim. Integer felis lectus, pulvinar quis
      nulla at, dictum feugiat lacus. Nulla pulvinar nisi sit amet magna feugiat
      tincidunt. Quisque nunc ex, sagittis id vestibulum vel, pulvinar vel
      purus. Suspendisse odio mauris, pharetra non scelerisque sed, hendrerit
    </p>

    <b-embed
      type="iframe"
      aspect="16by9"
      src="https://www.youtube.com/embed/No1iTBNLjig?rel=0"
      allowfullscreen
      class="video"
      center
    ></b-embed>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.video {
  width: 100%;
  height: 100%;
  padding: 25px;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .video {
    position: absolute;
  }
}
</style>
