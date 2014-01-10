var gulp = require('gulp')
  , concat = require('gulp-concat')
  , sweet = require('gulp-sweetjs')
  , browserify = require('gulp-browserify')
  , whereMyJavascriptsIs = "public/javascripts/**/*.js"
  , whereDaMacrosAt = "macros/**/*.js"
  , whereMyStuffGoes = "public/dist"
  , finalScript = "actor.js"

gulp.task("default", function () {
  gulp.run("scripts");
  gulp.watch([whereMyJavascriptsIs], function () {
    gulp.run("scripts");
  });
});

gulp.task("once", function () {
  gulp.run("scripts");
});

gulp.task("scripts", function () {
  gulp.src([whereDaMacrosAt, whereMyJavascriptsIs])
  .pipe(concat(finalScript))
  .pipe(sweet())
  .pipe(browserify())
  .pipe(gulp.dest(whereMyStuffGoes));
});
