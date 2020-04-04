var data1 = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
        [545, 223, 427, 294, 012]
    ]
};
var data2 = {
    labels: ['Manufacturing', 'Service', 'Other'],
    series: [{
        value: 35,
        className: 'color1',
    },
    {
        value: 25,
        className: 'color2',
    },
    {
        value: 45,
        className: 'color3',
    }]
};

var options = {
    labelInterpolationFnc: function (value) {
        return value[0]
    }
};

var responsiveOptions = [
    ['screen and (min-width: 640px)', {
        chartPadding: 30,
        labelOffset: 30,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
            return value;
        }
    }],
    ['screen and (min-width: 1024px)', {
        labelOffset: 10,
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
var data4 = {
    // A labels array that can contain any sort of values
    labels: ['3-5', '5-8', '8-10', '10-15', '15+'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
        [462, 930, 729, 294, 392]
    ]
};
new Chartist.Line('.ct-chart4', data4);
new Chartist.Bar('.ct-chart3', data3, options2, responsiveOptions2);
new Chartist.Pie('.ct-chart2', data2, options, responsiveOptions);
new Chartist.Line('.ct-chart1', data1);
