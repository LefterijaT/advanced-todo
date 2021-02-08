<template>
  <header class="app__header">
    <button class="app__button">
      <i class="material-icons">sort</i>
    </button>
    <h1 class="heading--app">ToDo list</h1>
    <button class="app__button" @click="onCreateTodo()">
      <i class="material-icons">add_circle_outline</i>
    </button>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoModel from "@/models/TodoModel";

@Component({})
export default class UiTodoHeader extends Vue {
  todoModel: TodoModel = new TodoModel();
  onCreateTodo() {
    this.todoModel.create();
  }
}
</script>
