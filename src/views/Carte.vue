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

<style lang="scss">
  .map {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
  }
</style>
