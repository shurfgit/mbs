<template>
	<!-- the demo root element -->
	<div v-if="this.$store.state.selectedItem.id">
		<div class="detail-main">
			<div class="detail-main-image">
				<img
					v-if="this.$store.state.selectedItem.image"
					:src="this.$store.state.selectedItem.image"
					class="img-fluid rounded float-left"
					:alt="this.$store.state.selectedItem.name"
					:title="this.$store.state.selectedItem.name"
				/>
			</div>

			<div class="detail-main-data">
				Название: {{ this.$store.state.selectedItem.name }}
			</div>
		</div>
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

.detail-main-image {
	width: 150px;
	margin-right: 10px;
}

.detail-main {
	overflow: hidden;
}
</style>
