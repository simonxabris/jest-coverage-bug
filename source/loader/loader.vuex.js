import {SET_LOADER_VISIBLE} from 'common/constants';

const loaderState = {
	loaderVisible: false
};

const actions = {
	setLoaderVisible({commit}, isVisible) {
		commit(SET_LOADER_VISIBLE, isVisible);
	}
};

const mutations = {
	[SET_LOADER_VISIBLE](state, isVisible) {
		state.loaderVisible = isVisible;
	}
};

export default {
	namespaced: true,
	state: loaderState,
	actions,
	mutations
};
