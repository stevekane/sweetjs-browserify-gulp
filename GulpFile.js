var gulp = require('gulp')
  , concat = require('gulp-concat')
  , sweet = require('gulp-sweetjs')
  , browserify = require('gulp-browserify')
  , whereMyJavascriptsIs = "public/javascripts/**/*.js"
  , whereDaMacrosAt = "macros/**/*.js"
  , whereMyStuffGoes = "public/dist"
  , finalScript = "actor.js"
  , targettedTask = process.argv[2]
  , calledDirectly = !module.parent;

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

/*
for use directly.  You lose gulp's reporting though
which is pretty sadface.
*/
if (calledDirectly) {
  console.log("calledDirectly");
  switch (targettedTask) {
  case "once":
    gulp.run("once");
    break;
  default:
    gulp.run("default"); 
    break;
  };
};
