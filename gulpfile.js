var gulp = require('gulp'),

    minifycss = require('gulp-minify-css'),

    concat = require('gulp-concat'),

    uglify = require('gulp-uglify'),

    rename = require('gulp-rename'),

    del = require('del');

    // 压缩css
    gulp.task('minifycss', function() {

    return gulp.src('src/*.css')      //压缩的文件

        .pipe(gulp.dest('minified/css'))   //输出文件夹

        .pipe(minifycss());   //执行压缩

	});

	// 压缩JS
	gulp.task('minifyjs', function() {

    return gulp.src('src/*.js')

        .pipe(concat('main.js'))    //合并所有js到main.js

        .pipe(gulp.dest('minified/js'))    //输出main.js到文件夹

        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名

        .pipe(uglify())    //压缩

        .pipe(gulp.dest('minified/js'));  //输出

	});

	// 执行压缩前，先删除文件夹里的内容
	gulp.task('minifyjs', function() {

    return gulp.src('src/*.js')

        .pipe(concat('main.js'))    //合并所有js到main.js

        .pipe(gulp.dest('minified/js'))    //输出main.js到文件夹

        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名

        .pipe(uglify())    //压缩

        .pipe(gulp.dest('minified/js'));  //输出

	});

	