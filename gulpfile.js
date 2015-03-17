(function () {
  "use strict";

  var gulp = require("gulp"),
      karma = require("karma").server,
      rename = require("gulp-rename"),
      uglify = require("gulp-uglify"),
      srcFiles = ["./src/*", "./vendor/*"];

  gulp.task("test", function (done) {
    karma.start({
      configFile: __dirname + "/karma.conf.js",
      singleRun: true,
    }, done);
  });

  gulp.task("build", function () {
    // Create minified versions of the files
    gulp.src(srcFiles)
      .pipe(uglify({
        preserveComments: "some", // preset comments that start with a ! or closure compiler directive
      }))
      .pipe(rename(function (path) {
        if (path.extname == ".js") {
          path.basename += ".min";
        }
      }))
      .pipe(gulp.dest("dist"))

    // Copy over the expanded files
    gulp.src(srcFiles).pipe(gulp.dest("dist"));
  });
}());
