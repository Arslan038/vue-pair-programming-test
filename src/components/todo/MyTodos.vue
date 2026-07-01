<template>
    <div>
        <h2>Todo List</h2>
        <BaseInput
            v-model="searchedTerm"
            id="filter"
            label="Filter Items"
            type="text"
            placeholder="Enter search query"
         />

         <TodoList :searchedTerm="searchedTerm" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from '../ui/BaseInput.vue';
import TodoList from './TodoList.vue';

const searchedTerm = ref('');

</script>