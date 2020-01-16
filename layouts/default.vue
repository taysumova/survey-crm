<template>
  <div class="default">
    <sidebar />
    <nuxt />
  </div>
</template>

<style lang="scss">
.default {
}
</style>
<script>
import Sidebar from '../components/Sidebar'
export default {
  components: { Sidebar }
}
</script>
