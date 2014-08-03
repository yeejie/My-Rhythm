(function() {
  'use strict';
  angular.module('core.controllers.detail').controller('IntakeController', [
    '$scope', function($scope) {
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
            
            $scope.WaterIntakeData = [getRandomData()];
            $scope.SugarIntakeData = [getRandomData()];
            $scope.FruitIntakeData = [getRandomData()];
            $scope.$apply();
            console.log('update');
            setTimeout(update, 1000);
        };

      return update();

    }
  ]);

}).call(this);

//# sourceMcoreingURL=ChartCtrl.js.map
