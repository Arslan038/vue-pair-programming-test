<template>
	<HelloWorld />
	<Counter />

  <div class="container">
    <MyTodos />
  </div>
  
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Counter from './components/counter/Counter.vue';
import MyTodos from './components/todo/MyTodos.vue';
</script>

<style lang="scss">
#app {
  text-align: center;
  margin-top: 60px;
}
</style>