'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('dist', function () {
    gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/materialize-css/bin/materialize.js'
    ])
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));

    gulp.src('src/js/*.js')
        .pipe(concat('micromoira.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));

    gulp.src([
        'node_modules/materialize-css/bin/materialize.css',
        'src/css/*.css'
    ])
        .pipe(gulp.dest('dist/css'));

    gulp.src('node_modules/materialize-css/font/**/**')
        .pipe(gulp.dest('dist/font'));

    gulp.src('src/index.prod.html')
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));

    gulp.src('src/partials/*.html')
        .pipe(gulp.dest('dist/partials'));
});

gulp.task('default', [
    'dist'
]);
