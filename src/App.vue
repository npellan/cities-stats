<template>
  <v-app>
    <Header />

    <div class="container">
      <Map />
      <Stats />
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Map from './components/Map.vue';
import Stats from './components/Stats.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Map,
    Stats,
    Footer,
  },
};
</script>

<style lang="scss">
  body {
    background-color: #ebebe3;
    color: #4e4e4d
  }

  .v-application {
    width: 80%;
    max-width: 1440px;
    margin: 0 auto;
    background-color: var(--v-background-base) !important;
    color: var(--v-color-base) !important;
  }

  .container {
    display: flex;
  }
</style>
