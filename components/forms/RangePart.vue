<template>
  <div class="range-part">
    <span v-html="title" class="range-part__title">
    </span>
    <div class="range-part__content">
      <label>
        от
        <input class="range-part__number" type="number">
      </label>
      <label>
        до
        <input class="range-part__number" type="number">
      </label>
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
  @include font(16);
  align-items: center;
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  &:not(:first-of-type) {
    position: relative;
    &:before {
      background: blue;
      border-radius: 7px;
      position: absolute;
      content: 'или';
      top: 5px;
      left: 0;
      padding: 10px;
    }
    .range-part__title {
      padding-left: 65px;
    }
  }
  &__title {
    width: 25%;
    margin-right: 5%;
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
</style>
