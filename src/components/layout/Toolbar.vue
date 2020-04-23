<template>
	<aside>
		<ul class="btn-group-vertical btn-group" role="group" aria-label="...">
			<li>
				<button type="button" class="btn">
					<font-awesome-icon icon="book"></font-awesome-icon>
				</button>
			</li>
			<li>
				<button type="button" class="btn">
					<font-awesome-icon icon="atlas"></font-awesome-icon>
				</button>
			</li>
			<li>
				<button type="button" class="btn">
					<font-awesome-icon icon="address-book"></font-awesome-icon>
				</button>
			</li>
			<li>
				<button type="button" class="btn">
					<font-awesome-icon icon="adjust"></font-awesome-icon>
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
	width: 60px;
	height: calc(100% - 50px);
	border-right: 1px solid #dedede;
	z-index: 1;
	top: 50px;
	background-color: whitesmoke;
	padding: 5px;
}

ul {
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
}

ul li:last-child {
	margin-top: auto;
}

button {
	font-size: 20px;
	width: 46px;
	height: 46px;
	color: #c58d25;
}

button:hover {
	background-color: #e4e4e4;
	color: #ff006a;
}
</style>
