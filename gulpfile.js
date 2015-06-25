var gulp       = require("gulp"),
    source     = require("vinyl-source-stream"),
    browserify = require("browserify"),
    watchify   = require("watchify"),
    concat     = require("gulp-concat"),
    stylus     = require("gulp-stylus"),
    uglify     = require("gulp-uglify"),
    webserver  = require("gulp-webserver"),
    stripdebug = require("gulp-strip-debug"),
    htmlmin    = require("gulp-htmlmin"),
    gutil      = require("gulp-util"),
    nib        = require("nib");

gulp.task("default", function(){
  console.log("hello world!!");
});
