<template>
  <v-app>
    <v-main>
      <Navbar />
      <router-view/>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';


export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    Navbar,
   Footer
}
}
</script>
