<template>
  <div class="breadcrumbs">
    <nuxt-link :to="{ name: 'index' }">
      <img src="../assets/icons/home.svg" alt="Home">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs'
}
</script>

<style lang="scss">
.breadcrumbs {
  display: flex;
}
</style>
