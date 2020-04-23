<template>
	<div class="about">
		<MainContent msg="This is About Page" />
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
