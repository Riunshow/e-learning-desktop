import { Scatter } from 'vue-chartjs' //引入一个Chart对像

export default { //模块化返回对象
    extends: Scatter, //继承自Line
    mounted() {

        this.renderChart({ //核心函数.两个参数,一个是数据,一个是参数
            labels: ['1', '2', '3', '4'],
            datasets: [{
                label: '正确',
                backgroundColor: 'rgba(242,113,115,.4)',
                data: [(-10, 15), (-23, 56), (-23, 25), (-1, 66)]
            }, {
                label: '错误',
                backgroundColor: 'rgba(54,162,235,.4)',
                data: [(-30, 45), (-60, 45), (-40, 76), (-20, 24)]
            }]
        }, { responsive: false, maintainAspectRatio: false })

    }
}