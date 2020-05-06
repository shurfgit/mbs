<template>
	<div v-if="this.$store.state.selectedItem.id">
		<div class="detail-main">
			<div class="detail-main-data">
				<div class="title">{{ this.$store.state.selectedItem.name || '' }}</div>
				<div class="original-title"><small class="text-muted">{{ this.$store.state.selectedItem.originalName  || ''}}</small></div>
				<div class="author">
					{{
						this.$store.state.selectedItem.author &&
						this.$store.state.selectedItem.author.length > 0
							? this.$store.state.selectedItem.author[0]
							: ''
					}}
				</div>
			</div>
			<div class="detail-main-image">
				<img
					:src="getImage(this.$store.state.selectedItem)"
					class="img-fluid float-left"
					:alt="this.$store.state.selectedItem.name"
					:title="this.$store.state.selectedItem.name"
				/>
			</div>
		</div>
		<div class="description">{{ this.$store.state.selectedItem.description || ''}}</div>
	</div>
</template>

<script>
export default {
	name: 'Details',
	data: function() {
		return {};
	},
	methods: {
		getImage(item) {
			return item.image || 'noimage.png';
		}
	}
};
</script>

<style scoped>
ul {
	margin-left: 15px;
}

.detail-main-image {
	width: 150px;
	margin-right: 10px;
	overflow: hidden;
	display: inline-block;
}

.detail-main-data {
	display: inline-block;
	vertical-align: top;
}

.detail-main {
	overflow: hidden;
}

.title {
	font-size: 20px;
	font-weight: bold;
}

.description {
	font-size: 14px;
}
</style>
