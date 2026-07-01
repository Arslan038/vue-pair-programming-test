<template>
    <button :class="variant" @click="handleClick">{{ text }}</button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'button' | 'reset'
  variant?: 'primary' | 'secondary' | 'warning'
  text?: string
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  text: 'Submit'
})

const emit = defineEmits(['click'])

const handleClick = () => {
    emit('click');
}
</script>

<style scoped lang="scss">
button {
    padding: 10px 15px;
    margin: 5px;
    border-radius: 5px;
    color: white;
    cursor: pointer;

    &.primary {
        background-color: #007bff;

        &:hover {
            background-color: #0056b3;
        }
    }

    &.secondary {
        background-color: #e6600d;
        &:hover {
            background-color: #a13f02;
        }
    }

    &.warning {
        background-color: #e2e60d;
        color: black;
        &:hover {
            background-color: #7b7d05;
        }
    }
}
</style>