<template>
    <li class="category-selection-item">
        <input type="checkbox" ref="stateElem" class="category-select" v-model="localState">
        <span>{{ category.name }}</span>
        <ul class="category-internal-categories" v-if="category.children && category.children.length">
            <CategoriesSelection
                v-for="c in category.children"
                :key="c.id" 
                :category="getCategoryById(c)"
                :getCategoryById="getCategoryById"
                v-model="state"
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
            state: false
        }),
        methods: {
            stateChanged() {
                if (this.$children.every((c) => c.localState && !c.$refs.stateElem.indeterminate)) {
                    this.$refs.stateElem.indeterminate = false;
                    this.localState = true;
                } else if (this.$children.some((c) => c.localState || c.$refs.stateElem.indeterminate)) {
                    this.$refs.stateElem.indeterminate = true;
                } else if (this.$children.every((c) => !c.localState || !c.$refs.stateElem.indeterminate)) {
                    this.$refs.stateElem.indeterminate = false;
                    this.localState = false;
                }
                if (this.category.parent) {
                    this.$emit('status-changed');
                }
            }
        },
        computed: {
            localState: {
                get() {
                    return this.state;
                },
                set(value) {
                    this.state = value;
                    this.$emit('status-changed');
                }
            }
        },
        watch: {
            value(newState) {
                this.state = newState;
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