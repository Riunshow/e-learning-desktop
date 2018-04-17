<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="秘钥">
				<el-input placeholder="秘钥" v-model="form.token" :disabled="true">
				</el-input>
			</el-form-item>
			<el-form-item label="房间号">
				<el-input v-model="form.roomID"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即申请</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					roomID: '',
					token: '*********' //TOKEN
				}
			}
		},
		methods: {
			onSubmit() {
				// live/application
				// roomid token

				const _this = this
				this.$axios.post('http://172.20.171.122:7001/live/application', {
					username: 'zbt',
					roomID: this.form.roomID,
					token: 'TOKEN'
				}).then(results => {
					sessionStorage.roomID = _this.form.roomID
					sessionStorage.hasRoom = "1"
					location.reload()
				})
			},

			// onSubmit() {
			// 	sessionStorage.hasRoom = 1
			// 	console.log(sessionStorage)
			// 	location.reload()
			// }
		}
	}
</script>

<style lang="css">
	.el-input {
		width: 200px;
	}
</style>