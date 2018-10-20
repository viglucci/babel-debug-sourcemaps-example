const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const run = require('run-sequence');
const path = require('path');

const srcRoot = path.join(__dirname, 'src');
const src = path.join(srcRoot, '**/*.js');
const dist = path.join(__dirname, 'dist');

gulp.task('build', (done) => {
  run('clean', 'transpile', done);
});

gulp.task('clean', () => {
  return del(['dist']);
});

gulp.task('transpile', () => {
  return gulp.src(src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: srcRoot
    }))
    .pipe(gulp.dest(dist));
});
