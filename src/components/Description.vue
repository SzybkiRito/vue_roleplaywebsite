<template>
  <div id="container-fluid">
      <b-img
        data-aos="zoom-in-down"
        center
        src="https://cdn.discordapp.com/attachments/425334891727552513/693205355307597996/cinity9.png"
        fluid
        alt="logo"
        class="logo"
      ></b-img>

    <h2 data-aos="zoom-in-down">Platforma i Silnik</h2>

    <div data-aos="zoom-in-down" class="description mx-auto w-75">
      <b-img
        src="https://portforward.com/fivem/fivem-logo.png"
        fluid
        alt="logo"
        id="fivem_logo"
        class="float-left"
      ></b-img>
      <span>
        Quisque vitae libero vitae nibh fermentum volutpat. Maecenas scelerisque
        diam eget nisl volutpat, et lacinia risus feugiat. Morbi suscipit nisi
        ac sem egestas, id pharetra libero tempus. Etiam non augue sed nunc
        imperdiet fermentum vitae sit amet leo. Pellentesque rhoncus, mi eu
        luctus aliquet, erat est efficitur ligula, nec placerat nisi ante eget
        metus. Suspendisse in rutrum libero, a convallis dolor. Ut interdum
        molestie accumsan. Aliquam eleifend leo vel elit vehicula, sit amet
        ornare turpis commodo. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Pellentesque odio dolor,
        placerat quis venenatis vitae, sollicitudin sit amet turpis. Duis et
        orci rhoncus, venenatis dolor sit amet, vulputate dolor. Maecenas sit
        amet dolor augue. Morbi ut porttitor augue, id sagittis dui. Sed sapien
        lacus, maximus quis egestas ut, bibendum non justo. Aliquam vitae
        finibus mauris, a finibus tellus. Quisque vitae libero vitae nibh
        fermentum volutpat. Maecenas scelerisque diam eget nisl volutpat, et
        lacinia risus feugiat. Morbi suscipit nisi ac sem egestas, id pharetra
        libero tempus. Etiam non augue sed nunc imperdiet fermentum vitae sit
        amet leo. Pellentesque rhoncus, mi eu luctus aliquet, erat est efficitur
        ligula, nec placerat nisi ante eget metus. Suspendisse in rutrum libero,
        a convallis dolor. Ut interdum molestie accumsan. Aliquam eleifend leo
        vel elit vehicula, sit amet ornare turpis commodo. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.logo {
  margin: 0;
  width: 50vh;
  height: 50vh;
  margin-top: -5%;
}
h2 {
  text-align: center;
  color: pink;
}
.description {
  width: 400px;
  padding: 20px;
  overflow: hidden;
}
#fivem_logo {
  width: 250px;
  height: 250px;

  margin-right: 15px;
  display: block;
  float: left;
}
.content span {
  margin-left: 15px;
  display: block;
  margin: 2px 0 0;
}
</style>
