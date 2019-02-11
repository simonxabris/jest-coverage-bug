import { mount, createLocalVue } from '@vue/test-utils';
import Loader from './loader.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('loader', () => {

  let loaderModule;
  let store;

  beforeEach(() => {
    loaderModule = {
      namespaced: true,
      state: {
        loaderVisible: true
      }
    }

    store = new Vuex.Store({
      modules: {
        loader: loaderModule
      }
    });
  });

  it('should display an image tag if loaderVisible is true', () => {
    const wrapper = mount(Loader, {localVue, store});

    expect(wrapper.contains('img')).toBe(true);
  });
});
