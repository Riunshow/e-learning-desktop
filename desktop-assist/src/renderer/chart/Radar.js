import { Radar } from 'vue-chartjs' //引入一个Chart对像

export default { //模块化返回对象
    extends: Radar, //继承自Line
    mounted() {

        this.renderChart({ //核心函数.两个参数,一个是数据,一个是参数
            labels: ['想象力', '空间力', '逻辑分析', '情感'],
            datasets: [{
                label: '女生',
                backgroundColor: 'rgba(242,113,115,.4)',
                data: [40, 30, 10, 40]
            }, {
                label: '男生',
                backgroundColor: 'rgba(54,162,235,.4)',
                data: [60, 70, 90, 60]
            }]
        }, { responsive: false, maintainAspectRatio: false })

    }
}