import type { ITodo } from "../types/todo";

export const TODOS_KEY = "todoListItems";

export const DEFAULT_TODOS: ITodo[] = [
    {
        id: 1,
        title: 'Build Scalabale Vue App'
    },
    {
        id: 2,
        title: 'Use composables properly'
    },
    {
        id: 3,
        title: 'Components must have single responsibility'
    },
    {
        id: 4,
        title: 'App should be fully testable and extendable'
    },
    {
        id: 5,
        title: 'Add Unit Testing'
    }
]