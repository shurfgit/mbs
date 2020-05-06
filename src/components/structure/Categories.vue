<template>
	<tr
		@click="selectItem($event, item)"
		:class="activeClass"
		@dblclick="toggle($event)"
	>
		<td>
			<div>
				<div v-for="n in item.level" :key="n" class="spacer"></div>
				<span :class="isVisibleExpander + ' category-expander'" @click="toggle($event)">
					<font-awesome-icon v-if="item.isOpened" icon="minus-square"></font-awesome-icon
					><font-awesome-icon v-if="!item.isOpened" icon="plus-square"></font-awesome-icon>
				</span>
				<span><img class="image" :src="getImage(item)" /></span>
			</div>
		</td>
		<td><div class="name"><strong>{{ item.name }}</strong><br><small class="text-muted">{{ item.originalName }}</small></div></td>
		<td><div class="author">{{ item.author && item.author.length > 0 ? item.author.join(',') : '-' }}</div></td>
		<td><div class="score">{{ item.score ? item.score : '-' }}</div></td>
		<td><div class="description">{{ getDescription(item) }}</div></td>
	</tr>
</template>

<script>
export default {
	name: 'Categories',
	props: {
		item: Object
	},
	data: function() {
		return {};
	},
	methods: {
		toggle(event) {
			if (this.item.isCategory) {
				/*let toggleCategory = categoryId => {
					let category = this.$store.getters.getCategoryById(categoryId);
					category.isOpened = !category.isOpened;
					this.$store.commit('CATEGORY_ITEM_MUTATION', category);
				};
				this.item.children.forEach(categoryId => toggleCategory(categoryId));*/
				this.item.isOpened = !this.item.isOpened;
				this.$store.commit('CATEGORY_ITEM_MUTATION', this.item);
			}
			event.stopPropagation();
		},
		selectItem(event, item) {
			this.$store.commit('DETAIL_VIEW_ITEM_MUTATION', item);
		},
		getImage(item) {
			return item.image || 'noimage.png';
		},
		getDescription(item) {
			return item.description.length > 0
				? item.description.substring(0, 200) + '...'
				: '';
		}
	},
	computed: {
		activeClass() {
			return this.item.id === this.$store.state.selectedItem.id ? 'active' : '';
		},
		isVisibleExpander() {
			return this.item.isCategory && this.item.children && this.item.children.length ? 'visible' : 'invisible';
		}
	}
};
</script>

<style scoped>
ul {
	margin-left: 15px;
	user-select: none;
}

li {
	cursor: pointer;
}

li > div {
	width: 100%;
	display: flex;
	padding: 10px 7px;
	align-items: center;
	border: 1px solid transparent;
}

li > div:hover {
	background-color: #e8e8e8;
}

li div.active {
	background-color: #e8e8e8;
	border: 1px solid #ba4613;
}

li > div:hover .category-actions {
	visibility: visible;
}

.category-expander {
	cursor: pointer;
	margin-right: 10px;
	font-size: 16px;
	color: #ba4613;
}

.category-actions {
	visibility: hidden;
	width: 10px;
	margin-left: auto;
	margin-right: 3px;
}

.category-actions:hover .category-actions-list {
	display: block;
}

.image {
	margin: 0 5px;
	width: 50px;
}

.name {
	display: inline-block;
	margin-right: 5px;
	font-size: 12px;
	width: 150px;
	min-width: 130px;
	text-align: center;
}

.description,
.author,
.score {
	font-size: 12px;
	margin-right: 5px;
	text-align: center;
	flex-basis: 40px;
}

.description {
	text-align: left;
	flex-basis: auto;
}

td {
	padding: 10px;
	vertical-align: middle;
}

td:first-child {
	width: 140px;
}

td > div {
	display: flex;
	align-items: center;
}

.spacer {
	width: 12px;
	visibility: hidden;
}
</style>
