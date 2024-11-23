<template>
  <div id="app">
    <div>
      <header></header>

        <router-view/>

      <footer></footer>
    </div>
  </div>
</template>
<script>
  import Header from './components/Include/Header.vue'
  import Footer from './components/Include/Footer.vue'

  export default{
    name: 'App',
    component:{
      Header,Footer
    }
  }
</script>