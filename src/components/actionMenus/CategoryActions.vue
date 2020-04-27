<template>
	<div class="btn-group main-toolbar" role="toolbar" aria-label="Basic example">
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
			<font-awesome-icon icon="plus"></font-awesome-icon>Add
		</button>
		<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
			<font-awesome-icon icon="minus"></font-awesome-icon>Remove
		</button>
		<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter">
			<font-awesome-icon icon="pencil-alt"></font-awesome-icon>Edit
		</button>
		<AddCategoryItem></AddCategoryItem>
	</div>
</template>

<script>
import AddCategoryItem from '../forms/AddCategoryItem';

export default {
	name: 'CategoryActions',
	components: {
		AddCategoryItem
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
	border-bottom: 1px solid #351728;
}
</style>
