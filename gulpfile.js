var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var idfy = require('gulp-amd-idfy');

var jsFiles = ['js/json/data.js', 'js/*.js'],
    jsDest = './dist/';


gulp.task('script', function () {
    return watch(jsFiles, function () {
        gulp.src(jsFiles).pipe(babel({
            presets: ['es2015', 'stage-2']
        })).pipe(concat('bundle.js')).pipe(uglify()).pipe(gulp.dest(jsDest));
        /*  gulp.src(['js/global.js']).pipe(babel({
             presets: ['es2015', 'stage-2']
         })).pipe(concat('global.js')).pipe(uglify()).pipe(gulp.dest(jsDest)); */
    });
});

gulp.task('browserify', function () {
    return watch(jsDest + 'bundle.js', function () {
        browserify(jsDest + 'bundle.js').bundle().pipe(source('data.js')).pipe(gulp.dest(jsDest))
    })
});

gulp.task('uglify', function () {
    gulp.src(["dist/bundle.js"]).pipe(uglify()).pipe(gulp.dest("./dist/minified"));
})




gulp.task('default', ['script']);