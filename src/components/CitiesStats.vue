<template>
  <div class="cities-stats">
    <Header />
    <h1>Logements sociaux à Lyon</h1>
    <div class="container">
      <Map />
      <Stats />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Map from './Map.vue';
import Stats from './Stats.vue';
import Footer from './Footer.vue';

export default {
  name: 'CitiesStats',
  components: {
    Header,
    Map,
    Stats,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    display: flex;
  }
</style>
