<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="讨论名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="讨论分类">
				<el-select v-model="form.region" placeholder="请选择讨论分类">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="讨论时间">
				<el-col :span="5">
					<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
				</el-col>
				<el-col class="line" :span="1" style="margin-left: 35px;">-</el-col>
				<el-col :span="5">
					<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
				</el-col>
			</el-form-item>
			<el-form-item label="私密">
				<el-switch v-model="form.delivery1"></el-switch>
			</el-form-item>
			<el-form-item label="分组讨论">
				<el-switch v-model="form.delivery2"></el-switch>
			</el-form-item>
			<div>
				<el-form-item label="讨论介绍">
					<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 6}" placeholder="请输入内容" v-model="input">
					</el-input>
				</el-form-item>
			</div>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input: '',
				roomid: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery1: false,
					delivery2: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				// /live/:roomid/startdiscuss
				// subject: '', time: 10
				// console.log(sessionStorage.roomID);
				
				this.$axios.post(`http://172.20.171.122:7001/live/${sessionStorage.roomID}/startDiscuss`, {
					subject: this.form.name,
					time: 10
				}).then(results => {
					console.log(results.data);
					this.form.name = ''
				})
			},
			
		}
	}
</script>

<style lang="css" scoped>

</style>