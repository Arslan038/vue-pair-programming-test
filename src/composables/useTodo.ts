import type { ITodo } from "../types/todo";
import { TODOS_KEY, DEFAULT_TODOS } from "../constants/todo";
import { safeParse, safeStringify } from "../utils/storage";
import { onMounted, reactive } from 'vue';


export function useTodo() {
    const todoList = reactive<{ items: ITodo[] }>({ items: [] })

    function saveTodos() {
        try {
            localStorage.setItem(TODOS_KEY, safeStringify(DEFAULT_TODOS));
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Something went wrong";
            console.log(errorMessage)
            throw new Error(errorMessage);
        }
    }

    function loadTodos() {
        try {
            const rawItems = localStorage.getItem(TODOS_KEY);
            return safeParse(rawItems, []);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Something went wrong";
            console.log(errorMessage)
            throw new Error(errorMessage);
        }
    }

    onMounted(() => {
        const defaultList = [...loadTodos()];
        // If list doesn't exists set default list
        if (defaultList.length < 1) {
            saveTodos();
        }

        // Get list from local storage
        todoList.items = [...loadTodos()];
    })

    return {
        todoList,
        saveTodos,
        loadTodos
    }
}