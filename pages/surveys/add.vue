<template>
  <div class="survey-add">
    <nav>Navigation for add</nav>
    <RespondentsForm />
  </div>
</template>

<script>
import RespondentsForm from '../../components/forms/RespondentsForm'
export default {
  components: { RespondentsForm },
  data () {
    return {
      menu: [
      ]
    }
  }
}
</script>

<style lang="scss">
.survey-add {
  margin-bottom: 150px;
}
</style>
