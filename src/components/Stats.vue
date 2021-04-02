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
      <v-rating
        v-model="rating"
        length="10"
        readonly
      >
        <template v-slot:item="props">
          <v-icon
            :color="props.isFilled ? '#FE605A' : 'grey'"
            v-text="'mdi-human-male'"
          ></v-icon>
        </template>
      </v-rating>
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
    rating() {
      const ratingInt = parseInt(this.cityStats.social_housing_rate, 10);
      const roundedRating = Math.round(ratingInt) / 10;
      return roundedRating;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .stats {
    width: 50%;
  }

  .v-rating .v-icon {
    padding: 0;
  }
</style>
