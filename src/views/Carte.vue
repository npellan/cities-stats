<template>
  <div class="map">
      <Map />
      <Stats />
  </div>
</template>

<script>
import Map from '../components/Map.vue';
import Stats from '../components/Stats.vue';

export default {
  name: 'Carte',
  components: {
    Map,
    Stats,
  },
};
</script>

<style>
  .map {
    display: flex;
  }
</style>
