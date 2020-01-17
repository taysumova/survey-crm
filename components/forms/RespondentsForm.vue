<template>
  <div class="respondents-form">
    <h3 class="respondents-form__title">
      Добавить опрос
    </h3>
    <div class="respondents-form__parts">
      <RangePart />
      <SelectPart />
    </div>
    <div class="respondents-form__add">
      <button>
        <img src="../../assets/icons/add-dark.svg" alt="Add">
        <span>
          Нажмите, чтобы добавить новое условие выборки. <br />
          Все условия связываются между собой логическим "И"
        </span>
      </button>
    </div>
    <div class="respondents__footer">
      <button class="test">
        Протестировать опрос
      </button>
      <button class="next">
        Далее
      </button>
    </div>
  </div>
</template>

<script>
import RangePart from './RangePart'
import SelectPart from './SelectPart'
export default {
  name: 'RespondentsForm',
  components: { SelectPart, RangePart }
}
</script>

<style lang="scss">
.respondents-form {
  box-shadow: $box-shadow;
  &__title {
    @include font(18, 600);
    color: $gray;
    padding: 40px 20px 20px;
  }
}
</style>
