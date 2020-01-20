<template>
  <div class="survey-add">
    <nav class="survey-add__nav">
      <span
        v-for="(item, index) in menu"
        :key="index"
        :class="item.link === activeTab ? 'nav__link--active' : ''"
        @click="activeTab = item.link"
        class="nav__link"
      >
        {{ item.title }}
      </span>
    </nav>
    <RespondentsForm v-if="activeTab === 'respondents'" />
  </div>
</template>

<script>
import RespondentsForm from '../../components/forms/RespondentsForm'
export default {
  components: { RespondentsForm },
  data () {
    return {
      activeTab: 'params',
      menu: [
        {
          title: 'Параметры',
          link: 'params'
        },
        {
          title: 'Вопросы',
          link: 'questions'
        },
        {
          title: 'Логика',
          link: 'logic'
        },
        {
          title: 'Условия',
          link: 'conditions'
        },
        {
          title: 'Респонденты',
          link: 'respondents'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.survey-add {
  margin-bottom: 150px;
  &__nav {
    display: flex;
    position: relative;
    &:after {
      background: $brightGreen;
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
    }
  }
  .nav {
    &__link {
      @include font(17);
      color: $brightGreen;
      padding: 20px 40px;
      cursor: pointer;
      transition: $transition;
      &:active,
      &:hover,
      &:target {
        opacity: 0.8;
      }
      &--active {
        position: relative;
        color: $black;
        text-shadow: 1px 0 0 currentColor;
        &:after {
          background: $brightGreen;
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 100%;
        }
      }
    }
  }
}
</style>
