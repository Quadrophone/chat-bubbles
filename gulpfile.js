var gulp = require('gulp'),
plumber = require('gulp-plumber'),
sass = require('gulp-sass'),
minifycss = require('gulp-minify-css'),
autoprefixer = require('gulp-autoprefixer'),
uglify = require('gulp-uglify'),
clean = require('gulp-clean'),
cache = require('gulp-cache'),
rename = require('gulp-rename');

var onError = function (err) {  
  console.log(err);
};

gulp.task('sass', function () {
  gulp.src('scss/style.scss')
  .pipe(sass())
  .pipe(rename('jquery.chatbubble.css'))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css'))
  .pipe(minifycss())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('css'));
});

gulp.task('scripts', function() {
  return gulp.src('js/jquery.chatbubble.js')
  .pipe(plumber({errorHandler: onError}))
  .pipe(gulp.dest('js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('js'));
});

gulp.task('watch', function(){
  gulp.watch('scss/style.scss', ['sass']);
  gulp.watch('js/jquery.chatbubble.js', ['scripts']);
});