<template>
  <div class="app">
    <sidebar />
    <div class="app__container">
      <app-header />
      <breadcrumbs />
      <nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import AppHeader from '../components/AppHeader'
import Breadcrumbs from '../components/Breadcrumbs'
export default {
  components: { Breadcrumbs, AppHeader, Sidebar }
}
</script>

<style lang="scss">
.app {
  display: flex;
  &__container {
    width: calc(100% - 200px);
  }
}
</style>
