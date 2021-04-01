<template>
  <div class="form">
    <form>
      <label for="city">Choisissez une ville :</label>
      <select
        name="city"
        id="city"
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
  </div>
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
</style>
