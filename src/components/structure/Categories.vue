<template>
	<!-- the demo root element -->
	<li>
		<span @click="selectItem($event, item)" :class="activeClass" @dblclick="toggle($event)">
			<div
				class="category-expander float-left"
				v-if="item.isCategory && item.children && item.children.length"
				@click="toggle($event)"
			>
				<font-awesome-icon v-if="isOpen" icon="minus"></font-awesome-icon
				><font-awesome-icon
					v-if="!isOpen"
					icon="plus"
				></font-awesome-icon>
			</div>
			<div class="category-name">
				{{ item.name }}
			</div>
			<font-awesome-icon
				class="category-actions float-right"
				icon="ellipsis-h"
			></font-awesome-icon>
		</span>
		<ul v-show="isOpen" v-if="item.isCategory">
			<Categories
				class="item"
				v-for="category in item.children"
				:item="category"
				:key="category.id"
				@click="selectItem(item)"
			></Categories>
		</ul>
	</li>
</template>

<script>
export default {
	name: 'Categories',
	props: {
		item: Object
	},
	data: function() {
		return {
			isOpen: false
		};
	},
	methods: {
		toggle: function(event) {
			if (this.item.isCategory) {
				this.isOpen = !this.isOpen;
			}
			event.stopPropagation();
		},
		selectItem: function(event, item) {
			this.$store.commit('DETAIL_VIEW_ITEM_MUTATION', item);
		}
	},
	computed: {
		activeClass() {
			return this.item.id === this.$store.state.selectedItem.id ? 'active' : '';
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

li > span {
	width: 100%;
	display: flex;
	padding: 0 7px;
	align-items: center;
}

li > span:hover {
	background-color: #cdc7ff;
}

li span.active {
	background-color: #ff2497;
}

li > span:hover .category-actions {
	display: block;
}

.category-expander {
	cursor: pointer;
	width: 10px;
	margin-right: 5px;
	font-size: 10px;
}

.category-actions {
	display: none;
	width: 10px;
	margin-left: auto;
	margin-right: 3px;
}

.category-actions:hover .category-actions-list {
	display: block;
}

.category-name {
	display: inline-block;
	margin-right: 5px;
}
</style>
