var data1 = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
        [5, 2, 4, 2, 0]
    ]
};
var data2 = {
    labels: ['Manufacturing', 'Service', 'Other'],
    series: [20, 15, 40]
};

var options = {
    labelInterpolationFnc: function (value) {
        return value[0]
    }
};

var responsiveOptions = [
    ['screen and (min-width: 640px)', {
        chartPadding: 30,
        labelOffset: 80,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
            return value;
        }
    }],
    ['screen and (min-width: 1024px)', {
        labelOffset: 20,
        chartPadding: 20
    }]
];
var data3 = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'March'],
    series: [
        [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
        [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
};

var options2 = {
    seriesBarDistance: 15
};

var responsiveOptions2 = [
    ['screen and (min-width: 641px) and (max-width: 1024px)', {
        seriesBarDistance: 10,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value;
            }
        }
    }],
    ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value[0];
            }
        }
    }]
];
new Chartist.Line('.ct-chart4', data1);
new Chartist.Bar('.ct-chart3', data3, options2, responsiveOptions2);
new Chartist.Pie('.ct-chart2', data2, options, responsiveOptions);
new Chartist.Line('.ct-chart1', data1);
