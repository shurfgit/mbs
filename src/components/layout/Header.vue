<template>
	<header>
		<div id="nav-main">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/about">About</router-link></li>
			</ul>
		</div>
		<div id="user-menu"></div>
	</header>
</template>

<script>
export default {
	name: 'Header'
};
</script>

<style scoped>
header {
	background-color: #384769;
	min-height: 50px;
}
</style>
