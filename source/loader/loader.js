import {mapState} from 'vuex';
export default {
	computed: {
		...mapState('loader', ['loaderVisible'])
	}
};
