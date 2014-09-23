var browserSync, coffeeify, filter, gulp, gutil, imagemin, jade, minifyHTML, pngcrush, prefix, reload, sourcemaps, stylus, reactify, browserify, source;

gulp = require('gulp');
stylus = require('gulp-stylus');
prefix = require('gulp-autoprefixer');
jade = require('gulp-jade');
minifyHTML = require('gulp-minify-html');
imagemin = require('gulp-imagemin');
pngcrush = require('imagemin-pngcrush');
sourcemaps = require('gulp-sourcemaps');
browserSync = require('browser-sync');
reload = browserSync.reload;
filter = require('gulp-filter');
gutil = require('gulp-util');
reactify = require('reactify');
browserify = require('gulp-browserify');
source = require('vinyl-source-stream');

gulp.task('css', function() {
  return gulp.src('src/css/*.styl').pipe(stylus({
    compress: true,
    sourcemap: {
      inline: true,
      sourceRoot: '.',
      basePath: 'public/css'
    }
  })).pipe(sourcemaps.init({
    loadMaps: true
  })).pipe(prefix("> 1%")).pipe(sourcemaps.write('./', {})).pipe(gulp.dest('public/css')).pipe(filter('**/*.css')).pipe(reload({
    stream: true
  }));
});

gulp.task('js', function() {
  gulp.src('src/js/main.js')
    .pipe(browserify({
      transform: ['reactify'],
      debug: true
    }))
    .pipe(gulp.dest('./public/js'))
});

gulp.task('html', function() {
  return gulp.src('src/*.jade').pipe(jade()).pipe(minifyHTML()).pipe(gulp.dest('public')).pipe(reload({
    stream: true
  }));
});

gulp.task('img', function() {
  return gulp.src('src/img/*').pipe(imagemin({
    progressive: true,
    svgoPlugins: [
      {
        removeViewBox: false
      }, {
        cleanupIDs: false
      }
    ],
    use: [pngcrush()]
  })).pipe(gulp.dest('./public/img')).pipe(reload({
    stream: true
  }));
});

gulp.task('copy', function() {
  return gulp.src('src/fonts/**').pipe(gulp.dest('public/fonts'));
});

gulp.task('browser-sync', function() {
  return browserSync({
    server: {
      baseDir: "./public"
    },
    open: false
  });
});

gulp.task('default', ['css', 'html', 'img', 'js', 'copy', 'browser-sync'], function() {
  gulp.watch('src/css/*.styl', ['css']);
  gulp.watch('src/*.jade', ['html']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/js/*.js', ['js']);
  return gulp.watch('src/img/*', ['img']);
});
