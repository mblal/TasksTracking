var gulp = require('gulp');
var browserify = require('browserify');
var glob = require('glob');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('browserify-main-js', function () {
    var files = glob.sync('./app/Public/*.js');
    var b = browserify({
        entries: files,
        debug: true
    });
    return b.bundle()
        .pipe(source('main.js'))
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./app/Dist/js/'));
});

gulp.task('Deploy-bootstrap-js-within-dist', function () {
    var files = [
        './node_modules/bootstrap/dist/js/*.*'
    ];

    return gulp.src(files)
        .pipe(gulp.dest('./app/Dist/js/'));
});
/*
gulp.task('Deploy-bootstrap-css-within-dist', function () {

    var files = [
        './node_modules/bootstrap/dist/css/*.*'
    ];

    return gulp.src(files)
        .pipe(gulp.dest('./app/Dist/css/'));

});

gulp.task('Deploy-bootstrap-fonts-within-dist', function () {

    var files = [
        './node_modules/bootstrap/dist/fonts/*.*'
    ];

    return gulp.src(files)
        .pipe(gulp.dest('./app/Dist/fonts/'));

});
*/
gulp.task('dev', ['browserify-main-js']);

