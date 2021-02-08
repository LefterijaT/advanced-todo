<template>
  <div class="app__container">
    <div class="app__main">
      <ui-todo-header></ui-todo-header>
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
@Component({
  components: {
    UiTodoHeader,
    UiTodoListItem
  }
})
export default class Home extends Vue {}
</script>
