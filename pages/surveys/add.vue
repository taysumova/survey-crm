<template>
  <form class="survey-add">
    <nav>Navigation for add</nav>
    <h3 class="survey-add__title">
      Добавить опрос
    </h3>
    <SurveyForm />
  </form>
</template>

<script>
import SurveyForm from '../../components/forms/SurveyForm'
export default {
  components: { SurveyForm }
}
</script>

<style lang="scss">
.survey-add {
  &__title {
    @include font(18, 600);
    color: $gray;
    padding: 40px 20px 20px;
  }
}
</style>
