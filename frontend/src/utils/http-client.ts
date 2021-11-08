import axios, { AxiosInstance } from 'axios';
import { showError } from './notification-utils';
import { Store } from 'vuex';
import { appStore, MainStateInterface } from '../store/index';
import { Loading, QSpinnerPuff } from 'quasar';
import { AppConstants } from '..//core/AppConstants';

const httpClient: AxiosInstance = axios.create({
  baseURL: process.env.BASE_API_URL,
});
//
// Spinner interceptor
//
httpClient.interceptors.request.use((response) => {
  if (response.baseURL && response.url) {
    (appStore as Store<MainStateInterface>).commit(
      `${AppConstants.UiModule}/${AppConstants.Ui.MutationAddPendingRequest}`,
      response.baseURL + response.url
    );
  }
  Loading.show({
    spinner: QSpinnerPuff,
    spinnerColor: 'amber',
    spinnerSize: 40,
  });
  return response;
});
httpClient.interceptors.response.use(
  (response) => {
    (appStore as Store<MainStateInterface>).commit(
      `${AppConstants.UiModule}/${AppConstants.Ui.MutationRemovePendingRequest}`,
      `${response.config.baseURL}${response.config.url}`
    );

    const pendingRequestsCount = (appStore as Store<MainStateInterface>)
      .getters[
      `${AppConstants.UiModule}/${AppConstants.Ui.GetPendingRequestsCount}`
    ] as number;
    if (pendingRequestsCount === 0) {
      Loading.hide();
    }
    return response;
  },
  async (error) => {
    (appStore as Store<MainStateInterface>).commit(
      `${AppConstants.UiModule}/${AppConstants.Ui.MutationRemovePendingRequest}`,
      error.config.baseURL + error.config.url
    );
    const pendingRequestsCount = (await (appStore as Store<MainStateInterface>)
      .getters[
      `${AppConstants.UiModule}/${AppConstants.Ui.GetPendingRequestsCount}`
    ]) as number;
    if (pendingRequestsCount === 0) {
      Loading.hide();
    }
    showError(
      error.config.url + ': ' + error?.message ||
        error.response?.data ||
        'General error! Please contact support!'
    );
    return Promise.reject(error);
  }
);

export { httpClient };
