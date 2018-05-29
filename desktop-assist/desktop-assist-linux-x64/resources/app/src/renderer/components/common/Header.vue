<template>
	<div id="header" style="-webkit-app-region: drag">
		<div class="logo">
			<!-- <img src="./../../assets/lalal.png" alt=""> -->
		</div>
		<div class="redirect_icon">
			<i class="el-icon-arrow-left"></i>
			<i class="el-icon-arrow-right"></i>
		</div>
		<div class="search_input">
			<el-input class="search_area" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search"></el-input>
		</div>
		<div class="userinfo">
			<el-badge :value="200" :max="99" class="item">
				<i class="el-icon-message"></i>
			</el-badge>
			<i class="el-icon-setting"></i>
			<el-dropdown>
				<span class="el-dropdown-link">
						<img src="./../../assets/yuan.png" alt="">
						<i class="el-icon-caret-bottom"></i>
					</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item disabled>Signed in as - zpy</el-dropdown-item>
					<el-dropdown-item>个人信息</el-dropdown-item>
					<router-link to="/login">
						<el-dropdown-item>退出</el-dropdown-item>
					</router-link>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				search: '',
			};
		}
	}
</script>

<style lang="scss">
	.search_area input.el-input__inner {
		border-radius: 12px;
		height: 23px;
		width: 230px;
	}
	.search_area i {
		line-height: 0;
	}
</style>

<style lang="scss" scoped>
	#header {
		width: 100%;
		min-width: 800px;
		height: 60px;
		background-color: rgba(39, 65, 82, .8);
		top: 0;
		position: fixed;
		z-index: 10;
		.logo {
			float: left;
			width: 180px;
			height: 60px;
			img {
				// width: 100px;
				// height: 25px;
				// margin-top: 25px;
				// margin-left: 20px;
			}
		}
		.redirect_icon {
			float: left;
			top: 45%;
			position: relative;
			margin-left: 80px;
			i {
				color: papayawhip;
				font-size: 18px;
				background-color: rgba(39, 65, 82, .8);
				// border: 1px solid gray;

			}
		}
		.search_input {
			float: left;
			top: 40%;
			position: relative;
			margin-left: 20px;
			.el-input {
			}
		}
		.userinfo {
			margin-right: 10px;
			float: right;
			i {
				color: papayawhip;
				font-size: 20px;
				bottom: -13px;
				right: 10px;
				position: relative;
			}
			.item {
				margin-top: 15px;
				margin-right: 40px;
				i {
					bottom: -2px;
					right: 0;
				}
			}
			.el-dropdown {
				height: 60px;
				border-left: 1px solid rgb(111, 115, 121);
				padding-left: 20px;
				.el-dropdown-link {
					top: 30%;
					position: relative;
					img {
						width: 30px;
						height: 30px;
						border-radius: 15px;
						background-color: peachpuff;
					}
					i {
						color: papayawhip;
						font-size: 15px;
						top: -10px;
						position: relative;
						right: 0;
					}
				}
				.el-dropdown-menu {
					.el-dropdown-item {}
				}
			}
		}
	}
</style>