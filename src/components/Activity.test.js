import { shallowMount } from '@vue/test-utils'
import Activity from './Activity.vue'

const setup = () => {
  return shallowMount(Activity, {
    propsData: {
      activity: {}
    }
  })
}

describe('Activity', () => {
  it('renders correctly', () => {
    const wrapper = setup()

    expect(wrapper.element).toMatchSnapshot()
  })

  it('emits the proper event when adding new activity', () => {
    const wrapper = setup()
    const button = wrapper.find('[data-test="add-btn"]')

    button.trigger('click')

    expect(wrapper.emitted().add).toBeTruthy()
  })

  it('emits the appropriate event when getting activity', () => {
    const wrapper = setup()
    const button = wrapper.find('[data-test="get-btn"]')

    button.trigger('click')

    expect(wrapper.emitted().get).toBeTruthy()
  })
})
