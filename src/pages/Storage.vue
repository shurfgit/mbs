<template>
	<div class="full-height">
		<Toolbar></Toolbar>
		<div class="container-view">
			<ul class="structure-view">
				<CategoryActions></CategoryActions>
				<Categories
					class="category-item"
					v-for="category in this.$store.state.categories"
					:item="category"
					:key="category.id"
				></Categories>
			</ul>
			<div class="detailed-view">
				<Details></Details>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Details from '../components/structure/Details';
import Categories from '../components/structure/Categories';
import Toolbar from '../components/layout/Toolbar';
import CategoryActions from '../components/actionMenus/CategoryActions';

export default {
	name: 'Storage',
	components: {
		Details,
		Categories,
		Toolbar,
		CategoryActions
	},
	data: function() {
		return {};
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
	padding: 0 10px 10px;
	overflow: auto;
	border-left: 1px solid #351728;
	margin-top: 10px;
}

.container-view {
	padding-left: 160px;
}

ul li {
	user-select: none;
}

.full-height {
	height: 100%;
}
</style>
