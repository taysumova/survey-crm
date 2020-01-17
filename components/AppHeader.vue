<template>
  <div class="app-header">
    <input type="search" class="app-header__search" placeholder="Поиск по системе" />
    <figure class="app-header__user user">
      <img src="../assets/images/avatar.jpg" alt="Avatar">
      <figcaption>
        <b class="user__name">{{ user.name }}</b>
        <span class="user__role">{{ user.role }}</span>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      user: {
        name: 'Alexander C.',
        role: 'Администратор'
      }
    }
  }
}
</script>

<style lang="scss">
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0;
  &__search {
    @include font(18);
    background: url("../assets/icons/search.svg") no-repeat 98% 50%;
    border: 1px solid $gray;
    border-radius: 7px;
    height: 50px;
    padding: 20px;
    width: calc(100% - 300px);
    max-width: 650px;
    position: relative;
    &:focus {
      outline: none;
    }
    &:after {
      background: url("../assets/icons/search.svg") no-repeat;
      background-size: cover;
      content: "";
      position: absolute;
      right: 0;
      top: 10px;
      width: 18px;
      height: 18px;
    }
  }
  &__user {
    display: flex;
    img {
      border-radius: 50%;
      width: 60px;
      height: 60px;
      object-fit: cover;
    }
    figcaption {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      justify-content: center;
    }
  }
  .user {
    &__name {
      @include font(18, 600);
    }
    &__role {
      @include font(16, 400);
      color: $gray;
    }
  }
}
</style>
