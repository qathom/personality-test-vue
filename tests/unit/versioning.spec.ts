import Versioning from '@/components/Versioning.vue';
import { createLocalVue, mount } from '@vue/test-utils';
import { version } from '../../package.json';

const localVue = createLocalVue();

describe('Versioning.vue', () => {
  const wrapper = mount(Versioning, {
    propsData: {
      version,
    },
    localVue,
  });

  it('renders the right version', () => {
    expect.assertions(1);

    expect(wrapper.text()).toMatch(version);
  });
});
