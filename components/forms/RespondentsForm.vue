<template>
  <div class="respondents-form">
    <h3 class="respondents-form__title">
      Добавить опрос
    </h3>
    <div>
      <div v-for="(item, index) in conditions" :key="index" class="respondents-form__block">
        <ConditionPart
          :conditionIndex="index"
          @condition-change="selectCondition"
          @remove="removeCondition"
        />
      </div>
    </div>
    <div class="respondents-form__add">
      <button @click="addCondition">
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
import ConditionPart from './ConditionPart'

export default {
  name: 'RespondentsForm',
  components: { ConditionPart },
  data () {
    return {
      conditions: []
    }
  },
  methods: {
    addCondition () {
      this.conditions.push({
        title: '',
        type: 'select',
        optionTitle: ''
      })
    },
    selectCondition (index, item) {
      this.conditions[index] = item
    },
    removeCondition (index) {
      this.conditions.splice(index, 1)
    }
  }
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
  &__block {
    padding: 15px 30px 30px;
    width: 100%;
    &:nth-of-type(1n) {
      @include colorBlock($brown);
    }
    &:nth-of-type(2n) {
      @include colorBlock($blue);
    }
    &:nth-of-type(3n) {
      @include colorBlock($green);
    }
    &:not(:first-of-type) {
      position: relative;
      &:before {
        @include font(16);
        border-radius: 7px;
        padding: 13px 20px;
        position: absolute;
        content: "И";
        top: -20px;
        left: 30px;
      }
    }
  }
  .block {
    &__options {
      &:not(:first-of-type) {
        position: relative;
        &:before {
          border-radius: 7px;
          position: absolute;
          content: 'или';
          top: 3px;
          left: 0;
          padding: 10px;
        }
        .select-part__title,
        .range-part__title {
          padding-left: 65px;
          text-transform: capitalize;
        }
      }
    }
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
