<template>
	<div class="home">
		<MainContent msg="This is Home Page" />
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
