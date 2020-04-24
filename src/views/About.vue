<template>
	<MainContent msg="This is About Page" />
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
