var gulp = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var rename = require('gulp-rename');
var serve = require('gulp-serve');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var serve = require('gulp-webserver');
var path = require('path');
   
var buildTask = function() {
    
    //Copy index file
    gulp.src('src/index.html')
    .pipe(gulp.dest('Debug'));
    
    //Compile LESS files
    gulp.src('src/**/*.less')
    .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('Debug'));
    
    //Compile TypeScript files
    gulp.src('src/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'scripts.js'
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(gulp.dest('Debug'));
}   
   
var serveTask = function() {
    gulp.src('Debug')
    .pipe(serve({
        livereload: true,
        open: true
    }));
}   
    
gulp.task('default', buildTask);
gulp.task('build', buildTask);
gulp.task('serve', serveTask);