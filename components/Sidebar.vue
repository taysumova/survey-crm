<template>
  <div class="sidebar">
    <nuxt-link
      v-for="(item, index) in menu"
      :key="index"
      :to="{ name: item.link }"
      no-prefetch
      class="sidebar__nav-link"
    >
      {{ item.title }}
    </nuxt-link>
  </div>
</template>

<script>
import menu from '@/config/menu'

export default {
  name: 'Sidebar',
  computed: {
    menu () {
      return menu
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  width: 200px;
  &__nav-link {
    @include font(18);
    color: $gray;
    padding: 15px 30px 15px 0;
    position: relative;
    text-align: right;
    letter-spacing: -0.1px;
    word-break: break-word;
    max-width: 216px;
    transition: all 0.3s ease;
    &:active,
    &:hover,
    &:target {
      background: $green;
    }
  }
  &__link-back {
    @include font(18, 400);
    background: none;
    border: none;
    outline: none;
    display: block;
    color: $black;
    cursor: pointer;
    text-transform: uppercase;
    margin-top: 20px;
    text-align: right;
    width: 216px;
    padding-right: 20px;
  }
}
</style>
