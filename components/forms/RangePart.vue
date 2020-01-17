<template>
  <div class="range-part">
    <div class="range-part__item range">
      <span v-html="title" class="item__aside range__title">
      </span>
      <div class="item__content range__values">
        <label>
          от
          <input class="range__number" type="number">
        </label>
        <label>
          до
          <input class="range__number" type="number">
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RangePart',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.range-part {
  &__item {
    @include font(16);
    align-items: center;
    display: flex;
    width: 100%;
  }
  .item {
    &__aside {
      width: 20%;
      margin-right: 5%;
    }
    &__content {
      width: 75%;
    }
  }
  .range {
    &__title {
      text-transform: capitalize;
    }
    &__number {
      @include font(16);
      @include borderFocus();
      padding: 15px 20px;
      width: 70px;
      &:first-of-type {
        margin-right: 20px;
      }
    }
  }
}
</style>
