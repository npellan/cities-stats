<!-- eslint-disable max-len --->
<template>
  <main class="home">
      <h1 class="big-title">Comparez les statistiques sociales dans les 57 communes du Grand Lyon</h1>
      <router-link to="/carte" class="link"><button class="button">Accéder aux stats</button></router-link>
  </main>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss">
  .home {
    text-align: center;
    font-family: 'Playfair Display', serif;

    h1 {
      font-size: 3rem;
      width: 50%;
      margin: 0 auto;
      line-height: 1;

      @media screen and (max-width: 550px) {
        font-size: 1.75rem;
      }
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      margin: auto;
      max-width: 50%;
    }

    button {
      width: 200px;
      margin: 2rem 0;
      border: 1px solid var(--v-color-base);
      padding: 0.5rem 0;
      text-transform: uppercase;

      &:hover {
        color: var(--v-background-base);
        background-color: var(--v-color-base);
      }
    }

    & .link {
      color: var(--v-color-base);
      text-decoration: none;
    }
  }
</style>
