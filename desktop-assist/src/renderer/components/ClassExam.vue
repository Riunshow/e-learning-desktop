<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="考试名称">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="考试分类">
				<el-select v-model="form.region" placeholder="请选择课程分类">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="开始时间">
				<el-col :span="5">
					<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
				</el-col>
				<el-col class="line" :span="1" style="margin-left: 35px;">-</el-col>
				<el-col :span="5">
					<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
				</el-col>
			</el-form-item>
			<el-form-item label="是否私密">
				<el-switch v-model="form.delivery"></el-switch>
			</el-form-item>
			<div>
				<el-form-item label="上传试题">
					<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
						<i class="el-icon-upload"></i>
						<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
					</el-upload>
				</el-form-item>
			</div>
			<el-form-item label="智能组卷">
				<el-button type="text" @click="dialogTableVisible = true">点击选择</el-button>
				<el-dialog title="库中试题" :visible.sync="dialogTableVisible">
					<el-dialog width="50%" title="hbase 测试题" :visible.sync="innerVisible" append-to-body>
						<exam-paper></exam-paper>
					</el-dialog>
					<el-table :data="gridData">
						<el-table-column property="name" label="名称" width="200"></el-table-column>
						<el-table-column property="category" label="分类" width="200"></el-table-column>
						<el-table-column fixed="right" label="操作">
							<template scope="scope">
											<el-button @click="innerVisible = true" type="text">预览</el-button>
											<el-button @click="dialogTableVisible = false" type="text">选择</el-button>
</template>
						</el-table-column>
					</el-table>
					
				</el-dialog>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="postQuiz">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import ExamPaper from './common/ExamPaper'
	export default {
		components: {
			ExamPaper
		},
		data() {
			return {
				input: '',
				dialogTableVisible: false,
				innerVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				gridData: [{
					name: 'hbase 测试',
					category: '大数据技术',
				}, {
					name: 'java 测试',
					category: 'java',
				}, {
					name: 'c++ 测试',
					category: 'c++',
				}, {
					name: '数据结构 测试',
					category: '数据结构',
				}, ],
			}
		},
		created() {},
		watch: {},
		methods: {
			postQuiz() {
				//    /live/:roomid/startquiz
				//  num: 1, time: 10 
				const quiz = [{
						title: 'zpy 是不是猪',
						modelname: 'radio1',
						selects: [{
							answer: 'linux'
						}, {
							answer: 'windows'
						}]
					},
					{
						title: 'Hbase 如何卸载',
						modelname: 'radio2',
						selects: [{
							answer: 'linux'
						}, {
							answer: 'windows'
						}]
					}, {
						title: 'Hbase 如何卸载',
						modelname: 'radio2',
						selects: [{
							answer: 'linux'
						}, {
							answer: 'windows'
						}]
					}, {
						title: 'Hbase 如何卸载',
						modelname: 'radio2',
						selects: [{
							answer: 'linux'
						}, {
							answer: 'windows'
						}]
					}, {
						title: 'Hbase 如何卸载',
						modelname: 'radio2',
						selects: [{
							answer: 'linux'
						}, {
							answer: 'windows'
						}]
					},
				]
				console.log(quiz);
				this.$axios.post(`${this.$serverIP}/live/${sessionStorage.roomID}/startQuiz`, {
					num: 1,
					time: 10,
					data: quiz,
				}).then(results => {
					console.log(results.data);
					this.$notify({
						title: '成功',
						message: '这是一条成功的提示消息',
						type: 'success'
					});
				}).catch((err) => {
					console.log(err);
					this.$notify.error({
						title: '错误',
						message: '这是一条错误的提示消息'
					});
				})
			}
		}
	}
</script>

<style lang="css" scoped>

</style>