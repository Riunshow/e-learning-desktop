import { Pie } from 'vue-chartjs' //引入一个Chart对像

export default { //模块化返回对象
    extends: Pie, //继承自Line
    mounted() {

        this.renderChart({ //核心函数.两个参数,一个是数据,一个是参数
            labels: ['完成', '未完成', '完成部分'],
            datasets: [{
                label: 'Data One',
                backgroundColor: ['rgb(242,113,115)', 'rgb(64,181,178)', 'rgb(45,142,229)'],
                data: [40, 5, 55]
            }]
        }, { responsive: false, maintainAspectRatio: false })

    }
}