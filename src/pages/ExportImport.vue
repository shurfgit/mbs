<template>
    <div class="full-height content-wrapper">
        <Toolbar></Toolbar>
        <div class="container-view">
            <div class="categories">
                <ul class="categories-selection-list">
                    <CategoriesSelection
                        v-for="category in $store.state.categories.filter(item => !item.parent)"
                        :key="category.id" 
                        :category="category"
                        ref="categories"
                    >
                    </CategoriesSelection>
                </ul>
                <button class="save-categories" @click="exportCategories()">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
	import Toolbar from "../components/layout/Toolbar";
	import CategoriesSelection from "../components/structure/CategoriesSelection";
	export default {
		name: "ExportImport",
        components: {Toolbar, CategoriesSelection},
        methods: {
            exportCategories() {
                let selectedCategories = this.$refs.categories.map(category => category.getSelectedCategories()).flat();
                let data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({categories: selectedCategories}));
                let linkElem = document.createElement('a');
                linkElem.setAttribute('href', data);
                linkElem.setAttribute('download', "categories.json");
                linkElem.click();
            }
        },
        computed: {

        }
	}
</script>

<style scoped lang="sass">

</style>