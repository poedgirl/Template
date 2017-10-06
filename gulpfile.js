var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
 
gulp.task('default', function () {
  return gulp.src('src/html/**/*.html')
    .pipe(nunjucksRender({
      path: ['src/html/']
    }))
    .pipe(gulp.dest('dist'));
});