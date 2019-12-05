let gulp=require('gulp');
let rename = require('gulp-rename');
// let concat = require('gulp-concat');
let imagemin = require('gulp-imagemin');
let uglify = require('gulp-uglify');
let cssnano = require('gulp-cssnano');
let sass = require('gulp-sass');
let babel =require('gulp-babel');

gulp.task('sass',()=>{
    gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(cssnano())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('img',()=>{
    gulp.src('./src/img/index/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/index'))
  
   })
gulp.task('img-i',()=>{
    gulp.src('./src/img/icon/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/icon'))

}) 
gulp.task('img-reg',()=>{
    gulp.src('./src/img/register/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/register'))

}) 
gulp.task('js',()=>{
    gulp.src('./src/js/ES5/*.js')
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js/ES5'));
})
gulp.task('ES6',()=>{
    gulp.src('./src/js/ES6/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    })).pipe(gulp.dest('./src/js/ES5'));
})
gulp.task('default',()=>{
    gulp.watch('./src/sass/*.scss',['sass']);
    gulp.watch('./src/js/ES6/*.js',['ES6']);
    gulp.watch('./src/js/ES5/*.js',['js']);
})