<template>
    <li class="category-selection-item" ref="categoryStateElem">
        <input type="checkbox" class="category-select" :checked="localState" @change="localState = $refs">
        <span>{{ category.name }}</span>
        <ul class="category-internal-categories" v-if="category.children && category.children.length">
            <CategoriesSelection 
                v-for="c in category.children" 
                :key="c.id" 
                :category="getCategoryById(c)"
                :getCategoryById="getCategoryById"
                v-model="initialState"
                @status-changed="stateChanged($event)"
            >
            </CategoriesSelection>
        </ul>
    </li>
</template>

<script>
	export default {
        name: "CategoriesSelection",
        data: () => ({
            initialState: false
        }),
        methods: {
            stateChanged(value) {
                if (this.category.children && this.category.children.length) {
                    this.$refs.categoryStateElem.indeterminate = value;
                }
            }
        },
        computed: {
            localState: {
                get() {
                    return this.value;
                },
                set(value) {
                    console.dir(value);
                    // this.initialState = value;
                    // this.$emit('status-changed', value);
                }
            }
        },
        props: {
            category: Object,
            getCategoryById: Function,
            value: Boolean
        }
	}
</script>

<style scoped lang="sass">
.category-selection-item > .category-internal-categories
    margin-left: 20px
</style>