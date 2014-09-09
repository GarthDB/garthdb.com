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

# Create your CSS from Sass, Autoprexif it to target 99%
#  of web browsers, minifies it.
gulp.task 'css', ->
  gulp.src 'src/css/*.styl'
    .pipe stylus {
      sourcemap: {
        inline: true,
        sourceRoot: '.',
        basePath: 'css/build'
      }
    }
    .pipe sourcemaps.init {
      loadMaps: true
    }
    .pipe sourcemaps.write '.', {
      includeConent: false,
      sourceRoot: '.'
    }
    .pipe prefix "> 1%", { map: true }
    # .pipe cssmin keepSpecialComments: 0
    .pipe gulp.dest 'public/css'

# Create you HTML from Jade, Adds an additional step of
#  minification for filters (like markdown) that are not
#  minified by Jade.
gulp.task 'html', ->
  gulp.src 'src/*.jade'
    .pipe jade()
    .pipe minifyHTML()
    .pipe gulp.dest 'public'

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



# Default task call every tasks created so far.
gulp.task 'default', ['css', 'html', 'img', 'copy']
