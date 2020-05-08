<template>
	<aside>
		<ul class="btn-group-vertical btn-group" role="group" aria-label="...">
			<li>
				<router-link to="/storage">
					<span>
						<font-awesome-icon icon="book"></font-awesome-icon>
						My Catalog
					</span>
				</router-link>
			</li>
			<li>
				<span>
					<font-awesome-icon icon="atlas"></font-awesome-icon>
					Download
				</span>
			</li>
			<li>
				<span>
					<font-awesome-icon icon="address-book"></font-awesome-icon>
					Followed
				</span>
			</li>
			<li>
				<router-link to="/export-import">
					<span>
						<font-awesome-icon icon="adjust"></font-awesome-icon>
						Export/Import
					</span>
				</router-link>
			</li>
			<li>
				<span>
					<font-awesome-icon icon="info-circle"></font-awesome-icon>
					Help
				</span>
			</li>
			<li>
				<span @click="toggleToolbar">
					<font-awesome-icon :icon="this.isToolbarCollapsed ? 'angle-double-right' : 'angle-double-left'"></font-awesome-icon>
					{{ this.isToolbarCollapsed ? '' : 'Collapse' }}
				</span>
			</li>
		</ul>
	</aside>
</template>

<script>
export default {
	name: 'Toolbar',
	data: function() {
		return {
			isToolbarCollapsed: false
		};
	},
	methods: {
		toggleToolbar() {
			this.isToolbarCollapsed = !this.isToolbarCollapsed;
			document.querySelector('aside').classList[this.isToolbarCollapsed ? 'add' : 'remove']('collapsed');
			document.querySelector('.content-wrapper').classList[this.isToolbarCollapsed ? 'add' : 'remove']('small-toolbar');
		}
	}
};
</script>

<style scoped lang="sass">
aside
	position: fixed
	width: 160px
	height: calc(100% - 50px)
	z-index: 1
	top: 50px
	background-color: #1a1b20

	&.collapsed
		width: 50px

ul
	height: 100%
	display: flex
	align-items: center
	flex-direction: column
	justify-content: flex-start

	li
		width: 100%
		text-align: left
		cursor: pointer

		&:last-child
			margin-top: auto

		a
			display: block
			text-decoration: none

		span
			border-left: 4px solid transparent
			font-size: 14px
			height: 46px
			color: #f5f5f5
			width: 100%
			text-align: left
			text-overflow: ellipsis
			white-space: nowrap
			display: block
			padding: 12px 16px
			cursor: pointer
			overflow: hidden

			&:hover
				color: #eaaa3c

			svg
				margin-right: 10px

.router-link-exact-active span
	border-left: 4px solid #ba4613

.router-link-exact-active span
	color: #ff4e00
</style>
