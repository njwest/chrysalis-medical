/*jslint node: true */
'use strict';

exports.home = function(req, res, next) {
  res.sendFile(process.cwd() + '/app/index.html');
};
