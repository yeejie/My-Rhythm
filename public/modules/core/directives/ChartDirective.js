(function () {
    'use strict';
    angular.module('core.chart.directives', []).directive('gaugeChart', [
    function () {
        return {
            restrict: 'A',
            scope: {
                data: '=',
                options: '='
            },
            link: function (scope, ele, attrs) {
                scope.$watch('data', function () {
                    var data, gauge, options;
                    data = scope.data;
                    options = scope.options;
                    gauge = new Gauge(ele[0]).setOptions(options);
                    gauge.minValue = data.minValue;
                    gauge.maxValue = data.maxValue;
                    gauge.animationSpeed = data.animationSpeed;
                    gauge.setTextField(document.getElementById(data.txt));
                    return gauge.set(data.val);
                });
            }
        };
    }
  ]).directive('flotChart', [
    function () {
        return {
            restrict: 'A',
            scope: {
                data: '=',
                options: '='
            },
            link: function (scope, ele, attrs) {
                scope.$watch('data', function () {
                    if (scope.data.length > 0) {
                        var data, options, plot;
                        data = scope.data;
                        options = scope.options;
                        console.log("In flotChart Directive: ");
                        console.log("Scope.data: ");
                        console.log(data);
                        return plot = $.plot(ele[0], data, options);
                    }
                });
            }
        };
    }
  ]).directive('flotChartRealtime', [
    function () {
        return {
            restrict: 'A',
            scope: {
                realtimedata: '='
            },
            link: function (scope, ele, attrs) {
                var plot;

                plot = null;

                //scope.$watch(function(){return scope.data;}, function(obj) {
                scope.$watch('realtimedata', function () {
                    console.log('i am watched');
                    if (!plot) {
                        console.log('plot is null');
                        plot = $.plot(ele[0], scope.realtimedata, {
                            series: {
                                lines: {
                                    show: true,
                                    fill: true
                                },
                                shadowSize: 0
                            },
                            xaxis: {
                                mode: "time"
                            },
                            grid: {
                                hoverable: true,
                                borderWidth: 1,
                                borderColor: '#eeeeee'
                            },
                            colors: ["#70b1cf"]
                        });
                    }
                    else {
                        console.log('plot setdata');
                        plot.setData(scope.realtimedata);
                        plot.draw();
                    }
                }, true);
            }
        };
    }
  ]).directive('sparkline', [
    function () {
        return {
            restrict: 'A',
            scope: {
                data: '=',
                options: '='
            },
            link: function (scope, ele, attrs) {
                var data, options, sparkResize, sparklineDraw;
                data = scope.data;
                options = scope.options;
                sparkResize = void 0;
                sparklineDraw = function () {
                    return ele.sparkline(data, options);
                };
                $(window).resize(function (e) {
                    clearTimeout(sparkResize);
                    return sparkResize = setTimeout(sparklineDraw, 200);
                });
                return sparklineDraw();
            }
        };
    }
  ]).directive('morrisChart', [
    function () {
        return {
            restrict: 'A',
            scope: {
                data: '=',
                type: '=',
                options: '='
            },
            link: function (scope, ele, attrs) {
                var data, func, options, type;
                data = scope.data;
                type = scope.type;
                switch (type) {
                    case 'line':
                        options = angular.extend({
                            element: ele[0],
                            data: data
                        }, scope.options);
                        return new Morris.Line(options);
                    case 'area':
                        options = angular.extend({
                            element: ele[0],
                            data: data
                        }, scope.options);
                        return new Morris.Area(options);
                    case 'bar':
                        options = angular.extend({
                            element: ele[0],
                            data: data
                        }, scope.options);
                        return new Morris.Bar(options);
                    case 'donut':
                        options = angular.extend({
                            element: ele[0],
                            data: data
                        }, scope.options);
                        if (options.formatter) {
                            func = new Function('y', 'data', options.formatter);
                            options.formatter = func;
                        }
                        return new Morris.Donut(options);
                }
            }
        };
    }
  ]);

}).call(this);

//# sourceMcoreingURL=ChartDirective.js.map
