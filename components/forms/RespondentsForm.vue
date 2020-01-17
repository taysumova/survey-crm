<template>
  <div class="respondents-form">
    <h3 class="respondents-form__title">
      Добавить опрос
    </h3>
    <div class="respondents-form__parts">
      <RangePart title="Условие 1" type-text="диапазон" />
      <SelectPart title="Условие 2" type-text="тип" />
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
    color: $darkGray;
    padding: 30px 30px 20px;
  }
  &__add {
    padding: 40px 30px;
    button {
      @include borderFocus(rgba($gray, 30%));
      @include font(16);
      background: $white;
      color: $green;
      text-align: center;
      padding: 30px 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    img {
      display: block;
      margin: 0 auto;
      width: 40px;
      height: 40px;
    }
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
