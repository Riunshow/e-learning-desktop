<template>
	<div>
		<el-container>
			<el-header>考试反馈</el-header>
			<el-main>
				<div class="chartLine">
					<div style="float: left;margin:10px 50px">
						<p>总人数</p>
						<pie :width="300" :height="300"></pie>
					</div>
					<div style="float: right;margin:20px 50px">
						<p>考试错题统计</p>
						<Bar :width="300" :height="300"></Bar>
					</div>
					<div style="float: left;margin:20px 50px">
						<p>雷达图能力分析</p>
						<Radar :width="300" :height="300"></Radar>
					</div>
					<div style="float: right;margin:20px 50px">
						<p>错题分析</p>
						<Line1 :width="300" :height="300"></Line1>
					</div>
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import Bar from './../chart/Bar.js'
	import Pie from './../chart/Pie.js'
	import Radar from './../chart/Radar.js'
	import Line1 from './../chart/Line.js'
	export default {
		components: {
			Bar,
			Pie,
			Radar,
			Line1
		},
		data() {
			return {};
		}
	}
</script>

<style lang="css" scoped>

</style>