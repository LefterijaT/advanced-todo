<template>
  <div class="app__container">
    <div class="app__main">
      <ui-todo-header></ui-todo-header>
      <div>
        <progress
          style="width: 100%"
          id="file"
          :value="taskCompletedPercentage"
          max="100"
          >{{ taskCompletedPercentage }}%</progress
        >
      </div>
      <ui-todo-list-item
        v-for="item in $store.state.todo.list"
        :key="item.id"
        :item="item"
      />
      <pre>
        {{ $store.state.todo.list }}
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const UiTodoHeader = () => import("@/components/ui/todo/Header.vue");
const UiTodoListItem = () => import("@/components/ui/todo/ListItem.vue");
import { TodoItem } from "@/interface/TodoItemInterface";
@Component({
  components: {
    UiTodoHeader,
    UiTodoListItem
  }
})
export default class Home extends Vue {
  get taskCompletedPercentage() {
    const list = this.$store.state.todo.list;
    const completedTasks = list.filter((task: TodoItem) => task.completed)
      .length;
    const totalTasks = list.length;
    return (completedTasks / totalTasks) * 100;
  }
}
</script>
