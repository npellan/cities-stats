<template>
    <form class="form">
      <select
        name="city"
        id="city"
        class="select"
        placeholder="Sélectionnez une ville"
        @change="selectCity(selectedCity)"
        v-model="selectedCity"
      >
        <option
          v-for="city of cities"
          :key="city.id"
          :id="city.id"
          :value="city.id"
        >
        {{city.name}}
        </option>
        <span class="focus"></span>
      </select>
    </form>
</template>

<script>
export default {
  name: 'Form',
  methods: {
    selectCity(cityId) {
      this.$store.commit('SELECT_CITY', cityId);
    },
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
    selectedCity: {
      get() {
        return this.$store.state.selectedCity;
      },
      set(cityId) {
        this.$store.commit('SELECT_CITY', cityId);
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  select {
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;

    // Stack above custom arrow
    z-index: 1;

    // Remove dropdown arrow in IE10 & IE11
    // @link https://www.filamentgroup.com/lab/select-css.html
    &::-ms-expand {
      display: none;
    }

    // Remove focus outline, will add on alternate element
    outline: none;
  }

  .select {
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;

  min-width: 200px;
  max-width: 400px;

  border: 1px solid #979797;
  padding: 0.25em 0.5em;

  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;

  // Custom arrow
  &:after {
    content: "";
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: #4e4e4d;
    clip-path: polygon(100% 0, 0 0, 50% 100%);
  }
}

select,
  .select:after {
    grid-area: select;
  }
</style>
