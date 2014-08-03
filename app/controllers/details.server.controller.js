'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	_ = require('lodash');

var request = require("request");
var async = require('async');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Detail already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

exports.listWeightBMI = function(req, res) {

  console.log("listWeightBMI in Server Controller");
  
  var seriesData = [[[],[]]];
  var name = [[["weight"],["bmi"]]];
  var coor;
  var offset = new Date().getTimezoneOffset();
  
  var provider = req.user.provider; 
  var userid = req.user.providerData.id; 

  console.log("User connected is from " + provider + ", id is " + userid);
  

  var baseurl = "https://qh.azure-api.net/dev/people?provider=" + provider + 
                "&user=" + userid  + 
                "&subscription-key=3beb82658857434d8dad843a076df43d";

	async.parallel([
	 /*
     * 0 external endpoint -> weight
     *
     */
    function(callback) {
    console.log("First GET");  
	  var arr = [];
      var url = baseurl+"&meta="+name[0][0];
      console.log(url);
      request(url, function(err, response, body) {
        // JSON body
        if(err) { console.log(err); callback(true); return; }
        var obj = JSON.parse(body);
    		for(var j=0; j<obj.length; j++){
    	
    				coor = [obj[j].UTC*1000, obj[j].Val]; //{ x: obj[j].UTC+offset*(-60) , y: obj[j].Val};
    				arr.push(coor);
    				
    			}
          console.log("0,0: "+arr.length);
        callback(false, arr);
      });
    },
    /*
     * 1 external endpoint -> bmi
     */
    function(callback) {
	  var arr = [];	
      var url = baseurl+"&meta="+name[0][1];
      request(url, function(err, response, body) {
        // JSON body
        if(err) { console.log(err); callback(true); return; }
        var obj = JSON.parse(body);
    		for(var j=0; j<obj.length; j++){
    	
    				coor = [obj[j].UTC*1000 , obj[j].Val]; //{ x: obj[j].UTC+offset*(-60) , y: obj[j].Val};
    				arr.push(coor);
    				
    			}
          console.log("0,1: "+arr.length);
        callback(false, arr);
      });
    },
    
  ],
	 
  function(err, results) {
    console.log("results length: "+results.length);
    if(err) { console.log(err); res.send(500,"Server Error"); return; }
  	seriesData[0][0] = results[0]; //weight
  	seriesData[0][1] = results[1]; //bmi

    console.log(seriesData);
    
    res.jsonp(seriesData);
  }
  );
 };
 
 
