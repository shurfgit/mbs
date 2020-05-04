import Vue from 'vue';
import Vuex from 'vuex';
import fantLabApi from './modules/fantLabApi';
import categories from './modules/categories';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		fantLabApi,
		categories
	}
});
