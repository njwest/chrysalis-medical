var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// Preprocess sass into css
gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

// Minify JS
// *** Still needs work ***
// gulp.task('minifyjs', function() {
//   gulp.src('js/*.js')
//     .pipe(concat('main.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./js/'));
// });
