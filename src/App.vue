<template>
  <div id="app">
    <Header></Header>
    <Search></Search>
    <Nav></Nav>
    <router-link to="/product">toPage</router-link>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
  // import {getUserInfo} from '@/api/index'
  import Header from '@/components/Header'
  import Search from '@/components/Search'
  import Nav from '@/components/Nav'
  import axios from 'axios'

  import Footer from '@/components/Footer'
  import {getRequest} from "@/api/request";
  export default {
    name:'app',
    components:{
      Header,Search,Nav,Footer
    },

  }

</script>

<style>

</style>
