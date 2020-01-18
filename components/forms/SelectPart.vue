<template>
  <div class="select-part">
    <span v-html="title" class="select-part__title">
    </span>
    <select class="select-part__content">
      <option value="Range1">
        Value1
      </option>
      <option value="Value2">
        Value 2
      </option>
    </select>
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
  @include font(16);
  align-items: center;
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  &__title {
    text-transform: capitalize;
    width: 25%;
    margin-right: 5%;
  }
  &__content {
    @include font(16, 400, 30);
    @include borderFocus();
    padding: 10px;
    width: 65%;
  }
}
</style>
