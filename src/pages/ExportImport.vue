<template>
    <div class="full-height content-wrapper">
        <Toolbar></Toolbar>
        <div class="container-view">
            <div class="categories">
                <ul class="categories-selection-list">
                    <CategoriesSelection
                        v-for="category in categories.filter(item => !item.parent)"
                        :key="category.id" 
                        :category="category"
                        :getCategoryById="getCategoryById"
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
            getCategoryById(id) {
                return this.categories.find(item => item.id === id);
            },
            exportCategories() {
                console.log(this.$children['CategoriesSelection']);
            }
        },
        computed: {
			categories() {
				return [
                    {
                        id: 1,
                        name: 'root',
                        parent: null,
                        children: [2, 4]
                    },
                    {
                        id: 2,
                        name: 'cat2',
                        parent: 1,
                        children: [5, 6]
                    },
                    {
                        id: 3,
                        name: 'cat3',
                    },
                    {
                        id: 4,
                        name: 'cat4',
                        parent: 1,
                        children: [7]
                    },
                    {
                        id: 5,
                        name: 'cat5',
                        parent: 2
                    },
                    {
                        id: 6,
                        name: 'cat6',
                        parent: 2
                    },
                    {
                        id: 7,
                        name: 'cat7',
                        parent: 4
                    }
                ]
            }
        }
	}
</script>

<style scoped lang="sass">

</style>