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
  .select {
    padding: 0.5rem;
    border: 1px solid black;
    appearance: auto;
    -webkit-appearance: auto;
    -moz-appearance: auto;
  }
</style>
