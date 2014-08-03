(function() {
  'use strict';
  angular.module('core.controllers.detail').controller('BloodPressureController', [
    '$scope', '$http', 'Authentication', 'Details', 'socket', function($scope, $http, Authentication, Details, socket) {
      var lineChart;
      lineChart = {};
      lineChart.dataBloodPressure = [[1112306400000, 382.18], [1114898400000, 382.45], [1117576800000, 382.14], [1120168800000, 380.60], [1122847200000, 378.64], [1125525600000, 376.73], [1128117600000, 376.84], [1130799600000, 378.29], [1133391600000, 380.06], [1136070000000, 381.40], [1138748400000, 382.20], [1141167600000, 382.66], [1143842400000, 384.69], [1146434400000, 384.94], [1149112800000, 384.01], [1151704800000, 382.14], [1154383200000, 380.31], [1157061600000, 378.81], [1159653600000, 379.03], [1162335600000, 380.17], [1164927600000, 381.85], [1167606000000, 382.94], [1170284400000, 383.86], [1172703600000, 384.49], [1175378400000, 386.37], [1177970400000, 386.54], [1180648800000, 385.98], [1183240800000, 384.36], [1185919200000, 381.85], [1188597600000, 380.74], [1191189600000, 381.15], [1193871600000, 382.38], [1196463600000, 383.94], [1199142000000, 385.44]];

  $http.get("/details/sysdia").success(function (data) {
	    console.log(data);
      $scope.linesys = {};
      $scope.linesys.data = [
        {
          data: data[0][0],
          label: 'SYS'
        }
      ];
      $scope.linesys.options = {
        series: {
          lines: {
            show: true,
            fill: true,
            fillColor: {
              colors: [
                {
                  opacity: 0
                }, {
                  opacity: 0.3
                }
              ]
            }
          },
          points: {
            show: true,
            lineWidth: 2,
            fill: true,
            fillColor: "#ffffff",
            symbol: "circle",
            radius: 5
          }
        },
        colors: [$scope.color.primary, $scope.color.infoAlt],
        tooltip: true,
        tooltipOpts: {
          defaultTheme: false
        },
        grid: {
          hoverable: true,
          clickable: true,
          tickColor: "#f9f9f9",
          borderWidth: 1,
          borderColor: "#eeeeee"
        },
        xaxis: {
          mode: "time",
          timeformat: "%y/%m/%d %H:%M:%S"
        }
      };
      
      
           $scope.linedia = {};
    $scope.linedia.data = [
    {
        data: data[0][1],
        label: 'DIA'
    }
    ];
    $scope.linedia.options = {
    series: {
        lines: {
        show: true,
        fill: true,
        fillColor: {
            colors: [
            {
                opacity: 0
            }, {
                opacity: 0.3
            }
            ]
        }
        },
        points: {
        show: true,
        lineWidth: 2,
        fill: true,
        fillColor: "#ffffff",
        symbol: "circle",
        radius: 5
        }
    },
    colors: [$scope.color.primary, $scope.color.infoAlt],
    tooltip: true,
    tooltipOpts: {
        defaultTheme: false
    },
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#f9f9f9",
        borderWidth: 1,
        borderColor: "#eeeeee"
    },
    xaxis: {
        mode: "time",
        timeformat: "%y/%m/%d %H:%M:%S"
    }
    };

    $scope.linesysdia = {};
    $scope.linesysdia.data = [
    {
        data: data[0][0],
        label: "SYS",
        lines: {
        fill: true
        }
    }, {
        data: data[0][1],
        label: "DIA",
        points: {
        show: true
        },
        yaxis: 2
    }
    ];
    $scope.linesysdia.options = {
    series: {
        lines: {
        show: true,
        fill: false
        },
        points: {
        show: true,
        lineWidth: 2,
        fill: true,
        fillColor: "#ffffff",
        symbol: "circle",
        radius: 5
        },
        shadowSize: 0
    },
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#f9f9f9",
        borderWidth: 1,
        borderColor: "#eeeeee"
    },
    colors: [$scope.color.success, $scope.color.danger],
    tooltip: true,
    tooltipOpts: {
        defaultTheme: false
    },
    xaxis: {
        mode: "time",
        timeformat: "%y/%m/%d %H:%M:%S"
    },
    yaxes: [
        {}, {
        position: "right"
        }
    ]
    };
      
      
      
      
      
      
      
      });
    }
  ]);

}).call(this);

//# sourceMcoreingURL=ChartCtrl.js.map
