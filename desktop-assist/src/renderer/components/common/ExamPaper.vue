<template>
	<div>
		<el-container>
			<el-main>
				<div v-for="question in questions">
					<p>{{question.title}}</p>
					<div v-for="(select, index) in question.selects">
						<el-radio :v-model=select.modelname :label=index >{{select.answer}}</el-radio>
					</div>
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
export default {
  data () {
	return {
		radio: '1',
		questions: [{
			title: 'Hbase 如何安装',
			selects: [{
				modelname: 'radio1',
				answer: 'linux'
			},{
				modelname: 'radio1',
				answer: 'windows'
			}]
		},
		{
			title: 'Hbase 如何卸载',
			selects: [{
				modelname: 'radio2',
				answer: 'linux'
			},{
				modelname: 'radio2',
				answer: 'windows'
			}]
		},
		{
			title: 'hadoop 厉不厉害',
			selects: [{
				modelname: 'radio3',
				answer: 'yes'
			},{
				modelname: 'radio3',
				answer: 'no'
			},{
				modelname: 'radio3',
				answer: 'i don\'t know'
			}]
		},
		{
			title: 'hadoop 厉不厉害',
			selects: [{
				modelname: 'radio3',
				answer: 'yes'
			},{
				modelname: 'radio3',
				answer: 'no'
			},{
				modelname: 'radio3',
				answer: 'i don\'t know'
			}]
		},
		{
			title: 'hadoop 厉不厉害',
			selects: [{
				modelname: 'radio3',
				answer: 'yes'
			},{
				modelname: 'radio3',
				answer: 'no'
			},{
				modelname: 'radio3',
				answer: 'i don\'t know'
			}]
		},
		{
			title: 'hadoop 厉不厉害',
			selects: [{
				modelname: 'radio3',
				answer: 'yes'
			},{
				modelname: 'radio3',
				answer: 'no'
			},{
				modelname: 'radio3',
				answer: 'i don\'t know'
			}]
		}]
	};
  }
}
</script>
