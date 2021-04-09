<template>
  <div class="header">
    <h1 class="title">Inégalités et territoires</h1>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item"><router-link to="/carte">Carte</router-link></li>
        <li class="menu__item"><router-link to="/carte">Méthodologie</router-link></li>
        <li class="menu__item"><router-link to="/carte">Contact</router-link></li>
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
