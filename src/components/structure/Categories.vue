<template>
	<!-- the demo root element -->
	<li>
		<div :class="{ bold: item.isCategory }" @click="selectItem(item)">
			{{ item.name }}
			<span v-if="item.isCategory && item.children.length" @click="toggle"
				>[{{ isOpen ? '-' : '+' }}]</span
			>
		</div>
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
		toggle: function() {
			if (this.item.isCategory) {
				this.isOpen = !this.isOpen;
			}
		},
		selectItem: function(item) {
			this.$store.commit('updateDetailsItem', item);
		}
	}
};
</script>

<style scoped>
ul {
	margin-left: 15px;
}
</style>
