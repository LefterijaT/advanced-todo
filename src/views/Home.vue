<template>
  <div class="app__container">
    <div class="app__main">
      <ui-todo-header></ui-todo-header>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const UiTodoHeader = () => import("@/components/ui/todo/Header.vue");
@Component({
  components: {
    UiTodoHeader
  }
})
export default class Home extends Vue {}
</script>
