<template>
	<div class="full-height content-wrapper">
		<Toolbar></Toolbar>
		<div class="container-view table-responsive">
			<CategoryActions></CategoryActions>
			<table class="table">
				<tbody>
					<Categories
						class="category-item"
						v-for="category in visibleCategories"
						:item="category"
						:key="category.id"
						:data-id="category.id"
						:data-level="category.level"
					></Categories>
				</tbody>
			</table>
		</div>
		<div class="detailed-view">
			<Details></Details>
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
	methods: {},
	computed: {
		visibleCategories() {
			let a = this.$store.state.categories.filter(category => {
				let areParentsOpened = category => {
					if (category.parent === null) {
						return true;
					}
					let parentCategory = this.$store.getters.getCategoryById(category.parent);
					if (parentCategory.isOpened) {
						if (parentCategory.parent !== null) {
							return areParentsOpened(
								this.$store.getters.getCategoryById(category.parent)
							);
						}
						return true;
					}
					return false;
				};

				if (category.parent === null) {
					return true;
				}
				return areParentsOpened(category);
			});
			console.log(a);
			return a;
		}
	}
};
</script>

<style scoped>
.detailed-view {
	width: 30%;
	float: left;
	padding: 0 10px 10px;
	overflow: auto;
	border-left: 1px solid #ba4613;
	margin-top: 10px;
}

ul li {
	user-select: none;
}

.content-wrapper {
	height: 100%;
}

.content-wrapper.full-width .container-view {
	width: 100%;
}

.content-wrapper.small-toolbar .container-view {
	padding-left: 60px;
}

.content-wrapper.full-width .detailed-view {
	display: none;
}
</style>
