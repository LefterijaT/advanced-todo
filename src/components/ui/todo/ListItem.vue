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
        :id="`checkbox_${index}`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { TodoItem } from "@/interface/TodoItemInterface";

@Component({})
export default class UiTodoListItem extends Vue {
  @Prop({ required: true })
  index!: number;
  @Prop({ required: true })
  item!: TodoItem;
}
</script>
