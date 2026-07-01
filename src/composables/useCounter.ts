import { onMounted, ref } from "vue";
import { COUNTER_KEY } from "../constants/counter";
import { safeParse, safeStringify } from "../utils/storage";

export function useCounter() {
    const count = ref(0);

    function increment() {
        count.value++;
        localStorage.setItem(COUNTER_KEY, safeStringify(count.value));
    }

    function decrement() {
        count.value--;
        localStorage.setItem(COUNTER_KEY, safeStringify(count.value));
    }

    function reset() {
        count.value = 0;
        localStorage.setItem(COUNTER_KEY, safeStringify(count.value));
    }

    function getCounter() {
        const countValue = safeParse(localStorage.getItem(COUNTER_KEY), 0);
        return countValue;
    }

    onMounted(() => {
        const countValue = getCounter();
        if (countValue) {
            count.value = countValue;
        }
    })

    return {
        count,
        increment,
        decrement,
        reset,
        getCounter
    }
}