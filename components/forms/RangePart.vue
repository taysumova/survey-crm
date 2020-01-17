<template>
  <div class="range-part">
    <div class="range-part__item condition">
      <span v-html="title" class="item__aside condition__title">
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
    <div class="range-part__item range">
      <span v-html="typeText" class="item__aside range__title">
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
    <div class="range-part__buttons">
      <button class="add">
        Добавить {{ typeText }}
      </button>
      <button class="delete">
        Удалить условие
      </button>
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
    typeText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.range-part {
  background: rgba($red, 0.05);
  padding: 10px 30px 40px;
  width: 100%;
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
  .condition {
    margin-bottom: 30px;
    &__title {
      font-weight: 600;
      margin-top: 20px;
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
  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 25%;
    width: 75%;
    margin-top: 40px;
    .add {
      @include iconButton(url("../../assets/icons/add.svg"), $brightGreen);
    }
    .delete {
      @include iconButton(url("../../assets/icons/delete.svg"), $red)
    }
  }
}
</style>
