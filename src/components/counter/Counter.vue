<template>
	<h1>Counter</h1>
	<p>Current Count: <span data-test-id="count-value">{{ count }}</span></p>

	<BaseButton variant="primary" text="Increment" data-test-id="btn-increment" @click="increment" />
	<BaseButton variant="secondary" text="Decrement" data-test-id="btn-decrement" @click="decrement" />
	<BaseButton variant="warning" text="Reset" data-test-id="btn-reset" @click="reset" />
</template>

<script setup lang="ts">
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