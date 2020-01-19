<template>
  <div class="select-part">
    <span v-html="title" class="select-part__title">
    </span>
    <select
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      class="select-part__content"
    >
      <option
        value=""
        hidden
      >
        Выберите {{ title }}
      </option>
      <option
        v-for="(item, index) in config"
        :key="index"
        :value="item"
      >
        {{ item }}
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
    },
    value: {
      type: String,
      default: ''
    },
    config: {
      type: Array,
      default () {
        return []
      }
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
