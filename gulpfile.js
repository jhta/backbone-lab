var gulp       = require("gulp"),
    source     = require("vinyl-source-stream"),
    browserify = require("browserify"),
    watchify   = require("watchify"),
    hbsfy      = require("hbsfy"),
    to5ify     = require("6to5ify"),
    concat     = require("gulp-concat"),
    stylus     = require("gulp-stylus"),
    uglify     = require("gulp-uglify"),
    webserver  = require("gulp-webserver"),
    stripdebug = require("gulp-strip-debug"),
    htmlmin    = require("gulp-htmlmin"),
    gutil      = require("gulp-util"),
    rename     = require("gulp-rename"),
    nib        = require("nib");




function bundleScripts(watch){
  var bundler = browserify('./dev/js/app.js',{
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  if(watch) {
    bundler = watchify(bundler);
  }
  hbsfy.configure({
    extensions: ['hbs']
  });

  bundler
    .transform(to5ify)
    .transform(hbsfy)

  function rebundle() {
    var stream = bundler.bundle();
    var started = new Date().getTime();

    stream.on('end',function() {
      gutil.log('Browserify finished');
    })
    .on("error", function(err) {
      gutil.log("Error: " + err.message);
    });
    stream.pipe(source('app.js'))
    .pipe(rename('bundle.js')) // so it won't open by mistake when looking for main.js using cmd-T
    .pipe(gulp.dest('dist/js'));
  }

  bundler.on('update',rebundle);
  return rebundle();
};

/**
 * BROWSERIFY TASK
 * ************
 * Run Browserify
 */
gulp.task('browserify',function(){
  return bundleScripts(false);
});


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
  bundleScripts(true);
  gulp.watch('dev/styl/**/*.styl', ['stylus']);
  gulp.watch('dev/**/*.html', ['copy']);
})


gulp.task('build', ['stylus', 'copy', 'browserify']);
gulp.task('dev', ['build', 'server', 'watch']);
