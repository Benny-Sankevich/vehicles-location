import { AppConstants } from '../../core/AppConstants';
import { GetterTree } from 'vuex';
import { MainStateInterface } from '../index';
import { UIStateInterface } from './models';

const getters: GetterTree<UIStateInterface, MainStateInterface> = {
    [AppConstants.Ui.GetIsFormDirty]: (state) => {
        return state.isDirty
    },

    [AppConstants.Ui.GetPendingRequestsCount]: (state) => {
        return state.pendingHttpRequests.length
    },   
};

export default getters;
