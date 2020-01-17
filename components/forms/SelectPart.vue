<template>
  <div class="select-part">
    <div class="range-part__item condition">
      <span class="item__aside condition__title">
        Condition 1 v-html title
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
    <div class="range-part__item type">
      <span class="item__aside type__title">
        Type 1 v-html title
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
    <div class="select-part__buttons">
      <button class="add">
        Добавить (тип)
      </button>
      <button class="delete">
        Удалить условие
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectPart'
}
</script>

<style lang="scss">
.select-part {
  background: rgba($blue, 0.05);
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
  .type {
    margin-bottom: 30px;
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
