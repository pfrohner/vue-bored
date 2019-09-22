import { mount, createLocalVue } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import BTabs from 'bootstrap-vue' // make this global in jest config?

import Bored from './Bored.vue'

const response = {
  data: {
    activity: "Learn Express.js",
    type: "education",
    participants: 1,
  }
}

const setup = ({
  methods
} = {}) => {
  const localVue = createLocalVue()
  localVue.use(BTabs);

  return mount(Bored, {
    mocks: {
      $http: {
        get: () => Promise.resolve(response)
      }
    },
    methods,
    localVue
  })
}

describe('Bored', () => {
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

  it('fetches a random activity from the API', async () => {
    const wrapper = setup()
    await flushPromises()

    expect(wrapper.vm.newActivity).toBe(response.data)
  })
})
