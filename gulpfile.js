const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyle() {
    return gulp.src('./src/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/assets/css'));
}

exports.buildStyle = buildStyle;

exports.watch = function () {
    gulp.watch('./src/assets/scss/**/*.scss', gulp.series(buildStyle));
}