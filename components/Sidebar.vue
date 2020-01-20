<template>
  <div class="sidebar">
    <nuxt-link :to="{ name: 'index' }" class="sidebar__logo" />
    <nuxt-link
      v-for="(item, index) in menu"
      :key="index"
      :to="{ name: item.link }"
      no-prefetch
      class="sidebar__nav-link"
    >
      <surveys-logo v-if="item.link === 'surveys'" />
      <users-logo v-if="item.link === 'users'" />
      <blacklist-logo v-if="item.link === 'blacklist'" />
      <callcenter-logo v-if="item.link === 'callcenter'" />
      {{ item.title }}
    </nuxt-link>
  </div>
</template>

<script>
import menu from '@/config/menu'
import SurveysLogo from '@/assets/icons/surveys.vue'
import UsersLogo from '@/assets/icons/users.vue'
import BlacklistLogo from '@/assets/icons/blacklist.vue'
import CallcenterLogo from '@/assets/icons/callcenter.vue'

export default {
  name: 'Sidebar',
  components: {
    SurveysLogo,
    UsersLogo,
    BlacklistLogo,
    CallcenterLogo
  },
  computed: {
    menu () {
      return menu
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  border-right: 0.5px solid rgba($gray, 0.7);
  border-bottom: 0.5px solid rgba($gray, 0.7);
  display: flex;
  flex-direction: column;
  width: 180px;
  padding-top: 25px;
  margin-right: 30px;
  .nuxt-link-exact-active {
    @include boxShadow($brightGreen);
    border: 1px solid $brightGreen;
    color: $brightGreen;
    .svg-color {
      fill: $brightGreen;
    }
  }
  .nuxt-link-active {
    @include boxShadow($brightGreen);
    border: 1px solid $brightGreen;
    color: $brightGreen;
    .svg-color {
      fill: $brightGreen;
    }
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
      color: $black;
      background: $gray;
      text-shadow: 1px 0 0 currentColor;
      .svg-color {
        fill: $black
      }
    }
    svg {
      margin-bottom: 5px;
    }
  }
}
</style>
