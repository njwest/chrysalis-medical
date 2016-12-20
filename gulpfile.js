/*jslint node: true */
'use strict';

// ////////////////////////////////////////////////
// Required
// // /////////////////////////////////////////////

var gulp = require('gulp'),
		sass = require('gulp-sass'),
		uglify = require('gulp-uglify'),
		rename = require('gulp-rename'),
		autoprefixer = require('gulp-autoprefixer'),
		plumber = require('gulp-plumber');
		// browserSync = require('browser-sync'),
		// reload = browserSync.reload,
		// compass = require('gulp-compass'),
		// sourcemaps = require('gulp-sourcemaps'),
		// concat = require('gulp-concat'),
		// del = require('del');

var jsSource = [
	// 'app/js/*.js',
	'app/js/**/*.js',
	'!app/js/**/*.min.js',
	'!app/js/libs'
];

// ////////////////////////////////////////////////
// Sass Tasks
// ///////////////////////////////////////////////
gulp.task('sass', function() {
	gulp.src('app/scss/styles.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('app/css'));
});

// ////////////////////////////////////////////////
// Script Tasks
// ///////////////////////////////////////////////
gulp.task('scripts', function() {
  gulp.src(jsSource)
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('app/js/min'));
});

// ////////////////////////////////////////////////
// Watch Tasks
// ///////////////////////////////////////////////
gulp.task('watch', function() {
	gulp.watch('app/js/*.js', ['scripts']);
	gulp.watch('app/js/configs/*.js', ['scripts']);
	gulp.watch('app/js/controllers/*.js', ['scripts']);
	gulp.watch('app/js/directives/*.js', ['scripts']);
	gulp.watch('app/scss/**/*.scss', ['sass']);
	console.log('watching js');
	console.log('watching controllers');
	console.log('watching directives');
	console.log('watching sass');
});

// ////////////////////////////////////////////////
// Default Tasks
// ///////////////////////////////////////////////
gulp.task('default', ['scripts', 'sass', 'watch']);
