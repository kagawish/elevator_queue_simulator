var browserify = require('browserify');
var babelify = require('babelify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');

gulp.task('default', function() {
    var b = browserify({
        entries: './views/index.js',
        debug: true,
        transform: [babelify.configure({
            presets: [
                "babel-preset-es2015",
                "babel-preset-react"
            ].map(require.resolve)
        })]
    });

    return b.bundle()
        .pipe(source('./views/index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        // Add other gulp transformations (eg. uglify) to the pipeline here.
        .on('error', util.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./views/js/'));
});

gulp.task('watch', function () {
	
});