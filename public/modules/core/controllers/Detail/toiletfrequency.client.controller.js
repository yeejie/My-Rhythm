(function() {
  'use strict';
  angular.module('core.controllers.detail').controller('ToiletFrequencyController', [
    '$scope', '$http', 'Authentication', 'Details', 'socket', function($scope, $http, Authentication, Details, socket) {
      
      //var data1 = [[[1405644207000, 4]]];
      //var data2 = [[[1405644307000, 10]]];

      var tdata, getRandomData, totalPoints, update, updateInterval;
      tdata = [];
      totalPoints = 300;
      getRandomData = function () {
      var milliseconds = (new Date).getTime();

      var i, prev, res, y;
      if (tdata.length > 0) {
      tdata = tdata.slice(10);
      }
      while (tdata.length < totalPoints) {
      prev = (tdata.length > 0 ? tdata[tdata.length - 1] : 50);
      y = prev + Math.random() * 10 - 5;
      if (y < 0) {
      y = 0;
      } else {
      if (y > 100) {
      y = 100;
      }
      }
      tdata.push(y);
      }
      res = [];
      i = 0;
      while (i < tdata.length) {
      res.push([milliseconds + i * 1000, tdata[i]]);
      ++i;
      }
      //console.log(res);
      return res;
      };
      
      update = function () {
            $scope.ToiletData = [getRandomData()];
            $scope.$apply();
            console.log('update');
            setTimeout(update, 1000);
        };

      return update();
        
      //$scope.lineToilet = {};
      
      /*socket.on('realtimedata', function (data) {
            console.log("realtimedata: data is " + data);
            console.log("realtimedata: meta is " + data.meta);
            console.log("realtimedata: val is " + data.val);
            console.log("realtimedata: val x is " + data.val.x);
            console.log("realtimedata: val y is " + data.val.y);
            

            //logger.log(data.meta.toUpperCase() + ' IS ' + data.val.y);
        });*/
        
      /*
      $http.get("/details/toliet").success(function (data) {
      $scope.lineToliet = {};
      var sampledata = [[1112306400000, 382.18], [1114898400000, 382.45], [1117576800000, 382.14], [1120168800000, 380.60], [1122847200000, 378.64], [1125525600000, 376.73], [1128117600000, 376.84], [1130799600000, 378.29], [1133391600000, 380.06], [1136070000000, 381.40], [1138748400000, 382.20], [1141167600000, 382.66], [1143842400000, 384.69], [1146434400000, 384.94], [1149112800000, 384.01], [1151704800000, 382.14], [1154383200000, 380.31], [1157061600000, 378.81], [1159653600000, 379.03], [1162335600000, 380.17], [1164927600000, 381.85], [1167606000000, 382.94], [1170284400000, 383.86], [1172703600000, 384.49], [1175378400000, 386.37], [1177970400000, 386.54], [1180648800000, 385.98], [1183240800000, 384.36], [1185919200000, 381.85], [1188597600000, 380.74], [1191189600000, 381.15], [1193871600000, 382.38], [1196463600000, 383.94], [1199142000000, 385.44]];
       console.log(sampledata);
       $scope.lineToliet.data = [
        {
          data: sampledata,
          label: 'Toliet'
        }
      ];    
      
      $scope.lineToliet.options = {
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
                                borderWidth: 1,
                                borderColor: '#eeeeee'
        },
        xaxis: {
          mode: "time"
        }
      };      
                
       });    
       */    

    }
  ]);

}).call(this);

//# sourceMcoreingURL=ChartCtrl.js.map
