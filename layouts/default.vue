<template>
  <div class="app">
    <sidebar />
    <div class="app__container">
      <app-header />
      <nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import AppHeader from '../components/AppHeader'
export default {
  components: { AppHeader, Sidebar }
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
