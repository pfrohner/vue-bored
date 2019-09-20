import { shallowMount } from '@vue/test-utils'
import List from './List.vue'

const setup = () => {
  return shallowMount(List, {
    propsData: {
      activities: [
        {
          key: 1,
          activity: 'test',
          type: 'unit',
          participants: 46
        }
      ]
    }
  })
}

describe('List', () => {
  it('renders correctly', () => {
    const wrapper = setup()

    expect(wrapper.element).toMatchSnapshot()
  })

  it('does not show delete button when list is empty', () => {
    const wrapper = setup()
    wrapper.setProps({
      activities: []
    })
    const button = wrapper.find('[data-test="clear-act-btn"]')

    expect(button.exists()).toBe(false)
  })

  it('shows a placedholder message when list is empty', () => {
    const wrapper = setup()
    wrapper.setProps({
      activities: []
    })
    const msg = wrapper.find('[data-test="empty-msg"]')

    expect(msg.exists()).toBe(true)
  })

  it('emits the correct event when deleting all activities', () => {
    const wrapper = setup()
    const button = wrapper.find('[data-test="clear-btn"]')

    button.trigger('click')

    expect(wrapper.emitted().clear).toBeTruthy()
  })
})
