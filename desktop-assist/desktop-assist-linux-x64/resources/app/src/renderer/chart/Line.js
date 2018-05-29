import { Line } from 'vue-chartjs' //引入一个Chart对像

export default { //模块化返回对象
    extends: Line, //继承自Line
    mounted() {

        this.renderChart({ //核心函数.两个参数,一个是数据,一个是参数
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            datasets: [{
                label: '正确',
                backgroundColor: 'rgba(242,113,115,.4)',
                data: [40, 30, 10, 40, 15, 80, 40]
            }, {
                label: '错误',
                backgroundColor: 'rgba(54,162,235,.4)',
                data: [60, 70, 90, 60, 85, 20, 60]
            }]
        }, { responsive: false, maintainAspectRatio: false })

    }
}