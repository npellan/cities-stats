<template>
  <header class="header">
    <div class="logo">
      <router-link to="/"><img src="../assets/images/logo.svg" alt="logo"></router-link>
    </div>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item"><router-link to="/carte">Carte</router-link></li>
        <li class="menu__item"><router-link to="/methodologie">Méthodologie</router-link></li>
        <li class="menu__item"><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0 5rem;
  line-height: 1;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
}

.logo {
  line-height: 1;

  & img {
    width: 300px;
    height: 42px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 1rem;
  }
}

.menu {
  font-family: 'Playfair Display', serif;
  font-weight: 600;

  &__list {
  display: flex;

  @media screen and (max-width: 767px) {
    padding-left: 0;
  }

    & .menu__item a {
      text-decoration: none;
      color: inherit;
      padding-left: 3rem;

      @media screen and (max-width: 767px) {
        padding: 1.5rem;
      }

      &:hover {
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    }
  }
}

</style>
