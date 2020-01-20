<template>
  <div class="range-part">
    <span v-html="title" class="range-part__title">
    </span>
    <div>
      <label>
        от
        <input
          v-bind:value="value.from"
          v-on:input="changeRange('from', $event.target.value)"
          class="range-part__number"
          type="number"
        >
      </label>
      <label>
        до
        <input
          v-bind:value="value.to"
          v-on:input="changeRange('to', $event.target.value)"
          class="range-part__number"
          type="number"
        >
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
    },
    value: {
      type: Object,
      default () {
        return {
          from: '',
          to: ''
        }
      }
    }
  },
  methods: {
    changeRange (key, value) {
      this.$emit('input', {
        ...this.value,
        [key]: value
      })
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
  &__title {
    text-transform: capitalize;
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
