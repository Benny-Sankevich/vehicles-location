import { AppConstants } from '../../core/AppConstants';
import { MutationTree } from 'vuex';
import { UIStateInterface } from './models';

const mutation: MutationTree<UIStateInterface> = {
  [AppConstants.Ui.MutationSetIsFormDirty]: (state, payload: boolean) => {
    state.isDirty = payload;
  },

  [AppConstants.Ui.MutationAddPendingRequest]: (state, payload: string) => {
    state.pendingHttpRequests.push(payload);
  },

  [AppConstants.Ui.MutationRemovePendingRequest]: (state, payload: string) => {
    const index = state.pendingHttpRequests.findIndex((x) => x === payload);
    if (index > -1) {
      state.pendingHttpRequests.splice(index, 1);
    }
  },
};

export default mutation;
