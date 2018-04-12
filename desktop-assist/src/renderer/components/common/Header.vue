<template>
	<div id="header">
		<div class="logo">
			<img src="./../../assets/logo.png" alt="">
		</div>
		<div class="userinfo">
			<el-dropdown>
				<span class="el-dropdown-link">
					<img src="./../../assets/yuan.png" alt="">
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item disabled>Signed in as zpy</el-dropdown-item>
					<el-dropdown-item>个人信息</el-dropdown-item>
					<el-dropdown-item>退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		}
	}
</script>

<style lang="scss" scoped>
	#header {
		width: 100%;
		height: 50px;
		background-color: #24292e;

		.logo {
			float: left;
			img {
				// width: 200px;
				height: 50px;
			}
		}

		.userinfo {
			margin-right: 30px;
			float: right;
			img {
				width: 40px;
				height: 40px;
				border-radius: 20px;
				background-color: peachpuff;
				margin-top: 5px;
			}
			.el-dropdown {
				.el-dropdown-link {
					i {
						color: papayawhip;
						font-size: 20px;
					}
				}
			}
			
		}
	}
</style>