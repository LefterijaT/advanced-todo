<template>
  <div class="app__container">
    <div class="app__main">
      <ui-todo-header></ui-todo-header>
      <ui-todo-list-item v-for="n in 10" :key="n"></ui-todo-list-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const UiTodoHeader = () => import("@/components/ui/todo/Header.vue");
const UiTodoListItem = () => import("@/components/ui/todo/ListItem.vue")
@Component({
  components: {
    UiTodoHeader,
    UiTodoListItem
  }
})
export default class Home extends Vue {}
</script>
