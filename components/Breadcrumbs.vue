<template>
  <div
    v-if="$route.path !== '/'"
    class="breadcrumbs"
  >
    <nuxt-link :to="{ name: 'index' }">
      <img src="../assets/icons/home.svg" alt="Home">
    </nuxt-link>
    <nuxt-link
      v-for="(item, index) in routePath"
      :key="index"
      :to="{ name: menu[item].route }"
      class="breadcrumbs__item"
    >
      {{ menu[item].title }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  data () {
    return {
      menu: {
        surveys: {
          title: 'Опросы',
          route: 'surveys'
        },
        users: {
          title: 'Пользователи',
          route: 'users'
        },
        callcenter: {
          title: 'Колл-центр',
          route: 'callcenter'
        },
        blacklist: {
          title: 'Черные списки',
          route: 'blacklist'
        },
        'surveys-add': {
          title: 'Добавить опрос',
          route: 'surveys-add'
        }
      }
    }
  },
  computed: {
    routePath () {
      const pathArr = this.$route.path.replace('/', '').split('/')
      return pathArr.map((item, index) => {
        if (index === 0) {
          return item
        }
        return `${pathArr[0]}-${item}`
      })
    }
  }
}
</script>

<style lang="scss">
.breadcrumbs {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  &__item {
    @include font(14);
    color: $black;
    padding-left: 25px;
    position: relative;
    &:before {
      background: url("../assets/icons/arrow.svg");
      background-size: cover;
      content: '';
      position: absolute;
      top: -2px;
      left: 3px;
      width: 15px;
      height: 18px;
    }
  }
  .nuxt-link-exact-active {
    color: $darkGray;
  }
}
</style>
