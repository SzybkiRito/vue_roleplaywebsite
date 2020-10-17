<template>
<div>
  <b-navbar toggleable="lg" type="dark" style="background-color: #485461; background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);">
    <img src="~@/assets/logo.png" width="50vh" height="50vh"/>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Forum</b-nav-item>
        <b-nav-item href="#">Discord</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>