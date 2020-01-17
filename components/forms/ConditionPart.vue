<template>
  <div class="condition-part">
    <div class="condition-part__main">
      <span v-html="title" class="condition-part__title">
      </span>
      <select class="condition-part__select">
        <option value="Range1">
          Value1
        </option>
        <option value="Value2">
          Value 2
        </option>
      </select>
    </div>
    <slot></slot>
    <div class="condition-part__buttons">
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
  name: 'ConditionPart',
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
.condition-part {
  @include font(16);
  &__main {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
  }
  &__title {
    font-weight: 600;
    margin-top: 20px;
    width: 20%;
    margin-right: 5%;
  }
  &__select {
    @include font(16);
    @include borderFocus();
    padding: 10px;
    width: 75%;
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
