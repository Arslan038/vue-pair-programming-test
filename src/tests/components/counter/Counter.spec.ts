import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { COUNTER_KEY } from '../../../constants/counter';
import Counter from '../../../components/counter/Counter.vue';

describe('Counter.vue Actions', () => {
  
  beforeEach(() => {
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    });
  });

  // Test for increment
  it('increments the count value when the increment button is clicked', async () => {
    vi.mocked(localStorage.getItem).mockReturnValue(null);
    const wrapper = mount(Counter);
    
    await wrapper.find('[data-test-id="btn-increment"]').trigger('click');

    expect(wrapper.find('[data-test-id="count-value"]').text()).toBe('1');
    expect(localStorage.setItem).toHaveBeenCalledWith(COUNTER_KEY, '1');
  });

  // Test for decrement
  it('decrements the count value when the decrement button is clicked', async () => {
    vi.mocked(localStorage.getItem).mockReturnValue('4');
    const wrapper = mount(Counter);
    
    await wrapper.find('[data-test-id="btn-decrement"]').trigger('click');

    expect(wrapper.find('[data-test-id="count-value"]').text()).toBe('3');
    expect(localStorage.setItem).toHaveBeenCalledWith(COUNTER_KEY, '3');
  });

  // Test for decrement button if count is 0
  it('should not decrement the count value if count is 0', async () => {
    vi.mocked(localStorage.getItem).mockReturnValue(null);
    const wrapper = mount(Counter);
    
    await wrapper.find('[data-test-id="btn-decrement"]').trigger('click');

    expect(wrapper.find('[data-test-id="count-value"]').text()).toBe('0');
  });

  // Test for reset
  it('resets the count value and clears storage when the reset button is clicked', async () => {
    vi.mocked(localStorage.getItem).mockReturnValue('10');
    const wrapper = mount(Counter);

    await wrapper.find('[data-test-id="btn-reset"]').trigger('click');

    expect(wrapper.find('[data-test-id="count-value"]').text()).toBe('0');
    expect(localStorage.removeItem).toHaveBeenCalledWith(COUNTER_KEY);
  });
});