exports.listSysDia = function(req, res) {

  console.log("listSysDia in Server Controller");

  var seriesData = [[[],[]]];
  var name = [[["Systolic"],["Diastolic"]]];
  var coor;
  var offset = new Date().getTimezoneOffset();
  
  var provider = req.user.provider; 
  var userid = req.user.providerData.id; 

  console.log("User connected is from " + provider + ", id is " + userid);
  

  var baseurl = "https://qh.azure-api.net/dev/people?provider=" + provider + 
                "&user=" + userid  + 
                "&subscription-key=3beb82658857434d8dad843a076df43d";

	async.parallel([
	 /*
     * 0 external endpoint -> sys
     *
     */
    function(callback) {
    console.log("First GET");  
	  var arr = [];
      var url = baseurl+"&meta="+name[0][0];
      console.log(url);
      request(url, function(err, response, body) {
        // JSON body
        if(err) { console.log(err); callback(true); return; }
        var obj = JSON.parse(body);
    		for(var j=0; j<obj.length; j++){
    	
    				coor = [obj[j].UTC*1000, obj[j].Val]; //{ x: obj[j].UTC+offset*(-60) , y: obj[j].Val};
    				arr.push(coor);
    				
    			}
          console.log("0,0: "+arr.length);
        callback(false, arr);
      });
    },
    /*
     * 1 external endpoint -> dia
     */
    function(callback) {
	  var arr = [];	
      var url = baseurl+"&meta="+name[0][1];
      request(url, function(err, response, body) {
        // JSON body
        if(err) { console.log(err); callback(true); return; }
        var obj = JSON.parse(body);
    		for(var j=0; j<obj.length; j++){
    	
    				coor = [obj[j].UTC*1000 , obj[j].Val]; //{ x: obj[j].UTC+offset*(-60) , y: obj[j].Val};
    				arr.push(coor);
    				
    			}
          console.log("0,1: "+arr.length);
        callback(false, arr);
      });
    },
    
  ],
	 
  function(err, results) {
    console.log("results length: "+results.length);
    if(err) { console.log(err); res.send(500,"Server Error"); return; }
  	seriesData[0][0] = results[0]; //weight
  	seriesData[0][1] = results[1]; //bmi

    console.log(seriesData);
    
    res.jsonp(seriesData);
  }
  );
 };
 
 
 exports.listheart = function(req, res) {

  console.log("listheart in Server Controller");
  
  var seriesData = [[[],[]]];
  var name = "PulseRate";
  var coor;
  var offset = new Date().getTimezoneOffset();
  
  var provider = req.user.provider; 
  var userid = req.user.providerData.id; 
 
  console.log("User connected is from " + provider + ", id is " + userid);
  

  var baseurl = "https://qh.azure-api.net/dev/people?provider=" + provider + 
                "&user=" + userid  + 
                "&subscription-key=3beb82658857434d8dad843a076df43d";

	async.parallel([
	 /*
     * 0 external endpoint -> pulse
     *
     */
    function(callback) {
    console.log("First GET");  
	  var arr = [];
      var url = baseurl+"&meta="+name;
      console.log(url);
      request(url, function(err, response, body) {
        // JSON body
        if(err) { console.log(err); callback(true); return; }
        var obj = JSON.parse(body);
    		for(var j=0; j<obj.length; j++){
    	
    				coor = [obj[j].UTC*1000, obj[j].Val]; //{ x: obj[j].UTC+offset*(-60) , y: obj[j].Val};
    				arr.push(coor);
    				
    			}
          console.log("0,0: "+arr.length);
        callback(false, arr);
      });
    },
   
    
  ],
	 
  function(err, results) {
    console.log("results length: "+results.length);
    if(err) { console.log(err); res.send(500,"Server Error"); return; }
  	seriesData[0] = results[0]; 
  	

    console.log(seriesData);
    
    res.jsonp(seriesData);
  }
  );
 };
 
  exports.listResp = function(req, res) {

  console.log("listResp in Server Controller");
  
  var seriesData = [[[],[]]];
  var name = "RespirationRate";
  var coor;
  var offset = new Date().getTimezoneOffset();
  
  var provider = req.user.provider; 
  var userid = req.user.providerData.id; 
  
  console.log("User connected is from " + provider + ", id is " + userid);
  

  var baseurl = "https://qh.azure-api.net/dev/people?provider=" + provider + 
                "&user=" + userid  + 
                "&subscription-key=3beb82658857434d8dad843a076df43d";

	async.parallel([
	 /*
     * 0 external endpoint -> pulse
     *
     */
    function(callback) {
    console.log("First GET");  
	  var arr = [];
      var url = baseurl+"&meta="+name;
      console.log(url);
      request(url, function(err, response, body) {
        // JSON body
        if(err) { console.log(err); callback(true); return; }
        var obj = JSON.parse(body);
    		for(var j=0; j<obj.length; j++){
    	
    				coor = [obj[j].UTC*1000, obj[j].Val]; //{ x: obj[j].UTC+offset*(-60) , y: obj[j].Val};
    				arr.push(coor);
    				
    			}
          console.log("0,0: "+arr.length);
        callback(false, arr);
      });
    },
   
    
  ],
	 
  function(err, results) {
    console.log("results length: "+results.length);
    if(err) { console.log(err); res.send(500,"Server Error"); return; }
  	seriesData[0] = results[0]; 
  	

    console.log(seriesData);
    
    res.jsonp(seriesData);
  }
  );
 };   


