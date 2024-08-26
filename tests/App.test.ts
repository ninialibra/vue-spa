import { mount, shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import router from '@/router'

describe('<App />', () => {
  test('should be render correctly', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router]
      }
    })

    const routerView = wrapper.findComponent({ name: 'RouterView' })

    expect(routerView.exists()).toBe(true)
  })
})
