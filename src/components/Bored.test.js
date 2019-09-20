import { mount, createLocalVue } from '@vue/test-utils'
import Bored from './Bored.vue'

import BTabs from 'bootstrap-vue'; // likely there is a way to make this global in jest config
jest.mock('@/api')

const setup = ({
  methods
} = {}) => {
  const localVue = createLocalVue();
  localVue.use(BTabs);

  return mount(Bored, {
    methods,
    localVue
  })
}

describe('Bored Container', () => {
  it('renders correctly', () => {
    const wrapper = setup()

    expect(wrapper.element).toMatchSnapshot()
  })

  it('calls correct methods when created', () => {
    const getRandomActivity = jest.fn()
    const getLocalStorageData = jest.fn()
    setup({
      methods: {
        getRandomActivity,
        getLocalStorageData
      }
    })

    expect(getRandomActivity).toHaveBeenCalledTimes(1)
    expect(getLocalStorageData).toHaveBeenCalledTimes(1)
  })
})
