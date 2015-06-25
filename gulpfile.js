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



/**
 * STYLUS TASK
 * ************
 * pre-compile stylus to CSS
 */

gulp.task('stylus', function() {
  gulp.src('dev/styl/main.styl')
    .pipe(stylus({
      compress: true,
      use: nib()
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/css'))
});


/**
 * COPY TASK
 * ************
 * Copy index to 'dist' folder
 */
gulp.task("copy", function() {
  gulp.src('dev/index.html')
    .pipe(gulp.dest("dist"))
});


/**
 * SERVER TASK
 * ************
 * Run server
 * default port: 8000
 */

gulp.task('server', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: false,
      fallback : 'index.html'
  }));
});



gulp.task('watch', function() {
  gulp.watch('dev/styl/**/*.styl', ['stylus']);
  gulp.watch('dev/**/*.html', ['copy']);
})


gulp.task('build', ['stylus', 'copy']);
gulp.task('dev', ['build', 'server', 'watch']);
