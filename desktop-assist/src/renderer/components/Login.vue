<template>
	<div id="login">
		<el-container>
			<el-main>
				<div class="loginModel">
					<img src="./../assets/logo.png" alt="">
					<el-row>
						<el-input v-model="account" placeholder="请输入用户名"></el-input>
						<el-input v-model="passwd" placeholder="请输入密码"></el-input>
					</el-row>
					<el-button type="primary" @click="redirect">登录</el-button>
				</div>
				
			</el-main>
		</el-container>
	</div>
</template>

<script>
export default {
  data () {
	return {
		account: '',
		passwd: '',
	};
  },
  methods: {
	  redirect() {
		  this.$router.push({ path: '/homepage'})
	  }
  }
}
</script>

<style lang="scss" scoped>
	#login {
		height: 100%;
		width: 100%;
		.el-container {
			height: 100%;
			width: 100%;
		}
	}

	.el-main {
		background-color: rgba(39,65,82,.8);
		color: #333;
		text-align: center;
		line-height: 60px;
		.loginModel{
			background: #fff;
			border-radius: .4rem;
			box-shadow: 0.3rem 0.3rem 1rem;
			top: 25%;
			margin-left: auto;
			margin-right: auto;
			position: relative;
			width: 40%;
			min-width: 550px;
			min-height: 400px;
			img {
				margin-top: 10px;
				height: 100px;
				width: 400px;
			}
			.el-input {
				width: 300px;
				margin-top: 20px;
			}
			.el-button {
				margin-top: 30px;
			}
		}
	}
  
</style>