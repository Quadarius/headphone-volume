var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
    return gulp.src('./resources/public/**/*')
        .pipe(deploy({ force: true }))
});