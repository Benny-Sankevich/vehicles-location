import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex';
import { UIStateInterface } from './ui/models';
import { AppConstants } from '../core/AppConstants';
import ui from './ui';

export interface MainStateInterface {
  [AppConstants.UiModule]: UIStateInterface;
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<MainStateInterface>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<MainStateInterface>> =
  Symbol('nails-vuex-key');

let appStore: any;
export default store(function (/* { ssrContext } */) {
  const Store = createStore<MainStateInterface>({
    modules: {
      [AppConstants.UiModule]: ui,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
  });
  appStore = Store;
  return Store;
});

export { appStore };

export function useStore() {
  return vuexUseStore(storeKey);
}
