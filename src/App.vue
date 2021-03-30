<template>
  <div id="app">
    <CitiesStats />
  </div>
</template>

<script>
import CitiesStats from './components/CitiesStats.vue';

export default {
  name: 'App',
  components: {
    CitiesStats,
  },
};
</script>

<style lang="scss">
  #app {
    width: 80%;
    max-width: 1440px;
    margin: 0 auto;
  }
</style>
