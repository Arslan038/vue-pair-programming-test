<template>
  <div class="todo__item">{{ item.title }}</div>
</template>

<script setup lang="ts">
import type { ITodo } from "../../types/todo";

interface Props {
  item: ITodo;
}

const { item } = defineProps<Props>();
</script>

<style scoped>
.todo__item {
  margin-top: 10px !important;
  text-align: left;
  padding: 10px;
  background: #dcdcdc;
  border-radius: 4px;
}
</style>
