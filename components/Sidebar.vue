<template>
  <div class="sidebar">
    <span class="sidebar__logo"></span>
    <nuxt-link
      v-for="(item, index) in menu"
      :key="index"
      :to="{ name: item.link }"
      no-prefetch
      class="sidebar__nav-link"
    >
      <img :src="require(`../assets/icons/${item.link}.svg`)" alt="Link">
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
  padding-top: 25px;
  .nuxt-link-exact-active {
    border: 1px solid $brightGreen;
    color: $brightGreen;
  }
  &__logo {
    background: $red;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 0 auto 50px;
  }
  &__nav-link {
    @include font(16);
    border: 1px solid transparent;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $black;
    height: 100px;
    padding: 0 10px;
    margin: 10px;
    transition: all 0.3s ease;
    &:active,
    &:hover,
    &:target {
      border: 1px solid transparent;
      background: $gray;
      text-shadow: 1px 0 0 currentColor;
    }
    img {
      object-fit: cover;
      height: 40px;
      width: 40px;
      margin-bottom: 5px;
    }
  }
}
</style>
