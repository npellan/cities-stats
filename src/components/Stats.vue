<template>
  <div class="stats">
    <h2>Stats</h2>
    <div v-if="!this.$store.state.selectedCity">
      Sélectionnez une ville sur la carte
    </div>
    <div v-else>
      <p>
        {{cityStats.name}}
      </p>
      <p>
        {{cityStats.postal_code}}
      </p>
      <p>
        {{cityStats.social_housing_rate}} %
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  computed: {
    cityStats() {
      return this.$store.getters.getCityById(this.$store.state.selectedCity);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .stats {
    width: 50%;
  }
</style>
