'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var details = require('../../app/controllers/details');
	
    app.route('/details/weightbmi') 
		.get(details.listWeightBMI);
    
	app.route('/details/sysdia') 
		.get(details.listSysDia);
		
	app.route('/details/heartrate') 
		.get(details.listheart);
		
	app.route('/details/resp') 
		.get(details.listResp);
    
	app.route('/details/bloodoxy') 
		.get(details.listBloodOxy);
	
	app.route('/details/sleep') 
		.get(details.listSleep);
			
	app.route('/details/fitness') 
		.get(details.listFitness);
    
	app.route('/details/toliet') 
		.get(details.listToliet);
		
	app.route('/details/dashboard')
		.get(details.listDashboard);

};