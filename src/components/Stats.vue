<!-- eslint-disable max-len -->
<template>
  <div class="stats">
    <Form />
    <div v-if="!this.$store.state.selectedCity">
      Sélectionnez une ville sur la carte
    </div>
    <div v-else class="city">
      <div class="header">
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
      </div>
      <div class="header__other-infos">
        <p>{{cityStats.population}} hab.</p>
        <p>{{cityStats.surface_area.toString().replace(".", ",")}} km²</p>
        <p>{{cityStats.population_density.toString().replace(".", ",")}} hab/km²</p>
      </div>
      <div class="social-housing">
        <div class="radar">
          <div class="chart">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          y="0px" viewBox="0 0 160.3 152" style="enable-background:new 0 0 160.3 152;" xml:space="preserve">

            <polygon id="Rond_x5F_Bleu_1_" class="st0" points="106.1,67.4 96.1,53.8 80.1,48.5 64,53.8 54,67.4 54,84.4 64,98 80.1,103.3
            96.1,98 106.1,84.4 "/>
            <g id="Toile_arraigné_1_">
              <path class="st1" d="M104.9,152.2H55.4l-0.2-0.1l-39.9-29L0,75.9l15.3-47.1l0.2-0.1l39.9-29h49.5l0.2,0.1l39.9,29l15.3,47.1
              L145,123L104.9,152.2z M55.8,150.8h48.7l39.4-28.6l15-46.3l-15-46.3L104.5,1H55.8L16.4,29.6l-15,46.3l15,46.3L55.8,150.8z"/>
              <path class="st2" d="M102.6,145.1h-45l-0.2-0.1l-36.2-26.3l-0.1-0.2L7.3,75.9l0.1-0.2l13.8-42.6l0.2-0.1L57.6,6.7h45l0.2,0.1
              L139,33.1l0.1,0.2l13.8,42.6l-0.1,0.2L139,118.7L102.6,145.1z M58.1,143.8h44.1l35.7-25.9l13.6-42l-13.6-42L102.2,8H58.1L22.4,34
              L8.8,76l13.6,42L58.1,143.8z"/>
              <path class="st3" d="M100.3,138.1H59.9l-0.1-0.1l-32.5-23.6l-0.1-0.2L14.7,75.9l0.1-0.2l12.4-38.2l0.2-0.1l32.5-23.6h40.4l0.2,0.1
              L133,37.5l0.1,0.2l12.4,38.2l-0.1,0.2L133,114.3L100.3,138.1z M60.3,136.8h39.6l32-23.3l12.2-37.6l-12.2-37.6L99.9,15H60.3
              l-32,23.3L16.1,75.9l12.2,37.6L60.3,136.8z"/>
              <path class="st4" d="M98.1,131.1H62.2L62,131l-28.8-21L22.1,75.9l11.1-34.1l0.2-0.1l28.8-21h35.9l29,21.1l11.1,34.1L127.1,110
              L98.1,131.1z M62.6,129.8h35l28.3-20.6l10.9-33.3L126,42.6L97.6,22h-35L34.3,42.6L23.5,75.9l10.8,33.3L62.6,129.8z"/>
              <path class="st5" d="M95.8,124.1H64.5l-0.2-0.1l-25.2-18.3l-9.7-29.8l9.7-29.8l0.2-0.1l25.2-18.3h31.3l0.2,0.1l25.2,18.3l9.7,29.8
              l-9.7,29.8L95.8,124.1z M64.9,122.8h30.5l24.7-17.9l9.4-29l-9.4-29L95.4,29H64.9L40.2,46.9l-9.4,29l9.4,29L64.9,122.8z"/>
              <path class="st6" d="M93.5,117.1H66.8l-0.2-0.1l-21.5-15.6l-0.1-0.2L36.8,76l8.3-25.4l21.7-15.8h26.7l21.6,15.7l0.1,0.2l8.2,25.2
              l-8.3,25.4l-0.2,0.1L93.5,117.1z M67.2,115.8h25.9l21-15.2l8-24.7l-8-24.7L93.1,36H67.2l-21,15.2l-8,24.7l8,24.7L67.2,115.8z"/>
              <path class="st7" d="M91.2,110.1H69L51.1,97l-6.9-21.1l6.9-21.1l17.9-13h22.2l17.9,13l0.1,0.2l6.8,20.9L109.2,97L91.2,110.1z
                M69.4,108.8h21.4l17.3-12.6l6.6-20.3l-6.6-20.3L90.8,43H69.4L52.1,55.6l-6.6,20.3l6.6,20.3L69.4,108.8z"/>
              <path class="st8" d="M88.9,103H71.3L57.1,92.7l-5.4-16.8l5.4-16.8l14.3-10.4H89l14.3,10.4l5.4,16.8l-5.4,16.8L88.9,103z
                M71.7,101.8h16.8l13.6-9.9l5.2-16l-5.2-16L88.5,50H71.7l-13.6,9.9l-5.2,16l5.2,16L71.7,101.8z"/>
              <path class="st9" d="M86.7,96H73.6L63,88.3l-4-12.4l4-12.4l10.6-7.7h13.1l10.6,7.7l4,12.4l-4,12.4L86.7,96z M74,94.8h12.3l9.9-7.2
              l3.8-11.7l-3.8-11.7L86.3,57H74l-9.9,7.2l-3.8,11.7l3.8,11.7L74,94.8z"/>
              <path class="st10" d="M84.4,89h-8.5L69,84l-2.6-8.1l2.6-8.1l6.9-5h8.5l6.9,5l2.6,8.1L91.3,84L84.4,89z M76.3,87.8H84l6.3-4.5
              l2.4-7.3l-2.4-7.3L84,64.2h-7.7l-6.2,4.5L67.7,76l2.4,7.3L76.3,87.8z"/>
            </g>
            <g id="Toile_x5F_dessus_1_" class="st11">
              <rect x="80" y="-3.5" transform="matrix(0.9511 -0.309 0.309 0.9511 -19.5446 28.4853)" class="st1" width="0.3" height="158.9"/>

              <rect x="0.7" y="75.8" transform="matrix(0.8077 -0.5896 0.5896 0.8077 -29.353 61.8647)" class="st1" width="158.9" height="0.3"/>
              <rect x="0.7" y="75.8" class="st1" width="158.9" height="0.3"/>

              <rect x="0.7" y="75.8" transform="matrix(0.3056 -0.9522 0.9522 0.3056 -16.6112 129.0379)" class="st1" width="158.9" height="0.3"/>
              <rect x="80" y="-3.5" transform="matrix(0.5878 -0.809 0.809 0.5878 -28.3837 96.1504)" class="st1" width="0.3" height="158.9"/>
            </g>
            </svg>
          </div>
          <div class="red" :style="socialHousingRatePolygon"></div>
          <div class="lines">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 232 152" style="enable-background:new 0 0 232 152;" xml:space="preserve">
              <path id="Trace_x5F_bleu" class="line--blue" d="M37.6,75.5c33.2,17.4,118.3,52.2,155.8,52.2l0,0"/>
              <path id="Trace_x5F_rouge" class="line--red" d="M37.6,75.5C70.8,58.1,156,23.3,193.4,23.3l0,0"/>
            </svg>
          </div>
        </div>
        <div class="radar__legend">
          <p class="radar__legend__own-number">{{cityStats.social_housing_rate.toFixed(0)}}% de logements sociaux</p>
          <p class="radar__legend__objective22">22% objectif 2022</p>
        </div>
      </div>
      <div class="social-housing__legend">
        <div class="social-housing__legend--blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate recusandae temporibus facilis ut obcaecati dolorum fugiat ullam laborum culpa eligendi, velit minima, incidunt debitis magnam esse! Repellendus, beatae reiciendis.
        </div>
        <div class="social-housing__legend--red">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate recusandae temporibus facilis ut obcaecati dolorum fugiat ullam laborum culpa eligendi, velit minima, incidunt debitis magnam esse! Repellendus, beatae reiciendis.
        </div>
      </div>
      <div class="numbers">
        <div class="numbers__poverty">
          <p class="numbers__poverty__rate">
            {{ cityStats.poverty_rate !== null ? cityStats.poverty_rate : '-' }}%
          </p>
          <v-rating
            v-model="povertyRateOutOfTen"
            length="10"
            readonly
            class="numbers__poverty__icons"
          >
            <template v-slot:item="props">
              <v-icon
                :color="props.isFilled ? '#FE605A' : '#356a94'"
                v-text="'mdi-human-male'"
              ></v-icon>
            </template>
          </v-rating>
          <p class="numbers__poverty__legend">de la population sous le seuil de pauvreté</p>
        </div>
        <div class="numbers__unemployment">
          <p class="numbers__unemployment__rate">
            {{ cityStats.unemployment_rate }}%
          </p>
          <v-rating
            v-model="unemploymentRateOutOfTen"
            length="10"
            readonly
            class="numbers__unemployment__icons"
          >
            <template v-slot:item="props">
              <v-icon
                :color="props.isFilled ? '#FE605A' : '#356a94'"
                v-text="'mdi-human-male'"
              ></v-icon>
            </template>
          </v-rating>
          <p class="numbers__unemployment__legend">de la population active au chômage</p>
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
      top: calc(75px - (${this.cityStats.social_housing_rate * 0.75}px);
      left: calc(80.15px - (${this.cityStats.social_housing_rate * 0.75}px);
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

    .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 3px solid var(--v-color-base);
    border-bottom: 3px solid var(--v-color-base);
    padding: 1rem 0;

    @media screen and (max-width: 550px) {
      flex-direction: column;

      &__infos {
        display: flex;

        & p {
          margin: 0 1rem;
        }
      }
    }

      &__name {
        font-size: 1.75rem;
        font-weight: 500;
      }

      &__other-infos {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--v-color-base);

        & p {
          margin-bottom: 0;
        }
      }
    }

    .social-housing {
      margin: 3rem 0 3rem;
      position: relative;
      display: flex;

      .radar {
        position: relative;

        & .chart, & .chart svg {
          width: 160.3px;
          height: 152px;
        }

        .red {
          clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
          background-color: #E0605B;
          opacity: 0.45;
          position: absolute;
        }

        & .lines, & .lines svg {
          position: absolute;
          width: 232px;
          height: 152px;
          top: 0px;
          left: 21px;

          .line--blue {
            fill:none;stroke:#356A94;stroke-width:1.3132;stroke-linecap:round;stroke-miterlimit:10;
          }

          .line--red {
            fill:none;stroke:#E0605B;stroke-width:1.3132;stroke-linecap:round;stroke-miterlimit:10;
          }
        }
      }

      @media screen and (max-width: 550px) {
        align-items: center;
        flex-direction: column;

        & .radar {

          & .lines {
            transform: rotate(90deg);
            top: -22px;
            left: -35px;
            height: 232px;
            width: 152px;
          }
        }
      }

      .radar__legend {
        margin-left: 6rem;

        &__own-number {
          position: absolute;
          top: 9px;
          width: 200px;
        }

        &__objective22 {
          position: absolute;
          top: 114px;
          width: 200px;
        }

        @media screen and (max-width: 550px) {
          margin-left: 0;
          margin-top: 6rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          text-align: center;

          &__own-number {
            position: relative;
            top: 0;
            order: 2;
            width: inherit;
          }

          &__objective22 {
            position: relative;
            top: 0;
            width: inherit;
          }
        }
      }
    }

    .social-housing__legend {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
      margin-bottom: 3rem;
    }

    .numbers {
      display: flex;
      justify-content: space-evenly;
      text-align: center;

      @media screen and (max-width: 600px) {
        flex-direction: column;
      }

      &__unemployment__rate, &__poverty__rate {
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 4rem;
        margin-bottom: 0;
        line-height: 1.1;
      }

      &__unemployment__legend, &__poverty__legend {
        font-family: 'Playfair Display', sans-serif;
        font-weight: 400;
        font-size: 0.5rem;
        margin-bottom: 0;

        @media screen and (max-width: 600px) {
          margin-bottom: 1rem;
        }
      }
    }
  }

  .st0{fill:#356A94;}
  .st1{fill:#4E4E4D;}
  .st2{opacity:0.9;fill:#4E4E4D;enable-background:new    ;}
  .st3{opacity:0.8;fill:#4E4E4D;enable-background:new    ;}
  .st4{opacity:0.7;fill:#4E4E4D;enable-background:new    ;}
  .st5{opacity:0.6;fill:#4E4E4D;enable-background:new    ;}
  .st6{opacity:0.5;fill:#4E4E4D;enable-background:new    ;}
  .st7{opacity:0.4;fill:#4E4E4D;enable-background:new    ;}
  .st8{opacity:0.3;fill:#4E4E4D;enable-background:new    ;}
  .st9{opacity:0.2;fill:#4E4E4D;enable-background:new    ;}
  .st10{opacity:0.1;fill:#4E4E4D;enable-background:new    ;}
  .st11{opacity:0.5;}
  .st12{opacity:0.45;fill:#E0605B;enable-background:new    ;}

</style>
