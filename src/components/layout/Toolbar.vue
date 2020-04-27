<template>
	<aside>
		<ul class="btn-group-vertical btn-group" role="group" aria-label="...">
			<li>
				<router-link to="/storage">
					<button type="button" class="btn">
						<font-awesome-icon icon="book"></font-awesome-icon>
						My Catalog
					</button>
				</router-link>
			</li>
			<li>
				<button type="button" class="btn">
					<font-awesome-icon icon="atlas"></font-awesome-icon>
					Download
				</button>
			</li>
			<li>
				<button type="button" class="btn">
					<font-awesome-icon icon="address-book"></font-awesome-icon>
					Followed
				</button>
			</li>
			<li>
				<button type="button" class="btn">
					<font-awesome-icon icon="adjust"></font-awesome-icon>
					Export/Import
				</button>
			</li>
			<li>
				<button type="button" class="btn">
					<font-awesome-icon icon="ankh"></font-awesome-icon>
				</button>
			</li>
			<li>
				<button type="button" class="btn">
					<font-awesome-icon icon="angle-double-right"></font-awesome-icon>
				</button>
			</li>
		</ul>
	</aside>
</template>

<script>
export default {
	name: 'Toolbar'
};
</script>

<style scoped>
aside {
	position: fixed;
	width: 160px;
	height: calc(100% - 50px);
	z-index: 1;
	top: 50px;
	padding: 5px;
	border-right: 1px solid #351728;
}

ul {
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
}

ul li {
	width: 100%;
	text-align: left;
}

ul li:last-child {
	margin-top: auto;
}

button {
	font-size: 16px;
	height: 46px;
	color: #351728;
	width: 100%;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
}

button:focus {
	box-shadow: none;
}

button svg {
	margin-right: 5px;
}

button:hover {
	background-color: #351728;
	color: #e0e1e0;
}
</style>
