<template>
	<div id="app">
		<Header></Header>
		<section id="content" role="main">
			<Toolbar></Toolbar>
			<router-view />
		</section>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import Toolbar from '@/components/layout/Toolbar.vue';

export default {
	name: 'Home',
	components: {
		Header,
		Footer,
		Toolbar
	}
};
</script>

<style lang="sass">
html
	position: relative
	min-height: 100%
	background-color: #F3F3F3

body
	/* Margin bottom by footer height */
	margin-bottom: 25px
	background-color: #F3F3F3

ul
	list-style: none
	padding: 0
	margin: 0
</style>
