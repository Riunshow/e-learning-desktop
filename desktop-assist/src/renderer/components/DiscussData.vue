<template>
	<div id="discussData">
		<el-container>
			<el-header>
				<h1>大数据应用技术课堂讨论</h1>
			</el-header>
			<el-main>
				<div class='discussContent' v-for="content in contents">
					<div class="contentUser">
						<img :src=content.img alt="">
						<p>{{content.name}}</p>
						<p>{{content.time}}</p>
					</div>
					<div class="clearFloat"></div>
					<div class="whosContent">
						{{content.content}}
					</div>
					<div class="contentInfo">
						<el-button type="text">查看详细内容</el-button>
					</div>
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				contents: [{
					img: require('./../assets/yuan.png'),
					name: 'zpy',
					time: '2017-06-9 19:30:21',
					content: '这门课学习适合先过一遍，对vue的一些详细的功能有印象，在实战中用到时能提供解决问题的方向。之后可以详细再看几遍，结合文档深入学习vue原理。和其他实战课学习的方式不太一样，',
				}, {
					img: require('./../assets/2.png'),
					name: 'lqyaaa',
					time: '2017-06-9 19:30:21',
					content: '跟着老师的react 课程过来的，第一时间就买了，感觉对自己帮助很大，里面会有vuex vue router的讲解，难度可能稍微比react课程小一些，很适合有点基础又想精通使用vue的同学。',
				}, {
					img: require('./../assets/boy.jpg'),
					name: '12445',
					time: '2017-06-9 19:30:21',
					content: '学到了学到了，看一遍肯定是看不懂的，多看几遍，就冲着服务端渲染来的，建议大家看的时候，第一遍先过一遍，第二遍边看边查api，第三遍自己把东西通一下，基本都会了',
				}, {
					img: require('./../assets/littleboy.jpeg'),
					name: '啊啊',
					time: '2017-06-9 19:30:21',
					content: '这门课学习适合先过一遍，对vue的一些详细的功能有印象，在实战中用到时能提供解决问题的方向。之后可以详细再看几遍，结合文档深入学习vue原理。和其他实战课学习的方式不太一样，',
				}, {
					img: require('./../assets/superman.jpg'),
					name: '啦啦啦啦啦',
					time: '2017-06-9 19:30:21',
					content: '这门课学习适合先过一遍，对vue的一些详细的功能有印象，在实战中用到时能提供解决问题的方向。之后可以详细再看几遍，结合文档深入学习vue原理。和其他实战课学习的方式不太一样，',
				}]
			};
		}
	}
</script>

<style lang="scss" scoped>
	#discussData {
		width: 100%;
		height: 100%; // text-align: center;
		.el-container {
			height: 100%;
			width: 100%;
			.el-header {
				color: #333;
				margin-left: auto;
				margin-right: auto;
				h1 {
					font-size: 20px;
					border-bottom: 1px solid black;
				}
			}
			.el-main {
				height: 100%;
				margin-top: 20px;
				background-color: #E9EEF3;
				color: #333;
				.discussContent {
					border-bottom: 1px solid #555;
					margin-bottom: 20px;
					// background-color: #E9EEF3;
					height: 100px;
					.contentUser {
						margin-left: 10px;
						height: 50px;
						img {
							height: 40px;
							width: 40px;
							border-radius: 20px;
							background-color: azure;
							float: left;
						}
						p {
							margin-left: 10px;
							float: left;
						}
					}
					.clearFloat {
						clear: both;
						height: 0;
						overflow: hidden;
					}
					.whosContent {
						height: 50px;
						margin-left: 10px;
						width: 80%;
						line-height: 30px;
						text-align: left; 
						white-space: nowrap;
						word-wrap: break-word;
						word-break: break-all;
						text-overflow: ellipsis;
						overflow: hidden;
						float: left;
					}
					.el-button {
						float: right;
						margin-right: 20px;
					}
				}
			}
		}
	}
</style>