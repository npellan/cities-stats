<!-- eslint-disable max-len --->
<template>
  <main class="home">
      <h1 class="title">Inégalités et territoires</h1>
      <h2 class="subtitle">Comparez les statistiques dans les 57 communes du Grand Lyon</h2>
      <p class="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur sequi ab, doloremque maxime minus delectus qui obcaecati facilis voluptatibus, et perferendis odio deleniti excepturi repellat iusto sapiente consequatur recusandae!
      </p>
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

    h1 {
      font-size: 3rem;
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
