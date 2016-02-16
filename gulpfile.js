var gulp = require('gulp');
var concat = require('gulp-concat');
var angularTemplateCache = require('gulp-angular-templatecache');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var serve = require('gulp-webserver');
var addStream = require('add-stream');
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
    
    //Copy Libraries
    gulp.src('node_modules/**/*')
    .pipe(gulp.dest('Debug/lib'));
    
    //Compile Template Cache
    var templates =
    gulp.src('src/ts/**/*.html')
    .pipe(angularTemplateCache('templates.js', {
        module: "WAppBase"
    }));
    
    //Compile TypeScript files
    gulp.src('src/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'scripts.js'
    }))
    .pipe(concat('scripts.js'))
    .pipe(addStream.obj(templates))
    .pipe(concat('scripts.js'))
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