<template>
  <!-- <div id="app"> -->
    <body class="hold-transition sidebar-mini layout-fixed">
      <div class="wrapper" >

        <Header v-if="showHeader" ></Header>
        <Sidebar v-if="showHeader" ></Sidebar>
          <main>
            <div class="content-wrapper">
              <router-view/>
            </div>
          </main>
          

        <Footer v-if="showHeader" ></Footer>

      </div>
    </body>
  <!-- </div> -->
</template>
<script>
  import Header from './components/Include/Header.vue'
  import Footer from './components/Include/Footer.vue'
  import Sidebar from './components/Include/Sidebar.vue'
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';

  export default{
    name: 'App',
    components:{
      Header,Footer,Sidebar
    },
    setup() {
const route = useRoute();

// Computed property to determine if Header should be shown
const showHeader = computed(() => {
  return route.name !== 'login' && route.name !== 'register';
});

return {
  showHeader
};
}
  }
</script>

<style scoped>

</style>