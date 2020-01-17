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
    <div class="respondents-form__footer">
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
    padding: 40px 30px 20px;
  }
  &__add {
  }
  &__footer {
    background: #F4F7F9;
    padding: 30px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .test {
      @include button($green, $white, $black);
      padding: 13px;
    }
    .next {
      @include buttonFull();
      font-weight: 600;
      padding: 15px 45px 15px 20px;
      position: relative;
      &:after {
        background: url("../../assets/icons/arrow-forward.svg") no-repeat;
        background-size: cover;
        content: "";
        position: absolute;
        width: 25px;
        height: 25px;
        top: 13px;
        right: 13px;
      }
    }
  }
}
</style>
