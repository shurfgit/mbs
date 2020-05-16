<template>
    <li class="category-selection-item">
        <label :for="category.id" class="checkbox-label">
            <input :id="category.id" type="checkbox" ref="stateElem" class="category-select" v-model="localState">
            <span>{{ category.name }}</span>
        </label>
        <ul class="category-internal-categories" v-if="hasChildren">
            <CategoriesSelection
                v-for="c in category.children"
                :key="c.id" 
                :category="$store.getters.getCategoryById(c)"
                v-model="state"
                @status-changed="stateChanged($event)"
                ref="childrenCategories"
            >
            </CategoriesSelection>
        </ul>
    </li>
</template>

<script>
	export default {
        name: "CategoriesSelection",
        data: () => ({
            state: false,
            isOpened: false
        }),
        methods: {
            stateChanged() {
                if (this.$children.every((c) => c.state && !c.$refs.stateElem.indeterminate)) {
                    this.$refs.stateElem.indeterminate = false;
                    this.state = true;
                } else if (this.$children.some((c) => c.state || c.$refs.stateElem.indeterminate)) {
                    this.$refs.stateElem.indeterminate = true;
                } else if (this.$children.every((c) => !c.state || !c.$refs.stateElem.indeterminate)) {
                    this.$refs.stateElem.indeterminate = false;
                    this.state = false;
                }
                if (this.category.parent) {
                    this.$emit('status-changed');
                }
            },
            getSelectedCategories() {
                return this.$refs.stateElem.checked || this.$refs.stateElem.indeterminate ?
                    [this.category].concat((this.$refs.childrenCategories || []).map(cat =>
                        cat.getSelectedCategories()
                    ).flat()) : [];
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
            },
            hasChildren() {
                return this.category.children && this.category.children.length;
            }
        },
        watch: {
            value(newState) {
                this.$refs.stateElem.indeterminate = false;
                this.state = newState;
            }
        },
        props: {
            category: Object,
            value: Boolean
        }
	}
</script>

<style scoped lang="sass">
.category-selection-item > .category-internal-categories
    margin-left: 20px

.category-expander
    cursor: pointer
    margin-right: 10px
    font-size: 16px
    color: #ba4613
</style>