exports.listBloodOxy = function(req, res) {
 
  console.log("listBloodOxy in Server Controller");
  
  var seriesData = [[[],[]]];
  var name = "BloodOxygen";
  var coor;
  var offset = new Date().getTimezoneOffset();
  
  var provider = req.user.provider; 
  var userid = req.user.providerData.id; 

  console.log("User connected is from " + provider + ", id is " + userid);
  

  var baseurl = "https://qh.azure-api.net/dev/people?provider=" + provider + 
                "&user=" + userid  + 
                "&subscription-key=3beb82658857434d8dad843a076df43d";

	async.parallel([
	 /*
     * 0 external endpoint -> pulse
     *
     */
    function(callback) {
    console.log("First GET");  
	  var arr = [];
      var url = baseurl+"&meta="+name;
      console.log(url);
      request(url, function(err, response, body) {
        // JSON body
        if(err) { console.log(err); callback(true); return; }
        var obj = JSON.parse(body);
    		for(var j=0; j<obj.length; j++){
    	
    				coor = [obj[j].UTC*1000, obj[j].Val]; //{ x: obj[j].UTC+offset*(-60) , y: obj[j].Val};
    				arr.push(coor);
    				
    			}
          console.log("0,0: "+arr.length);
        callback(false, arr);
      });
    },
   
    
  ],
	 
  function(err, results) {
    console.log("results length: "+results.length);
    if(err) { console.log(err); res.send(500,"Server Error"); return; }
  	seriesData[0] = results[0]; 
  	

    console.log(seriesData);
    
    res.jsonp(seriesData);
  }
  );
 };
 
 exports.listSleep = function(req, res) {
 
  console.log("listSleep in Server Controller");
  
  var seriesData = [[[],[]]];
  var name = "ToiletFrequency";
  var coor;
  var offset = new Date().getTimezoneOffset();
  
  var provider = req.user.provider;
  var userid = req.user.providerData.id; 
  
  console.log("User connected is from " + provider + ", id is " + userid);
  

  var baseurl = "https://qh.azure-api.net/dev/people?provider=" + provider + 
                "&user=" + userid  + 
                "&subscription-key=3beb82658857434d8dad843a076df43d";

	async.parallel([
	 /*
     * 0 external endpoint -> pulse
     *
     */
    function(callback) {
    console.log("First GET");  
	  var arr = [];
      var url = baseurl+"&meta="+name;
      console.log(url);
      request(url, function(err, response, body) {
        // JSON body
        if(err) { console.log(err); callback(true); return; }
        var obj = JSON.parse(body);
    		for(var j=0; j<obj.length; j++){
    	
    				coor = [obj[j].UTC*1000, obj[j].Val]; //{ x: obj[j].UTC+offset*(-60) , y: obj[j].Val};
    				arr.push(coor);
    				
    			}
          console.log("0,0: "+arr.length);
        callback(false, arr);
      });
    },
   
    
  ],
	 
  function(err, results) {
    console.log("results length: "+results.length);
    if(err) { console.log(err); res.send(500,"Server Error"); return; }
  	seriesData[0] = results[0]; 
  	

    console.log(seriesData);
    
    res.jsonp(seriesData);
  }
  );
 };  
 
 
 exports.listFitness = function(req, res) {

  console.log("listFitness in Server Controller");
  
  var seriesData = [[[],[]]];
  var name = "Steps";
  var coor;
  var offset = new Date().getTimezoneOffset();
  
  var provider = req.user.provider; 
  var userid = req.user.providerData.id; 
  
  console.log("User connected is from " + provider + ", id is " + userid);
  

  var baseurl = "https://qh.azure-api.net/dev/people?provider=" + provider + 
                "&user=" + userid  + 
                "&subscription-key=3beb82658857434d8dad843a076df43d";

	async.parallel([
	 /*
     * 0 external endpoint -> pulse
     *
     */
    function(callback) {
    console.log("First GET");  
	  var arr = [];
      var url = baseurl+"&meta="+name;
      console.log(url);
      request(url, function(err, response, body) {
        // JSON body
        if(err) { console.log(err); callback(true); return; }
        var obj = JSON.parse(body);
    		for(var j=0; j<obj.length; j++){
    	
    				coor = [obj[j].UTC*1000, obj[j].Val]; //{ x: obj[j].UTC+offset*(-60) , y: obj[j].Val};
    				arr.push(coor);
    				
    			}
          console.log("0,0: "+arr.length);
        callback(false, arr);
      });
    },
   
    
  ],
	 
  function(err, results) {
    console.log("results length: "+results.length);
    if(err) { console.log(err); res.send(500,"Server Error"); return; }
  	seriesData[0] = results[0]; 
  	

    console.log(seriesData);
    
    res.jsonp(seriesData);
  }
  );
 };
 
  exports.listToliet = function(req, res) {

  console.log("listToliet in Server Controller");
  
  var seriesData = [[[],[]]];
  var name = "ToiletFrequency";
  var coor;
  var offset = new Date().getTimezoneOffset();
  
  var provider = req.user.provider; 
  var userid = req.user.providerData.id; 
  
  console.log("User connected is from " + provider + ", id is " + userid);
  

  var baseurl = "https://qh.azure-api.net/dev/people?provider=" + provider + 
                "&user=" + userid  + 
                "&subscription-key=3beb82658857434d8dad843a076df43d";

	async.parallel([
	 /*
     * 0 external endpoint -> pulse
     *
     */
    function(callback) {
    console.log("First GET");  
	  var arr = [];
      var url = baseurl+"&meta="+name;
      console.log(url);
      request(url, function(err, response, body) {
        // JSON body
        if(err) { console.log(err); callback(true); return; }
        var obj = JSON.parse(body);
    		for(var j=0; j<obj.length; j++){
    	
    				coor = [obj[j].UTC*1000, obj[j].Val]; //{ x: obj[j].UTC+offset*(-60) , y: obj[j].Val};
    				arr.push(coor);
    				
    			}
          console.log("0,0: "+arr.length);
        callback(false, arr);
      });
    },
   
    
  ],
	 
  function(err, results) {
    console.log("results length: "+results.length);
    if(err) { console.log(err); res.send(500,"Server Error"); return; }
  	seriesData[0] = results[0]; 
  	

    console.log(seriesData);
    
    res.jsonp(seriesData);
  }
  );
 };
 
  exports.listDashboard = function (req, res) {
     console.log("listDashboard in Server Controller");

     var provider = req.user.provider; 
     var userid = req.user.providerData.id; 
     
     console.log("User connected is from " + provider + ", id is " + userid);


     var baseurl = "https://qh.azure-api.net/dev/peoplelatest?provider=" + provider +
                "&user=" + userid +
                "&subscription-key=3beb82658857434d8dad843a076df43d";

     async.parallel([
    function (callback) {
        console.log("First GET");
        var arr = [];
        var url = baseurl + "&metas=steps,bmi,systolic,diastolic,pulserate,respirationrate,bloodoxygen";
        console.log(url);
        request(url, function (err, response, body) {
            // JSON body
            if (err) { console.log(err); callback(true); return; }
            var obj = JSON.parse(body);

            callback(false, obj);
        });
    }
  ],

  function (err, results) {
      console.log("results length: " + results.length);
      if (err) { console.log(err); res.send(500, "Server Error"); return; }

      res.jsonp(results);
  }
  );
 };
