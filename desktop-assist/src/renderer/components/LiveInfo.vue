<template>
	<div>
		<el-container>
			<el-header>
				<h1>地址: </h1>
				<p>https://www.baidu.com</p>
			</el-header>
			<el-header>
				<h1>加密字符串: </h1>
				<p>4d5c01842f37d90651f9693783c6564279fed6f4</p>
			</el-header>
			<el-header>
				<el-input v-model="title" placeholder="请输入要修改的直播间标题"></el-input>
				<el-button type="primary">确认</el-button>
			</el-header>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				liveAddress: '',
				title: ''
			};
		}
	}
</script>


<style lang="scss" scoped>
	.el-header {
		h1 {
			float: left;
		}
		p {
			float: left;
			margin-top: 25px;
			margin-left: 20px;
		}
		.el-input {
			margin-top: 25px;
			width: 400px;
		}
		.el-button {
			margin-top: 25px;
			margin-left: 20px;
		}
	}
</style>