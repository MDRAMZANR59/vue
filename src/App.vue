<template>
  <!-- <div id="app"> -->
    <body class="hold-transition sidebar-mini layout-fixed">
      <div class="wrapper">

        <Header></Header>

          <router-view/>

        <Footer></Footer>

      </div>
    </body>
  <!-- </div> -->
</template>
<script>
  import Header from './components/Include/Header.vue'
  import Footer from './components/Include/Footer.vue'

  export default{
    name: 'App',
    components:{
      Header,Footer
    }
  }
</script>