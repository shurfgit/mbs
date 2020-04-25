<template>
	<!-- the demo root element -->
	<div>
		{{ this.$store.state.selectedItem.name }}
		{{ this.$store.state.selectedItem.description }}
	</div>
</template>

<script>
export default {
	name: 'Details',
	data: function() {
		return {};
	},
	methods: {}
};
</script>

<style scoped>
ul {
	margin-left: 15px;
}
</style>
