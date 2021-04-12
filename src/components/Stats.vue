<!-- eslint-disable max-len -->
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
        <p>{{cityStats.population}} hab.</p>
        <p>{{cityStats.surface_area}} km²</p>
        <p>{{cityStats.population_density}} hab/km²</p>
      </div>
      <div class="city__social-housing">
          <svg version="1.1" id="camembert" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 232 152" enable-background="new 0 0 232 152" xml:space="preserve">
            <polygon id="Rond_x5F_Bleu" fill="#356A94" points="89.2,68.5 83.2,62.5 74.9,60.3 66.7,62.5 60.7,68.5 58.5,76.8 60.7,85 66.7,91
            74.9,93.2 83.2,91 89.2,85 91.4,76.8 "/>
            <!--<polygon id="Rond_x5F_rouge" opacity="0.36" fill="#E0605B" points="139.8,39.3 112.4,11.9 74.9,1.8 37.5,11.9 10,39.3 0,76.8
            10,114.2 37.5,141.7 74.9,151.7 112.4,141.7 139.8,114.2 149.9,76.8 "/>-->
            <g id="Toile_arraigné" opacity="0.5">
            <path opacity="0.1" fill="#4E4E4D" d="M78.9,90H72l-6-3.4l-3.4-6v-6.9l3.4-6l6-3.4h6.9l6,3.4l3.4,6v6.9l-3.4,6L78.9,90z M72.3,89
            h6.3l5.5-3.2l3.2-5.5V74l-3.2-5.5l-5.5-3.2h-6.3l-5.5,3.2L63.6,74v6.3l3.2,5.5L72.3,89z"/>
            <path opacity="0.2" fill="#4E4E4D" d="M80.7,96.9H70.1L61,91.6l-5.3-9.2V71.9l5.3-9.2l9.2-5.3h10.6l9.2,5.3l5.3,9.2v10.6l-5.3,9.2
            L80.7,96.9z M70.4,96h10.1l8.7-5l5-8.7V72.1l-5-8.7l-8.7-5H70.4l-8.7,5l-5,8.7v10.1l5,8.7L70.4,96z"/>
            <path opacity="0.3" fill="#4E4E4D" d="M82.6,103.9H68.3l-0.1-0.1l-12.3-7.1l-7.2-12.4V70l7.2-12.4l12.4-7.2h14.3L95,57.6l7.2,12.4
            v14.3L95,96.7L82.6,103.9z M68.6,102.9h13.8L94.3,96l6.9-11.9V70.3l-6.9-11.9l-11.9-6.9H68.6l-11.9,6.9l-6.9,11.9v13.8L56.6,96
            L68.6,102.9z"/>
            <path opacity="0.4" fill="#4E4E4D" d="M84.5,110.8h-18l-0.1-0.1l-15.5-9l-9-15.6v-18l0.1-0.1l9-15.5l15.6-9h18l0.1,0.1l15.5,9
            l9,15.6v18l-0.1,0.1l-9,15.5l-0.1,0.1L84.5,110.8z M66.7,109.8h17.5l15.2-8.8l8.8-15.2V68.4l-8.8-15.2l-15.2-8.8H66.7l-15.2,8.8
            l-8.8,15.2v17.5l8.8,15.2L66.7,109.8z"/>
            <path opacity="0.5" fill="#4E4E4D" d="M86.3,117.8H64.6l-0.1-0.1l-18.7-10.8L34.8,88V66.3l0.1-0.1l10.8-18.7l18.8-10.9h21.8
            l0.1,0.1l18.7,10.8L116,66.3V88l-0.1,0.1l-10.8,18.7l-0.1,0.1L86.3,117.8z M64.8,116.8h21.2l18.4-10.6l10.6-18.4V66.6l-10.6-18.4
            L86.1,37.6H64.8L46.4,48.2L35.8,66.6v21.2l10.6,18.4L64.8,116.8z"/>
            <path opacity="0.6" fill="#4E4E4D" d="M88.2,124.7H62.7l-0.1-0.1l-22-12.7L27.9,89.9V64.4l0.1-0.1l12.7-22l22.1-12.7h25.5l0.1,0.1
            l22,12.7L123,64.4v25.5l-0.1,0.1l-12.7,22l-0.1,0.1L88.2,124.7z M63,123.7h25l21.6-12.5L122,89.6v-25l-12.5-21.6L87.9,30.6H63
            L41.4,43.1L28.9,64.7v25l12.5,21.6L63,123.7z"/>
            <path opacity="0.7" fill="#4E4E4D" d="M90,131.7H60.8l-0.1-0.1l-25.2-14.5L21,91.8V62.6l0.1-0.1l14.5-25.2l25.3-14.6H90l0.1,0.1
            l25.2,14.5l14.6,25.3v29.2l-0.1,0.1l-14.5,25.2l-0.1,0.1L90,131.7z M61.1,130.7h28.7l24.8-14.3L129,91.5V62.8L114.6,38L89.8,23.7
            H61.1L36.3,38L21.9,62.8v28.7l14.3,24.8L61.1,130.7z"/>
            <path opacity="0.8" fill="#4E4E4D" d="M91.9,138.6H59l-0.1-0.1l-28.4-16.4L14,93.6V60.7l0.1-0.1l16.4-28.4L59,15.7h32.9l0.1,0.1
            l28.4,16.4l0.1,0.1l16.4,28.4v32.9l-0.1,0.1l-16.4,28.4l-0.1,0.1L91.9,138.6z M59.2,137.6h32.4l28.1-16.2l16.2-28.1V61l-16.2-28.1
            L91.6,16.7H59.2L31.2,32.9L15,61v32.4l16.2,28.1L59.2,137.6z"/>
            <path opacity="0.9" fill="#4E4E4D" d="M93.8,145.5H57.1l-0.1-0.1l-31.6-18.3L7.1,95.5V58.8l0.1-0.1l18.3-31.6L57.1,8.8h36.6
            l0.1,0.1l31.6,18.3l0.1,0.1l18.3,31.6v36.6l-0.1,0.1l-18.3,31.6l-0.1,0.1L93.8,145.5z M57.4,144.6h36.1l31.3-18.1l18.1-31.3V59.1
            l-18.1-31.3L93.5,9.8H57.4L26.1,27.8L8.1,59.1v36.1l18.1,31.3L57.4,144.6z"/>
            <path fill="#4E4E4D" d="M95.6,152.5H55.3l-0.1-0.1l-34.8-20.1l-20.2-35V57l0.1-0.1L20.3,22l35-20.2h40.4l0.1,0.1L130.6,22l0.1,0.1
            L150.8,57v40.4l-0.1,0.1l-20.1,34.8l-0.1,0.1L95.6,152.5z M55.5,151.5h39.8l34.5-19.9l19.9-34.5V57.3l-19.9-34.5L95.4,2.8H55.5
            L21,22.8L1.1,57.3v39.8L21,131.6L55.5,151.5z"/>
            </g>
            <polygon id="Toile_x5F_dessus" fill="#4E4E4D" points="150.3,57.3 150.2,57 76,76.9 130.3,22.5 130.1,22.3 75.8,76.6 95.7,2.4
            95.3,2.3 75.4,76.5 55.6,2.3 55.2,2.4 75.1,76.6 20.8,22.3 20.5,22.5 74.9,76.9 0.7,57 0.6,57.3 74.8,77.2 0.6,97.1 0.7,97.4
            74.9,77.5 20.5,131.8 20.8,132.1 75.1,77.7 55.2,152 55.6,152 75.4,77.8 95.3,152 95.7,152 75.8,77.7 130.1,132.1 130.3,131.8
            76,77.5 150.2,97.4 150.3,97.1 76.1,77.2 "/>
            <path id="Trace_x5F_bleu" fill="none" stroke="#356A94" stroke-width="1.3132" stroke-linecap="round" stroke-miterlimit="10" d="
            M75.4,77.2c33.2,17.4,118.3,52.2,155.8,52.2h0"/>
            <path id="Trace_x5F_rouge" fill="none" stroke="#E0605B" stroke-width="1.3132" stroke-linecap="round" stroke-miterlimit="10" d="
            M75.4,77.2C108.6,59.8,193.8,25,231.2,25h0"/>
          </svg>
          <div class="red" :style="socialHousingRatePolygon"></div>
          <div class="radar__legend">
            <p class="radar__legend__own-number">{{cityStats.social_housing_rate.toFixed(0)}}% de logements sociaux</p>
            <p class="radar__legend__objective22">22% objectif 2022</p>
          </div>
      </div>
      <div class="city__social-housing-legend">
        <div class="city__social-housing-legend--blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate recusandae temporibus facilis ut obcaecati dolorum fugiat ullam laborum culpa eligendi, velit minima, incidunt debitis magnam esse! Repellendus, beatae reiciendis.
        </div>
        <div class="city__social-housing-legend--red">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate recusandae temporibus facilis ut obcaecati dolorum fugiat ullam laborum culpa eligendi, velit minima, incidunt debitis magnam esse! Repellendus, beatae reiciendis.
        </div>
      </div>
      <div class="city__numbers">
        <div class="city__poverty">
          <p class="city__poverty__rate">
            {{ cityStats.poverty_rate !== null ? cityStats.poverty_rate : '-' }}%
          </p>
          <v-rating
            v-model="povertyRateOutOfTen"
            length="10"
            readonly
            class="city__poverty__icons"
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
            {{ cityStats.unemployment_rate }}%
          </p>
          <v-rating
            v-model="unemploymentRateOutOfTen"
            length="10"
            readonly
            class="city__unemployment__icons"
          >
            <template v-slot:item="props">
              <v-icon
                :color="props.isFilled ? '#FE605A' : '#356a94'"
                v-text="'mdi-human-male'"
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
    socialHousingRatePolygon() {
      return `
      width: ${this.cityStats.social_housing_rate * 1.5}px;
      height: ${this.cityStats.social_housing_rate * 1.5}px;
      top: calc(76px - (${this.cityStats.social_housing_rate * 0.75}px);
      left: calc(76px - (${this.cityStats.social_housing_rate * 0.75}px);
      `;
    },
    povertyRateOutOfTen() {
      return this.cityStats.poverty_rate / 10;
    },
    unemploymentRateOutOfTen() {
      return this.cityStats.unemployment_rate / 10;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- eslint-disable max-len -->
<style scoped lang="scss">
  .stats {
    width: 45%;
    font-family: 'Playfair Display', serif;

    @media screen and (max-width: 1024px) {
      width: 100%;
      order: -1;
      margin-bottom: 5rem;
    }
  }

  .v-rating .v-icon {
    padding: 0;
  }

  .city__poverty__icons .v-icon, .city__unemployment__icons .v-icon {
    margin: -5px;
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

  .city__social-housing {
    margin: 3rem 0 3rem;
    position: relative;
    display: flex;

    & svg {
      max-width: 232px;
    }

    .red {
      clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
      background-color: red;
      position: absolute;
      opacity: 0.3;
    }

    .radar__legend {
      position: relative;
      margin-left: 1rem;

      &__own-number {
        position: absolute;
        top: 10px;
        width: 200px;
      }

      &__objective22 {
        position: absolute;
        top: 115px;
        width: 200px;
      }
    }
  }

  .city__social-housing-legend {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    margin-bottom: 3rem;
  }

  .city__numbers {
    display: flex;
    justify-content: space-evenly;
    text-align: center;

    & .city__unemployment__rate, .city__poverty__rate {
      font-family: 'Oswald', sans-serif;
      font-weight: 700;
      font-size: 4rem;
      margin-bottom: 0;
      line-height: 1.1;
    }

    & .city__unemployment__legend, .city__poverty__legend {
      font-family: 'Playfair Display', sans-serif;
      font-weight: 400;
      font-size: 0.5rem;
      margin-bottom: 0;
    }
  }

</style>
