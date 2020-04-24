<template>
	<div class="container-view">
		<div class="structure-view"><MainContent msg="This is Home Page" /></div>
		<div class="detailed-view"></div>
	</div>
</template>

<script>
// @ is an alias to /src
import MainContent from '@/components/MainContent.vue';

export default {
	name: 'Home',
	components: {
		MainContent
	}
};
</script>

<style scoped>
.structure-view {
	float: left;
	width: 70%;
	padding: 10px;
	overflow: auto;
}

.detailed-view {
	width: 30%;
	float: left;
	padding: 10px;
	overflow: auto;
	border-left: 1px solid #303a43;
}

.container-view {
	padding-left: 60px;
}
</style>
