<template>
  <div class="todo__item">
    <div class="todo__item-wrapper">
      <h6
        class="todo__item-title"
        :class="{ 'todo__item-title--checked': item.completed }"
      >
        {{ item.title }}
      </h6>
      <div class="todo__item-date">
        {{ item.date }}
      </div>
    </div>
    <div class="todo__item-checkbox">
      <input
        type="checkbox"
        v-model="item.completed"
        :id="`checkbox_${item.id}`"
      />
      <button class="todo__item-edit" type="button" @click="onEdit(item)">
        <i class="material-icons">edit</i>
      </button>
      <button class="todo__item-delete" type="button" @click="onDelete(item)">
        <i class="material-icons">delete</i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { TodoItem } from "@/interface/TodoItemInterface";
import TodoModel from "@/models/TodoModel";

@Component({})
export default class UiTodoListItem extends Vue {
  @Watch("item.completed")
  onCheckboxStateChange() {
    this.todoModel.updateCheckboxState();
  }

  @Prop({ required: true })
  item!: TodoItem;

  todoModel: TodoModel = new TodoModel();

  onDelete(item: TodoItem) {
    this.todoModel.delete(item);
  }

  onEdit(item: TodoItem) {
    this.todoModel.edit(item);
  }
}
</script>
