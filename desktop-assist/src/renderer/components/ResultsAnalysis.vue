<style lang="css" scoped>
.examResults {
	height: 100%;
	width: 100%;
}
.class-head {
	margin-bottom: 20px;
}
.el-input {
	width: 30%;
	margin-right: 10px;
}
.el-pagination {
	top: 50px;
	position: relative;
	text-align: center;
}
</style>
<template>
	<div class="examResults">
		<div class="class-head">
			<el-input v-model="input" placeholder="请输入内容"></el-input>
			<el-button type="success">搜索</el-button>
		</div>
		
		<el-table :data="tableData" style="width: 100%" >
			<el-table-column prop="name" label="考试名称">
			</el-table-column>
			<el-table-column prop="start_time" label="考试时间">
			</el-table-column>
			<el-table-column prop="peopleNum" label="考试人数">
			</el-table-column>
			 <el-table-column fixed="right" label="操作">
				<template scope="scope">
					<el-button @click="redirectTo(scope.row)" type="text">查看分析</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-pagination layout="prev, pager, next" :total="10"></el-pagination>
	</div>
</template>

<script>

	export default {

		data() {
			return {
				input: '',
				tableData: [{
					name: '大数据应用技术',
					start_time: '2016-01-01',
					peopleNum: '60',
				}, {
					name: '软件工程',
					start_time: '2016-01-01',
					peopleNum: '60',
				}, {
					name: 'JAVA程序设计',
					start_time: '2016-01-01',
					peopleNum: '60',
				}, {
					name: 'C程序设计',
					start_time: '2016-01-01',
					peopleNum: '60',
				}, {
					name: 'C++程序设计',
					start_time: '2016-01-01',
					peopleNum: '60',
				}, {
					name: 'python程序设计',
					start_time: '2016-01-01',
					peopleNum: '60',
				}]
			}
		},
		created () {

		},
		methods: {
			redirectTo() {
				this.$router.push({path: '/homepage/examresults'})
			}
		}
		
	}
</script>
