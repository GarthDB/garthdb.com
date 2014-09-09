# Load all required libraries.
gulp = require 'gulp'
stylus = require 'gulp-stylus'
prefix = require 'gulp-autoprefixer'
cssmin = require 'gulp-cssmin'
jade = require 'gulp-jade'
minifyHTML = require 'gulp-minify-html'
imagemin = require 'gulp-imagemin'
pngcrush = require 'imagemin-pngcrush'
sourcemaps = require 'gulp-sourcemaps'
browserSync = require 'browser-sync'
reload = browserSync.reload
filter = require('gulp-filter');

# Create your CSS from Sass, Autoprexif it to target 99%
#  of web browsers, minifies it.
gulp.task 'css', ->
  gulp.src 'src/css/*.styl'
    .pipe stylus {
      sourcemap: {
        inline: true,
        sourceRoot: '.',
        basePath: 'public/css'
      }
    }
    .pipe sourcemaps.init {
      loadMaps: true
    }
    .pipe prefix "> 1%"
    .pipe cssmin keepSpecialComments: 0
    .pipe sourcemaps.write './', {
    }
    .pipe gulp.dest 'public/css'
    .pipe filter '**/*.css'
    .pipe reload {stream:true}

# Create you HTML from Jade, Adds an additional step of
#  minification for filters (like markdown) that are not
#  minified by Jade.
gulp.task 'html', ->
  gulp.src 'src/*.jade'
    .pipe jade()
    .pipe minifyHTML()
    .pipe gulp.dest 'public'
    .pipe reload {stream:true}

# Minify your SVG.
gulp.task 'img', ->
  gulp.src 'src/img/*'
    .pipe imagemin {
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
      }
    .pipe gulp.dest 'public/img'

# Copy the fonts using streams.
gulp.task 'copy', ->
  gulp.src 'src/fonts/*'
    .pipe gulp.dest 'public/fonts'

#host and reload browser on change
gulp.task 'browser-sync', ->
  browserSync {
    server: {
      baseDir: "./public"
    }
  }


# Default task call every tasks created so far.
gulp.task 'default', ['css', 'html', 'img', 'copy', 'browser-sync'], ->
  gulp.watch 'src/css/*.styl', ['css']
  gulp.watch 'src/*.jade', ['html']
