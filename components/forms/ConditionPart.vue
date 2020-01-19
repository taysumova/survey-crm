<template>
  <div class="condition-part">
    <div class="condition-part__main">
      <span class="condition-part__title">
        Условие {{ conditionIndex + 1 }}
      </span>
      <select
        v-model="condition"
        class="condition-part__select"
      >
        <option
          value=""
          hidden
        >
          Выберите условие
        </option>
        <option
          v-for="(item, index) in config"
          :key="index"
          :value="item.value"
        >
          {{ item.title }}
        </option>
      </select>
    </div>
    <div>
      <div v-for="(opt, optIndex) in selectedCond.selectedOps" class="block__options">
        <RangePart
          v-if="selectedCond.type === 'range'"
          :title="`${selectedCond.optionTitle} ${optIndex + 1}`"
        />
        <SelectPart
          v-else
          :title="`${selectedCond.optionTitle}
              ${optIndex + 1}`"
          :config="selectedCond.options"
        />
      </div>
    </div>
    <div class="condition-part__buttons">
      <button v-if="condition" @click="addType()" class="add">
        Добавить {{ selectedCond.optionTitle }}
      </button>
      <button @click="$emit('remove', conditionIndex)" class="delete">
        Удалить условие
      </button>
    </div>
  </div>
</template>

<script>
import surveyOptions from '../../config/surveyOptions.js'
import RangePart from './RangePart'
import SelectPart from './SelectPart'
export default {
  name: 'ConditionPart',
  components: { SelectPart, RangePart },
  props: {
    conditionIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      condition: '',
      selectedCond: {
        selectedOps: []
      }
    }
  },
  computed: {
    config () {
      return surveyOptions
    }
  },
  watch: {
    condition (next) {
      if (next) {
        this.selectCondition()
      }
    }
  },
  methods: {
    selectCondition () {
      const configCond = this.config.find(item => item.value === this.condition)
      this.selectedCond = {
        ...configCond,
        selectedOps: []
      }
      this.$emit('condition-change', this.conditionIndex, this.selectedCond)
    },
    addType () {
      this.selectedCond.selectedOps.push('Option')
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
    @include font(18, 600);
    margin-top: 20px;
    width: 25%;
    margin-right: 5%;
  }
  &__select {
    @include font(16);
    @include borderFocus();
    padding: 10px;
    width: 70%;
    option {
      @include font(16, 400, 30);
      padding: 10px;
    }
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 30%;
    width: 70%;
    margin-top: 40px;
    button:only-child {
      margin-left: auto;
    }
    .add {
      @include iconButton(url("../../assets/icons/add.svg"), $brightGreen);
    }
    .delete {
      @include iconButton(url("../../assets/icons/delete.svg"), $red)
    }
  }
}
</style>
