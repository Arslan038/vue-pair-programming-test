<template>
  <div class="base__input">
    <label :for="id">{{ label }}</label>
    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :id="id"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  label?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  modelValue: string;
}

withDefaults(defineProps<Props>(), {
  label: "Your input",
  placeholder: "Enter input",
  type: "text",
  name: "search",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const searchTerm = ref("");

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<style scoped lang="scss">
.base__input {
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-top: 10px;
    width: 280px;
    height: 30px;
    border-radius: 6px;
    border: 2px solid #ddd;
    padding: 4px 8px;
    outline: none;
  }
}
</style>
