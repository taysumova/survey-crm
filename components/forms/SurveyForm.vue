<template>
  <div class="survey-form">
    <RangePart />
    <SelectPart />
  </div>
</template>

<script>
import RangePart from './RangePart'
import SelectPart from './SelectPart'
export default {
  name: 'SurveyForm',
  components: { SelectPart, RangePart }
}
</script>

<style lang="scss">
.survey-form {
}
</style>
