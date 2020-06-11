import PersonalityTest from '@/components/PersonalityTest.vue';
import { createLocalVue, mount } from '@vue/test-utils';
import bootstrapPlugins from '@/plugins/bootstrap-vue';
import { BvPlugin } from 'bootstrap-vue';
import Vuex from 'vuex';
import store from '@/store';

const localVue = createLocalVue();

// Install plugins
bootstrapPlugins.forEach((plugin: BvPlugin) => {
  localVue.use(plugin);
});

localVue.use(Vuex);

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

describe('ProfileTest.vue', () => {
  let previousProgressValue = 0;

  const wrapper = mount(PersonalityTest, {
    store,
    localVue,
  });

  it('renders the component', () => {
    expect.assertions(2);

    const title = 'Select one word or phrase:';

    expect(wrapper.text()).toMatch(title);

    expect(wrapper.vm.$data.progressValue).toBeGreaterThan(0);

    // Update
    previousProgressValue = wrapper.vm.$data.progressValue;
  });

  it('updates the progress bar after an answer selection', async () => {
    expect.assertions(1);

    const answerButton = wrapper.find('.btn-answer');

    answerButton.trigger('click');

    // Wait at least 200ms to see new updated progress bar value
    await wait(200);

    expect(wrapper.vm.$data.progressValue).toBeGreaterThan(previousProgressValue);
  });
});
