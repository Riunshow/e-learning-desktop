<template>
	<div id="options" >
		<el-container>
			<!-- 侧边栏 -->
			<el-aside width="200px" >
				<el-menu :default-active="$route.path" :unique-opened="false" router>
					<el-submenu v-for="menu in menus" :index="menu.route" :key="menu.route">
						<template slot="title">
							<i :class="menu.icon"></i>
							<span>{{menu.name}}</span>
						</template>
						<el-menu-item-group v-for="clickMenu in menu.children" :key="clickMenu.route">
								<el-menu-item :index="clickMenu.route">{{clickMenu.name}}</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
  
			<!-- main -->
			<el-container>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
      return {
        menus: [{
					route: 'Discuss',
					name: '讨论',
					icon: 'el-icon-service',
					children: [{
						route: '/homepage/discuss',
						name: '发起讨论',
					},{
						route: '/homepage/collectdis',
						name: '讨论收集',
					}]
				},{
					route: 'classExam',
					name: '课堂测验',
					icon: 'el-icon-edit',
					children: [{
						route: '/homepage/classexam',
						name: '试卷选择',
					},{
						route: '/homepage/collectexam',
						name: '测验结果分析',
					}]
				},{
					route: 'live',
					name: '我的直播',
					icon: 'el-icon-view',
					children: [{
						route: '/homepage/liveinfo',
						name: '直播详情',
					}]
				}],
      }
		},
		created() {
			// this.getRoute()
		},
		watch: {
			// '$router': 'getRoute'
		},
		methods: {
			getRoute() {
				// console.log(this.$route.fullPath)
			}
		}
	}
</script>

<style lang="scss" scoped>
	#options {
		height: 90%;
		width: 100%;
		top: 60px;
		position: absolute;
		background-color: rgb(255,255,255);
		min-width: 900px;
		.el-container {
			height: 100%;
			width: 100%;
			border: 1px solid #eee;
			.el-aside {
				color: #333;
			}
		}
	}
</style>