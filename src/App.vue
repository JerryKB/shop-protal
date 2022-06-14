<template>
  <div id="app">
    <Header v-if="$route.meta.show"></Header>
    <Search v-if="$route.meta.show"></Search>
    <Nav v-if="$route.meta.show"></Nav>
    <router-view></router-view>
    <Footer v-if="$route.meta.show"></Footer>
  </div>
</template>
<script>

  import Header from '@/components/Header'
  import Search from '@/components/Search'
  import Nav from '@/components/Nav'
  import Footer from '@/components/Footer'
  export default {
    name:'app',
    data(){
      return{

      }
    },
    components:{
      Header,Search,Nav,Footer
    },


  }

</script>

<style>

</style>
