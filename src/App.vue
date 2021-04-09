<template>
  <v-app>
    <Header />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
  body {
    background-color: #ebebe3;
    color: #4e4e4d;
  }

  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&family=Oswald:wght@700&family=Playfair+Display:wght@400;500;600&display=swap');

  .v-application {
    width: 80%;
    margin: 0 auto;
    background-color: var(--v-background-base) !important;
    color: var(--v-color-base) !important;
  }
</style>
