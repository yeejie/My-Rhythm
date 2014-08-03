'use strict';

module.exports = {
	db: 'mongodb://localhost',
	app: {
		title: 'MY RHYTHM - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'CONSUMER_KEY',
		clientSecret: process.env.FACEBOOK_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3575/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'CONSUMER_KEY',
		clientSecret: process.env.GOOGLE_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:357/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	},
    qhwebapisvc: {
        basicAuth: process.env.QHWEBAPISVC_AUTH || 'cWhAcmh5dGhtLnNnOlFVQU5USUZJRUQwOTA1aG9tZQ=='
    },
    qhqueue: {
        queue: process.env.QH_QUEUE || 'DefaultEndpointsProtocol=https;AccountName=qhwebapisvc;AccountKey=tqcFObkA9bVM1eKUzI49lCbEG4E51aUtSE3COgRu5t4yZJ20HBmLV9DT2pHUMAvPNNFpYw1AotLSs+H5Do5mHg=='
    }
};