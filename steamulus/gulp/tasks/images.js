const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const config = require('../config');
const browserSync = require('browser-sync').create();

/**
 * Default images task.
 * Minify images files.
 */
gulp.task('images-minify', () => minifyImage('src/images/**/*.{jpg,jpeg,gif,svg,png}', './www/static/images/'));

/**
 * Watcher images task.
 * Watch for changes in images files and minify them.
 */
gulp.task('images-watch', () => {
    gulp.watch('src/images/**/*.{jpg,jpeg,gif,svg,png}', ['images-minify']);
});

/**
 * Default images minification function.
 *
 * @param {String} src
 * @param {String} dest
 */
function minifyImage(src, dest) {
    return gulp.src([src])
        .pipe(plumber(config.plumberOptions))
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
        ]))
        .pipe(gulp.dest(dest))
        .pipe(browserSync.stream());
}

/** Compile on first run (development) */
if (config.development) minifyImage('src/images/**/*.{jpg,jpeg,gif,svg,png}', './www/static/images/');