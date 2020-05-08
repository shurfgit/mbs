<template>
    <div class="full-height content-wrapper">
        <Toolbar></Toolbar>
        <div class="content">
            <div class="categories">

            </div>
        </div>
    </div>
</template>

<script>
	import Toolbar from "../components/layout/Toolbar";
	export default {
		name: "ExportImport",
		components: {Toolbar},
        computed: {
			categories() {
				let categories = this.$store.state.categories;
            }
        }
	}
</script>

<style scoped lang="sass">

</style>