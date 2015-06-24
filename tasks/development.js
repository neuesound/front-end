"use strict";

var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");

gulp.task("html", function() {
  return gulp.src("assets/views/*.html")
    .pipe(plumber())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist/views"));
});

gulp.task("sass", function() {
  return gulp.src("assets/stylesheet/**/*.scss")
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/stylesheet"));
});

gulp.task("default", ["html", "sass"], function() {
  gulp.watch("assets/views/*.html", ["html"]);
  gulp.watch("assets/stylesheet/**/*.scss", ["sass"]);
});