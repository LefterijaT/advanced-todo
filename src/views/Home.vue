<template>
  <div class="app__container">
    <div class="app__main">
      <header class="app__header">
        <h1 class="heading--app">ToDo list</h1>
        <button class="app__add-button"></button>
      </header>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>
