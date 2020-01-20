<template>
  <div class="breadcrumbs">
    <nuxt-link :to="{ name: 'index' }">
      <img src="../assets/icons/home.svg" alt="Home">
    </nuxt-link>
    {{ routePath }}
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  computed: {
    routePath () {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">
.breadcrumbs {
  display: flex;
}
</style>
