<template>
  <div class="todo__item">
    <div class="todo__item-wrapper">
      <h6 class="todo__item-title todo__item-title--checked">
        test
      </h6>
      <div class="todo__item-date">
          22.01.2021
      </div>
    </div>
    <div class="todo__item-checkbox">
      <input type="checkbox">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class UiTodoListItem extends Vue {}
</script>
