<template>
	<h1>Counter</h1>
	<p>Current Count: {{ count }}</p>

	<BaseButton variant="primary" text="Increment" @click="increment" />
	<BaseButton variant="secondary" text="Decrement" @click="decrement" />
	<BaseButton variant="warning" text="Reset" @click="reset" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCounter } from '../../composables/useCounter';
import BaseButton from '../ui/BaseButton.vue';

const { count, increment, decrement, reset } = useCounter();

</script>

<style scoped lang="scss">
h1 {
	font-size: 2em;
	margin-bottom: 10px;
}

button {
	margin: 5px;
	padding: 10px;
	font-size: 1em;
}
</style>