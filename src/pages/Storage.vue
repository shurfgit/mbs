<template>
	<div class="container-view">
		<ul class="structure-view">
			<Categories
				class="category-item"
				v-for="category in categories"
				:item="category"
				:key="category.id"
			></Categories>
		</ul>
		<div class="detailed-view">
			<Details></Details>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Details from '../components/structure/Details';
import Categories from '../components/structure/Categories';
import { mapState } from 'vuex'
export default {
	name: 'Storage',
	components: {
		Details,
		Categories
	},
	data: function() {
		return {};
	},
	computed: {
		...mapState({
			authors: state => state.fantLabApi.authors,
			categories: state => state.categories.categories
		})
	},
	methods: {}
};
</script>

<style scoped>
.structure-view {
	float: left;
	width: 70%;
	padding: 10px;
	overflow: auto;
}

.detailed-view {
	width: 30%;
	float: left;
	padding: 10px;
	overflow: auto;
	border-left: 1px solid #303a43;
}

.container-view {
	padding-left: 60px;
}

ul ul {
	margin-left: 15px;
}
</style>
