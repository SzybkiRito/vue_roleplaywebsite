import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import Trailer from '@/components/Trailer'
import Slider from '@/components/Slider'
import Description from '@/components/Description'
import Footer from '@/components/Footer'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/Trailer',
      name: 'Trailer',
      component: Trailer
    },
    {
      path: '/Slider',
      name: 'Slider',
      component: Slider
    },
    {
      path: 'Description',
      name: 'Description',
      component: Description
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
  ]
})
