import { shallowMount } from '@vue/test-utils';
import Welcome from '@/components/Welcome.vue';
import { createLocalVue, mount } from '@vue/test-utils'
import bootstrapPlugins from '@/plugins/bootstrap-vue';
import { BvPlugin } from 'bootstrap-vue';

const localVue = createLocalVue()

// install plugins
bootstrapPlugins.forEach((plugin: BvPlugin) => {
  localVue.use(plugin);
});

describe('Welcome.vue', () => {
  const testPath = '/test';
  const $route = {
    path: testPath,
  };

  const wrapper = mount(Welcome, {
    localVue,
    mocks: {
      $route,
    },
    stubs: ['router-link', 'router-view'],
  });

  it('renders the component', () => {
    const title = 'Personality test';

    expect(wrapper.text()).toMatch(title);

    const testButton = wrapper.find('.welcome .btn');

    testButton.trigger('click');

    expect(wrapper.vm.$route.path).toBe(testPath);
  });

  it('redirects the user to the personality test', () => {
    const testButton = wrapper.find('.welcome .btn');

    testButton.trigger('click');

    expect(wrapper.vm.$route.path).toBe(testPath);
  });
});
