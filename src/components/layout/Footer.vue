<template>
	<footer></footer>
</template>

<script>
export default {
	name: 'Footer'
};
</script>

<style scoped>
footer {
	background-color: #d48a65;
	min-height: 25px;
	position: absolute;
	bottom: 0;
	width: 100%;
	/* Set the fixed height of the footer here */
	height: 25px;
	line-height: 25px; /* Vertically center the text there */
	display: none;
}
</style>
