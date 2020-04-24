import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		selectedItem: {},
		categories: [
			{
				id: 1,
				name: 'Categ 1',
				description: 'Descr',
				isCategory: true,
				children: [
					{
						id: 5,
						name: 'Categ 5',
						isCategory: false,
						description: 'Descr'
					},
					{
						id: 6,
						name: 'Categ 6',
						description: 'Descr',
						isCategory: true,
						children: [
							{
								id: 8,
								name: 'Categ 8',
								description: 'Descr',
								isCategory: true,
								children: [
									{
										id: 10,
										name: 'Categ 10',
										description: 'Descr',
										isCategory: true,
										children: [
											{
												id: 11,
												name: 'Item id 11',
												isCategory: false,
												description: 'Descr'
											}
										]
									},
									{
										id: 9,
										name: 'Item id 9',
										isCategory: false,
										description: 'Descr'
									}
								]
							},
							{
								id: 7,
								name: 'Item id 7',
								isCategory: false,
								description: 'Descr'
							}
						]
					}
				]
			},
			{
				id: 2,
				name: 'Categ 2',
				isCategory: true,
				description: 'Descr',
				children: []
			},
			{
				id: 3,
				name: 'Categ 3',
				isCategory: true,
				description: 'Descr',
				children: []
			},
			{
				id: 4,
				name: 'Categ 4',
				isCategory: true,
				description: 'Descr',
				children: []
			}
		]
	},
	mutations: {
		updateDetailsItem(state, item) {
			state.selectedItem = item;
		}
	},
	actions: {},
	modules: {}
});
