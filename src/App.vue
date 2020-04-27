<template>
	<div id="app">
		<Header></Header>
		<section id="content" role="main">
			<router-view />
		</section>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';

export default {
	name: 'Home',
	components: {
		Header,
		Footer
	}
};
</script>

<style lang="sass">
html
	position: relative
	min-height: 100%

html, body
	height: 100%
	background-color: #eaeaea

ul
	list-style: none
	padding: 0
	margin: 0

#app,
.container-view,
.structure-view,
.detailed-view
	height: 100%

#content
	height: calc(100% - 75px)
</style>
