<template>
  <div class="stats">
    <Form />
    <div v-if="!this.$store.state.selectedCity">
      Sélectionnez une ville sur la carte
    </div>
    <div v-else class="city">
      <header class="city__header">
        <h2 class="header__name">{{cityStats.name}}</h2>
        <div class="header__infos">
          <v-icon
            :color="'#4e4e4d'"
            v-text="'mdi-map-marker'"
          ></v-icon>
          <span class="header__infos__postal-code">
            {{cityStats.postal_code}}
          </span>
        </div>
      </header>
      <div class="city__social-housing-rate">
        <p class="social-housing-rate__rate">
          {{cityStats.social_housing_rate}} %
        </p>
      </div>
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
import Form from './Form.vue';

export default {
  name: 'Stats',
  components: {
    Form,
  },
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

  .city {
    margin-top: 1rem;
  }

  .city__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;

    .header__name {
      font-size: 2rem;
    }
  }

  .city__social-housing-rate {
    margin-top: 1rem;

    & .social-housing-rate__rate {
      font-size: 5rem;
    }

  }

</style>
