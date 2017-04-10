
var myChart = echarts.init(document.getElementById('main'));

var option = {
    color: ['#40A8FF', '#02D9B2'],
    title: {
        text: "A la découverte d'eCharts"
    },
    tooltip: {},
    legend: {
        data:['Nombre de planettes','Nombre de Vaisseaux'],
    },
    xAxis: {
        data:
        ["EPISODE I","EPISODE II","EPISODE III","EPISODE IV","EPISODE V","EPISODE VI"]
        },
    yAxis: {},
    series: [
        {
        name: 'Nombre de planettes',
        type: 'bar',
        data: [3, 5, 13, 3, 4, 5]

        },
        {
        name: 'Nombre de Vaisseaux',
        type: 'bar',
        data: [5, 9, 12, 8, 9, 12]
        }

]
};

myChart.setOption(option);
