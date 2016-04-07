"use strict";

var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");

var scriptsConfig = require("./scriptsConfig.js");

gulp.task("Build_Scripts", function (callback) {
    webpack(scriptsConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[Build Scripts]", stats.toString({ colors: true }));
        callback();
    });
});
