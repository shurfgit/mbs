<template>
	<div class="btn-group main-toolbar" role="toolbar" aria-label="Basic example">
		<button type="button" class="btn" data-toggle="modal" data-target="#exampleModalCenter">
			<font-awesome-icon icon="plus"></font-awesome-icon>Add
		</button>
		<button type="button" class="btn" data-toggle="modal" data-target="#exampleModalCenter">
			<font-awesome-icon icon="minus"></font-awesome-icon>Remove
		</button>
		<button type="button" class="btn" data-toggle="modal" data-target="#exampleModalCenter">
			<font-awesome-icon icon="pencil-alt"></font-awesome-icon>Edit
		</button>
		<button type="button" class="btn" style="margin-left: auto;" @click="toggleArea">
			<font-awesome-icon :icon="this.isWorkAreaExpanded ? 'angle-double-left' : 'angle-double-right'"></font-awesome-icon>{{ this.isWorkAreaExpanded ? 'Collapse' : 'Expand' }}
		</button>
		<AddCategoryItem></AddCategoryItem>
	</div>
</template>

<script>
import AddCategoryItem from '../forms/AddCategoryItem';

export default {
	name: 'CategoryActions',
	data: function() {
		return {
			isWorkAreaExpanded: false
		};
	},
	components: {
		AddCategoryItem
	},
	methods: {
		toggleArea() {
			this.isWorkAreaExpanded = !this.isWorkAreaExpanded;
			document.querySelector('.content-wrapper').classList[this.isWorkAreaExpanded ? 'add' : 'remove']('full-width');
		}
	}
};
</script>

<style scoped>
button {
	margin-right: 10px;
	border-radius: 0;
}
button:last-of-type {
	margin-right: 0;
}
button svg {
	margin-right: 10px;
}
.main-toolbar {
	width: 100%;
	padding-bottom: 10px;
	margin-bottom: 10px;
	border-bottom: 1px solid #ba4613;
}

.btn {
	flex: unset;
	font-size: 12px;
	background-color: #fff;
	border: 1px solid #ba3f05;
	color: #ba4613;
}

.btn:hover {
	background-color: #eaaa3c;
	color: #ffffff;
}

.btn:active,
.btn:focus {
	background-color: #ba4613;
	border-color: #ba4613;
	color: #ffffff;
	box-shadow: none;
	outline: none;
}
</style>
