(function () {
    'use strict';
    angular.module('core.controllers.shared', []).controller('AppCtrl', ['$scope', '$rootScope', '$location', 'Authentication',
    function ($scope, $rootScope, $location, Authentication) {
        $scope.user = Authentication.user;
        // If user is not signed in then redirect back home

        var $window;
        $window = $(window);
        $scope.main = {
            brand: 'My Rhythm',
            name: 'Anonymous'
        };

        if (!$scope.user) {
            $location.path('signin');
            return;
        }

        $scope.pageTransitionOpts = [
        {
            name: 'Scale up',
            "class": 'ainmate-scale-up'
        }, {
            name: 'Fade up',
            "class": 'animate-fade-up'
        }, {
            name: 'Slide in from right',
            "class": 'ainmate-slide-in-right'
        }, {
            name: 'Flip Y',
            "class": 'animate-flip-y'
        }
      ];
        $scope.admin = {
            layout: 'wide',
            menu: 'vertical',
            fixedHeader: true,
            fixedSidebar: false,
            pageTransition: $scope.pageTransitionOpts[0]
        };
        $scope.$watch('admin', function (newVal, oldVal) {
            if (newVal.menu === 'horizontal' && oldVal.menu === 'vertical') {
                $rootScope.$broadcast('nav:reset');
                return;
            }
            if (newVal.fixedHeader === false && newVal.fixedSidebar === true) {
                if (oldVal.fixedHeader === false && oldVal.fixedSidebar === false) {
                    $scope.admin.fixedHeader = true;
                    $scope.admin.fixedSidebar = true;
                }
                if (oldVal.fixedHeader === true && oldVal.fixedSidebar === true) {
                    $scope.admin.fixedHeader = false;
                    $scope.admin.fixedSidebar = false;
                }
                return;
            }
            if (newVal.fixedSidebar === true) {
                $scope.admin.fixedHeader = true;
            }
            if (newVal.fixedHeader === false) {
                $scope.admin.fixedSidebar = false;
            }
        }, true);
        return $scope.color = {
            primary: '#248AAF',
            success: '#3CBC8D',
            info: '#29B7D3',
            infoAlt: '#666699',
            warning: '#FAC552',
            danger: '#E9422E'
        };
    }
  ]).controller('HeaderCtrl', [
    '$scope', function ($scope) {
        return $scope.introOptions = {
            steps: [
          {
              element: '#step1',
              intro: "<strong>Heads up!</strong> You can change the layout here",
              position: 'bottom'
          }, {
              element: '#step2',
              intro: "Select a different language",
              position: 'left'
          }, {
              element: '#step3',
              intro: "Collapsed nav for both horizontal nav and vertical nav",
              position: 'right'
          }
        ]
        };
    }
  ]).controller('NavContainerCtrl', ['$scope', function ($scope) { } ]).controller('NavCtrl', [
    '$scope', 'taskStorage', 'filterFilter', function ($scope, taskStorage, filterFilter) {
        var tasks;
        tasks = $scope.tasks = taskStorage.get();
        $scope.taskRemainingCount = filterFilter(tasks, {
            completed: false
        }).length;
        return $scope.$on('taskRemaining:changed', function (event, count) {
            return $scope.taskRemainingCount = count;
        });
    }
  ])//.controller('DashboardCtrl', ['$scope', function ($scope) { } ]);
    .controller('DashboardCtrl', ['$scope', '$http', '$location', 'Authentication', 'socket', 'logger',
    function ($scope, $http, $location, Authentication, socket, logger) {
        $scope.user = Authentication.user;

        // If user is not signed in then redirect back home
        if (!$scope.user) {
            $location.path('signin');
            return;
        }

        socket.on('realtimedata', function (data) {
            console.log("realtimedata: data is " + data);
            console.log("realtimedata: meta is " + data.meta);
            //console.log("realtimedata: val is " + data.val);
            //console.log("realtimedata: val x is " + data.val.x);
            //console.log("realtimedata: val y is " + data.val.y);

            logger.log(data.meta.toUpperCase() + ' IS ' + data.val.y);
        });
        
                $scope.setExercise = function (No) {
            switch (No) {
                case 2:
                    $scope.MetricExercise = [{ type: 'success', msg: 'Active: Above 10,000 Steps'}];
                    break;
                case 1:
                    $scope.MetricExercise = [{ type: 'warning', msg: 'Slightly Active: 5,000-9,999 Steps'}];
                    break;
                case 0:
                    $scope.MetricExercise = [{ type: 'danger', msg: 'Sedentary: Below 4,999 Steps'}];
                    break;
                default:
                    break;
            }
        };

        $scope.setBMI = function (No) {
            switch (No) {
                case 2:
                    $scope.MetricBMI = [{ type: 'success', msg: 'Normal: 18.5-25.0'}];
                    break;
                case 1:
                    $scope.MetricBMI = [{ type: 'warning', msg: 'Underweight: Below 18.5 OR Overweight: 25.0-30.0'}];
                    break;
                case 0:
                    $scope.MetricBMI = [{ type: 'danger', msg: 'Obese: Above 30.0'}];
                    break;
                default:
                    break;
            }
        };

        $scope.setBloodPressureS = function (No) {
            switch (No) {
                case 2:
                    $scope.MetricBloodPressureS = [{ type: 'success', msg: 'Normal: Systolic Below 120mmHg'}];                    
                    break;
                case 1:
                    $scope.MetricBloodPressureS = [{ type: 'warning', msg: 'Pre-HyperTension: Systolic 120-140mmHg'}];                    
                    break;
                case 0:
                    $scope.MetricBloodPressureS = [{ type: 'danger', msg: 'HyperTension: Systolic Above 140mmHg'}];                    
                    break;
                default:
                    break;
            }
        };

        $scope.setBloodPressureD = function (No) {
            switch (No) {
                case 2:                   
                    $scope.MetricBloodPressureD = [{ type: 'success', msg: 'Normal: Diastolic Below 80mmHg'}];
                    break;
                case 1:                    
                    $scope.MetricBloodPressureD = [{ type: 'warning', msg: 'Pre-HyperTension: Diastolic 80-90mmHg'}];
                    break;
                case 0:                    
                    $scope.MetricBloodPressureD = [{ type: 'danger', msg: 'HyperTension: Diastolic Above 90mmHg'}];
                    break;
                default:
                    break;
            }
        };

        $scope.setHeartRate = function (No) {
            switch (No) {
                case 2:
                    $scope.MetricHeartRate = [{ type: 'success', msg: 'Normal: 60-101 beats/min'}];
                    break;
                case 0:
                    $scope.MetricHeartRate = [{ type: 'danger', msg: 'Bradycardia: Below 60 OR Tachycardia: Above 101 beats/min'}];
                    break;
                default:
                    break;
            }
        };

        $scope.setRespRate = function (No) {
            switch (No) {
                case 2:
                    $scope.MetricRespRate = [{ type: 'success', msg: 'Normal: 12-20 breaths/min'}];
                    break;
                case 0:
                    $scope.MetricRespRate = [{ type: 'danger', msg: 'Decreased: Below 11 OR Increased: Above 20 breaths/min'}];
                    break;
                default:
                    break;
            }
        };

        $scope.setBloodOxygen = function (No) {
            switch (No) {
                case 2:
                    $scope.MetricBloodOxygen = [{ type: 'success', msg: 'Normal: 95-100%'}];
                    break;
                case 0:
                    $scope.MetricBloodOxygen = [{ type: 'danger', msg: 'Hypoxemia: 80-90% OR Hazard: Below 80%'}];
                    break;
                default:
                    break;
            }
        };

        $http.get("/details/dashboard").success(function (latestdata) {
            console.log(latestdata);
            console.log(latestdata[0][0].Meta);

            for (var j = 0; j < latestdata[0].length; j++) {
                switch (latestdata[0][j].Meta) {
                    case 'Steps':
                        var dataval = latestdata[0][j].Val;
                        if (dataval >= 10000) {
                            $scope.setExercise(2);
                        } else if (dataval >= 5000 && dataval < 10000) {
                            $scope.setExercise(1);
                        } else {
                            $scope.setExercise(0);
                        }

                        $scope.gaugeExercise = {
                            data: {
                                minValue: 0,
                                maxValue: 10000,
                                animationSpeed: 20,
                                val: dataval,
                                txt: 'PreviewExercise'
                            },
                            options: {
                                lines: 12,
                                angle: 0,
                                lineWidth: 0.47,
                                pointer: {
                                    length: 0.6,
                                    strokeWidth: 0.03,
                                    color: '#000000'
                                },
                                limitMax: 'false',
                                strokeColor: '#E0E0E0',
                                generateGradient: true,
                                percentColors: [[0.0, $scope.color.danger], [0.5, $scope.color.warning], [1.0, $scope.color.success]]
                            }
                        };
                        break;

                    case 'BMI':
                        var dataval = latestdata[0][j].Val;
                        var min, max, bgcolor;

                        if ((dataval > 18.5) && (dataval <= 25)) {
                            min = 18.5;
                            max = 25;
                            bgcolor = $scope.color.success;
                            $scope.setBMI(2);
                        } else if (dataval <= 18.5) {
                            min = 0;
                            max = 18.5;
                            bgcolor = $scope.color.warning;
                            $scope.setBMI(1);
                        } else if ((dataval > 25) && (dataval <= 30)) {
                            min = 25;
                            max = 30;
                            bgcolor = $scope.color.warning;
                            $scope.setBMI(1);
                        }
                        else {
                            min = 30;
                            max = 50;
                            bgcolor = $scope.color.danger;
                            $scope.setBMI(0);
                        }

                        $scope.gaugeBMI = {
                            data: {
                                minValue: min,
                                maxValue: max,
                                animationSpeed: 30,
                                val: dataval,
                                txt: 'PreviewBMI'
                            },
                            options: {
                                lines: 12,
                                angle: 0,
                                lineWidth: 0.47,
                                pointer: {
                                    length: 0.6,
                                    strokeWidth: 0.03,
                                    color: '#000000'
                                },
                                limitMax: 'false',
                                strokeColor: '#E0E0E0',
                                generateGradient: true,
                                colorStart: bgcolor,
                                colorStop: bgcolor
                                //percentColors: [[0.0, $scope.color.danger], [0.5, $scope.color.warning], [1.0, $scope.color.success]]
                            }
                        };
                        break;

                    case 'Systolic':
                        var dataval = latestdata[0][j].Val;
                        var min, max, bgcolor;

                        if (dataval <= 120) {
                            min = 0;
                            max = 120;
                            bgcolor = $scope.color.success;
                            $scope.setBloodPressureS(2);
                        } else if ((dataval > 120) && (dataval <= 140)) {
                            min = 120;
                            max = 140;
                            bgcolor = $scope.color.warning;
                            $scope.setBloodPressureS(1);
                        }
                        else {
                            min = 140;
                            max = 200;
                            bgcolor = $scope.color.danger;
                            $scope.setBloodPressureS(0);
                        }

                        $scope.gaugeBloodPressureS = {
                            data: {
                                minValue: min,
                                maxValue: max,
                                animationSpeed: 30,
                                val: dataval,
                                txt: 'PreviewBPS'
                            },
                            options: {
                                lines: 12,
                                angle: 0,
                                lineWidth: 0.47,
                                pointer: {
                                    length: 0.6,
                                    strokeWidth: 0.03,
                                    color: '#000000'
                                },
                                limitMax: 'false',
                                strokeColor: '#E0E0E0',
                                generateGradient: true,
                                colorStart: bgcolor,
                                colorStop: bgcolor
                                //percentColors: [[0.0, $scope.color.danger], [0.5, $scope.color.warning], [1.0, $scope.color.success]]
                            }
                        };
                        break;

                    case 'Diastolic':
                        var dataval = latestdata[0][j].Val;
                        var min, max, bgcolor;

                        if (dataval <= 80) {
                            min = 0;
                            max = 80;
                            bgcolor = $scope.color.success;
                            $scope.setBloodPressureD(2);
                        } else if ((dataval > 80) && (dataval <= 90)) {
                            min = 80;
                            max = 90;
                            bgcolor = $scope.color.warning;
                            $scope.setBloodPressureD(1);
                        }
                        else {
                            min = 90;
                            max = 100;
                            bgcolor = $scope.color.danger;
                            $scope.setBloodPressureD(0);
                        }

                        $scope.gaugeBloodPressureD = {
                            data: {
                                minValue: min,
                                maxValue: max,
                                animationSpeed: 30,
                                val: dataval,
                                txt: 'PreviewBPD'
                            },
                            options: {
                                lines: 12,
                                angle: 0,
                                lineWidth: 0.47,
                                pointer: {
                                    length: 0.6,
                                    strokeWidth: 0.03,
                                    color: '#000000'
                                },
                                limitMax: 'false',
                                strokeColor: '#E0E0E0',
                                generateGradient: true,
                                colorStart: bgcolor,
                                colorStop: bgcolor
                                //percentColors: [[0.0, $scope.color.danger], [0.5, $scope.color.warning], [1.0, $scope.color.success]]
                            }
                        };
                        break;

                    case 'PulseRate':
                        var dataval = latestdata[0][j].Val;
                        var min, max, bgcolor;

                        if ((dataval >= 60) && (dataval <= 101)) {
                            min = 60;
                            max = 101;
                            bgcolor = $scope.color.success;
                            $scope.setHeartRate(2);
                        } else if (dataval < 60) {
                            min = 30;
                            max = 60;
                            bgcolor = $scope.color.danger;
                            $scope.setHeartRate(0);
                        } else if (dataval > 101) {
                            min = 101;
                            max = 150;
                            bgcolor = $scope.color.danger;
                            $scope.setHeartRate(0);
                        }

                        $scope.gaugeHeartRate = {
                            data: {
                                minValue: min,
                                maxValue: max,
                                animationSpeed: 30,
                                val: dataval,
                                txt: 'PreviewHeartRate'
                            },
                            options: {
                                lines: 12,
                                angle: 0,
                                lineWidth: 0.47,
                                pointer: {
                                    length: 0.6,
                                    strokeWidth: 0.03,
                                    color: '#000000'
                                },
                                limitMax: 'false',
                                strokeColor: '#E0E0E0',
                                generateGradient: true,
                                colorStart: bgcolor,
                                colorStop: bgcolor
                                //percentColors: [[0.0, $scope.color.danger], [0.5, $scope.color.warning], [1.0, $scope.color.success]]
                            }
                        };
                        break;
                    
                    case 'RespirationRate':
                        var dataval = latestdata[0][j].Val;
                        var min, max, bgcolor;

                        if ((dataval >= 12) && (dataval <= 20)) {
                            min = 12;
                            max = 20;
                            bgcolor = $scope.color.success;
                            $scope.setRespRate(2);
                        } else if (dataval < 12) {
                            min = 5;
                            max = 12;
                            bgcolor = $scope.color.danger;
                            $scope.setRespRate(0);
                        } else if (dataval > 20) {
                            min = 20;
                            max = 30;
                            bgcolor = $scope.color.danger;
                            $scope.setRespRate(0);
                        }

                        $scope.gaugeRespRate = {
                            data: {
                                minValue: min,
                                maxValue: max,
                                animationSpeed: 40,
                                val: dataval,
                                txt: 'PreviewRespRate'
                            },
                            options: {
                                lines: 12,
                                angle: 0,
                                lineWidth: 0.47,
                                pointer: {
                                    length: 0.6,
                                    strokeWidth: 0.03,
                                    color: '#000000'
                                },
                                limitMax: 'false',
                                strokeColor: '#E0E0E0',
                                generateGradient: true,
                                colorStart: bgcolor,
                                colorStop: bgcolor
                                //percentColors: [[0.0, $scope.color.danger], [0.5, $scope.color.warning], [1.0, $scope.color.success]]
                            }
                        };
                        break;

                    case 'BloodOxygen':
                        var dataval = latestdata[0][j].Val;
                        var min, max, bgcolor;

                        if ((dataval >= 95) && (dataval <= 100)) {
                            min = 95;
                            max = 100;
                            bgcolor = $scope.color.success;
                            $scope.setBloodOxygen(2);
                        } else {
                            min = 60;
                            max = 95;
                            bgcolor = $scope.color.danger;
                            $scope.setBloodOxygen(0);
                        } 

                        $scope.gaugeBloodOxygen = {
                            data: {
                                minValue: min,
                                maxValue: max,
                                animationSpeed: 30,
                                val: dataval,
                                txt: 'PreviewBO'
                            },
                            options: {
                                lines: 12,
                                angle: 0,
                                lineWidth: 0.47,
                                pointer: {
                                    length: 0.6,
                                    strokeWidth: 0.03,
                                    color: '#000000'
                                },
                                limitMax: 'false',
                                strokeColor: '#E0E0E0',
                                generateGradient: true,
                                colorStart: bgcolor,
                                colorStop: bgcolor
                                //percentColors: [[0.0, $scope.color.danger], [0.5, $scope.color.warning], [1.0, $scope.color.success]]
                            }
                        };
                        break;
                }
            }

        });
    }
    ]);

}).call(this);

//# sourceMappingURL=Nav.js.map