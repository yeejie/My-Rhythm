'use strict';

//Details service used to communicate Details REST endpoints
angular.module('core')
.factory('Details', ['$resource',
	function($resource) {
		return $resource('details/:detailId', { detailId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);