<template>
  <div class="header">
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
  </div>
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
  margin: 3rem 0 5rem;
}

.logo img {
  width: 100%;
}

.menu {
  font-family: 'Playfair Display', serif;
  font-weight: 600;

  & .menu__list {
  display: flex;

    & .menu__item a {
      text-decoration: none;
      color: inherit;
      padding-left: 3rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

</style>
