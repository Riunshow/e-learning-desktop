<template>
	<div id="homepage">
		<nav-header></nav-header>
		<options-area v-cloak></options-area>
	</div>
</template>

<script>
	import NavHeader from './common/Header'
	import OptionsArea from './OptionsArea'
	export default {
		components: {
			NavHeader,
			OptionsArea,
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
	[v-cloak] {
		display: none !important;
	}
</style>