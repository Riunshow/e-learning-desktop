<template>
	<div id="homepage">
		<nav-header></nav-header>
		<router-link to="/" style="top: 50px;">login</router-link>
	</div>
</template>

<script>
	import NavHeader from './common/Header'
	export default {
		components: {
			NavHeader
		},
		data() {
			return {};
		}
	}
</script>

<style lang="css" scoped>
	#homepage {
		height: 100%;
		width: 100%;
	}
</style>