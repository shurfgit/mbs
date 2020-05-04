<template>
	<!-- the demo root element -->
	<div>
		{{ selectedItem.name }}
		{{ selectedItem.description }}
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'Details',
	data: function() {
		return {};
	},
	computed: {
		...mapState({
			selectedItem: state => state.categories.selectedItem
		})
	},
	methods: {}
};
</script>

<style scoped>
ul {
	margin-left: 15px;
}
</style>
