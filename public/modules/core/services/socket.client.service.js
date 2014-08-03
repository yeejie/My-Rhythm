'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('core').factory('socket', function (socketFactory) {
    return socketFactory();
});