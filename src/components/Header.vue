<template>
  <div class="header">
    <h1 class="title">Inégalités et territoires</h1>
    <nav class="menu">
      <ul class="menu__list">
        <router-link to="/carte"><li class="menu__item">Méthodologie</li></router-link>
        <router-link to="/carte"><li class="menu__item">Contact</li></router-link>
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
  margin: 3rem 0 6rem;
}

.menu__list {
  display: flex;
}

.menu__item {
  padding-left: 1rem;
}
</style>
