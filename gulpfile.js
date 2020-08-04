const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function() {
  return gulp.src("./index.ts")
    .pipe(tsProject())
    .pipe(gulp.dest("dist"))
})