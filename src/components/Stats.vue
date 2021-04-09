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
          <div class="header__infos__postal-code">
            <v-icon
              :color="'#4e4e4d'"
              v-text="'mdi-map-marker'"
            ></v-icon>
            <span>
              {{cityStats.postal_code}}
            </span>
          </div>
          <div class="header__infos__altitude">
            <v-icon
              :color="'#4e4e4d'"
              v-text="'mdi-image-filter-hdr'"
            ></v-icon>
            <span>
              Altitude : {{cityStats.altitude ? 'cityStats.altitude' : 230}} m
            </span>
          </div>
        </div>
      </header>
      <div class="city__otherinfos">
        <p>49789 hab.</p>
        <p>21 km²</p>
        <p>2370,4 hab/km²</p>
      </div>
      <div class="city__numbers">
        <div class="city__poverty">
          <p class="city__poverty__rate">
            {{cityStats.social_housing_rate.toFixed(0)}} %
          </p>
          <v-rating
            v-model="rating"
            length="10"
            readonly
          >
            <template v-slot:item="props">
              <v-icon
                :color="props.isFilled ? '#FE605A' : '#356a94'"
                v-text="'mdi-human-male'"
              ></v-icon>
            </template>
          </v-rating>
          <p class="city__poverty__legend">de la population sous le seuil de pauvreté</p>
        </div>
        <div class="city__unemployment">
          <p class="city__unemployment__rate">
            {{cityStats.social_housing_rate.toFixed(0)}} %
          </p>
          <v-rating
            v-model="rating"
            length="10"
            readonly
          >
            <template v-slot:item="props">
              <v-icon
                :color="props.isFilled ? '#FE605A' : '#356a94'"
                v-text="'mdi-alert-octagon'"
              ></v-icon>
            </template>
          </v-rating>
          <p class="city__unemployment__legend">de la population active au chômage</p>
        </div>
      </div>
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
    font-family: 'Playfair Display', serif;
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
    border-top: 3px solid var(--v-color-base);
    border-bottom: 3px solid var(--v-color-base);
    padding: 1rem 0;

    .header__name {
      font-size: 1.75rem;
      font-weight: 500;
    }
  }

  .city__otherinfos {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--v-color-base);

    & p {
      margin-bottom: 0;
    }

  }

  .city__social-housing-rate {
    margin-top: 1rem;

    & .social-housing-rate__rate {
      font-size: 5rem;
    }

  }

  .city__numbers {
    display: flex;
    justify-content: space-between;
    text-align: center;

    & .city__unemployment__rate, .city__poverty__rate {
      font-family: 'Oswald', sans-serif;
      font-weight: 700;
      font-size: 4rem;
      margin-bottom: 0;
    }

    & .city__unemployment__legend, .city__poverty__legend {
      font-family: 'Playfair Display', sans-serif;
      font-weight: 400;
      font-size: 0.5rem;
      margin-bottom: 0;
    }
  }

</style>
