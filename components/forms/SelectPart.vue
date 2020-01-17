<template>
  <div class="select-part">
    <div class="range-part__item type">
      <span v-html="title" class="item__aside type__title">
      </span>
      <select class="item__content">
        <option value="Range1">
          Value1
        </option>
        <option value="Value2">
          Value 2
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectPart',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.select-part {
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
  .type {
    margin-bottom: 30px;
    &__title {
      text-transform: capitalize;
    }
    select {
      @include font(16);
      @include borderFocus();
      padding: 10px;
    }
    option {
      @include font(16, 400, 30);
      padding: 10px;
    }
  }
}
</style>
