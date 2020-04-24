<template>
	<header>
		<ul>
			<li><router-link to="/"><font-awesome-icon icon="book-reader"></font-awesome-icon></router-link></li>
			<li><router-link to="/about">About</router-link></li>
			<li><router-link to="/Storage">Storage</router-link></li>
		</ul>
		<div id="user-menu"></div>
	</header>
</template>

<script>
export default {
	name: 'Header'
};
</script>

<style scoped lang="sass">
header
	background-color: #1f3102
	min-height: 50px

ul
	float: left
	font-size: 24px
	padding: 7px 10px

	li
		float: left
		padding: 0 10px
		margin-right: 10px
		border-radius: 2px

		&:hover
			background-color: #e9e5e1
			cursor: pointer

			a
				color: #303a43

		&last-child
			margin-right: 0

		a
			color: #eaeaea
			font-size: 20px
			text-decoration: none
			vertical-align: text-top
</style>
