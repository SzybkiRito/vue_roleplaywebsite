<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Trailer />
    <Slider />
    <Description />
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
// import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import Trailer from '@/components/Trailer'
import Slider from '@/components/Slider'
import Description from '@/components/Description'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  components: {
   // Home,
    Navbar,
    Trailer,
    Slider,
    Description,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>