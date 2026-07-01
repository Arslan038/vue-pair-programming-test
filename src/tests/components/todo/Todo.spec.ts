import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { reactive } from 'vue';
import TodoList from '../../../components/todo/TodoList.vue';
import TodoItem from '../../../components/todo/TodoItem.vue';

// Mock the useTodo composable to return controlled mock items
vi.mock('../../../composables/useTodo.ts', () => ({
    useTodo: () => ({
        todoList: reactive({
            items: [
                { id: 1, title: 'Build Scalabale Vue App' },
                { id: 2, title: 'Use composables properly' },
                { id: 3, title: 'Add Unit/Integration Testing' }
            ]
        })
    })
}));

// Test Todo Items filtering
describe('TodoList.vue Filtering', () => {
    // Test with available item as per filter query
    it('filters items correctly based on the searchedTerm prop', () => {
        // Mount the component passing the "searchedTerm" prop
        const wrapper = mount(TodoList, {
            props: {
                searchedTerm: 'test'
            }
        });

        const items = wrapper.findAllComponents(TodoItem);

        expect(items.length).toBe(1);

        expect(items[0].props('item').title).toBe('Add Unit/Integration Testing');

        // No result element
        expect(wrapper.find('[data-test-id="no-result-message"]').exists()).toBe(false);
    });

    // Test with other query that has no matching item
    it('filters items correctly and display no result message based on the searchedTerm prop', () => {
        const wrapper = mount(TodoList, {
            props: {
                searchedTerm: 'something wrong'
            }
        });

        const items = wrapper.findAllComponents(TodoItem);

        expect(items.length).toBe(0);

        // No result element
        expect(wrapper.find('[data-test-id="no-result-message"]').exists()).toBe(true);
    });
});
