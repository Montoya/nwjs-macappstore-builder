'use strict';

var exec = require('child_process').exec;

var m = {};

m.installIcon = function(app_path, icon_path, callback)
{
    var rm_command = 'rm "' + app_path + '/Contents/Resources/app.icns"';
    var cp_command = 'cp "' + icon_path + '" "' + app_path + '/Contents/Resources/app.icns"';
    exec(rm_command + ' && ' + cp_command, function(error)
    {
        callback(error);
    });
    var rm_command_2 = 'rm "' + app_path + '/Contents/Resources/document.icns"';
    var cp_command_2 = 'cp "' + icon_path + '" "' + app_path + '/Contents/Resources/document.icns"';
    exec(rm_command_2 + ' && ' + cp_command_2, function(error)
    {
        callback(error);
    });
};

module.exports = m;