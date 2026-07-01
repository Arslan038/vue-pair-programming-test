<template>
  <div class="todo__list">
    <template v-if="filteredItems.length">
      <div v-for="item in filteredItems" :key="item.id">
        <TodoItem :item="item" />
      </div>
    </template>

    <p v-else>No results found.</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTodo } from "../../composables/useTodo.ts";
import type { ITodo } from "../../types/todo";
import TodoItem from "./TodoItem.vue";

const { todoList } = useTodo();

interface Props {
  searchedTerm: string;
}

const { searchedTerm } = defineProps<Props>();

const filteredItems = computed(() => {
  const query = searchedTerm.trim().toLowerCase();

  return todoList.items.filter((item: ITodo) => item.title.toLowerCase().includes(query));
});
</script>

<style scoped lang="scss">
.todo__list {
  margin-top: 20px;
}
</style>
