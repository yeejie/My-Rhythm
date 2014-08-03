'use strict';

/**
 * Module dependencies.
 */
exports.index = function (req, res) {
    console.log("In Core Server");
    res.render('index', {
        user: req.user || null
    });
};