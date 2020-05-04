import axios from 'axios';
import {GET_AUTHORS} from '@/constants/mutation-types';
import ROUTES from '@/constants/routes';

const http = axios.create({baseURL: 'https://api.fantlab.ru/'});

export default {
	state: () => ({
		authors: []
	}),
	mutations: {
		[GET_AUTHORS](state, authors) {
			state.authors = authors.filter((author) => author.id < 200);
		}
	},
	actions: {
		[GET_AUTHORS](context) {
			http.get(ROUTES.FANTLAB_API.AUTHORS).then((res) => {
				context.commit(GET_AUTHORS, res.data.list);
			}).catch((err) => {
				console.error(err);
			})
		}
	},
	getters: {}
}