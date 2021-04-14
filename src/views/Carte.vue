<template>
  <main class="carte">
      <Map />
      <Stats />
  </main>
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

<style scoped lang="scss">
  .carte {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
  }
</style>
