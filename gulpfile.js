var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var wiredep = require('wiredep').stream;
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var mainBowerFiles = require('gulp-main-bower-files');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var scsslint = require('gulp-scss-lint');
const jshint = require('gulp-jshint');

function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}

gulp.task('scss-lint', function() {
  return gulp.src('/scss/*.scss')
    .pipe(scsslint());
});
 
gulp.task('js-lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: './dist/'
		}
	});
});

gulp.task('compass', function () {
	return gulp.src('./src/css/*.scss')
		.pipe(plumber({
			errorHandler: function (err) {
				this.emit('end');
			}
		}))
		.on('error', swallowError)
		.pipe(compass({
			config_file: './config.rb',
			css: './src/css',
			sass: 'src/css' // removed the dot-slash from here
		}))
});

gulp.task('bower', function () {
	gulp.src('./dist/*.html')
		.pipe(wiredep())
		.pipe(gulp.dest('./dist/'));
});

/*built*/
gulp.task('wiredep', ['concatBowerJS', 'concatBowerCSS'], function () {
	var target = gulp.src('./dist/*.html');
	var sources = gulp.src(['./js/vendor.min.js', './css/vendor.min.css'], {
		read: false
	});

	return target.pipe(inject(sources))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('concatBowerJS', function () {
	return gulp.src('./bower.json')
		.pipe(mainBowerFiles(['**/*.js']))
		.pipe(concat('vendor.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('concatBowerCSS', function () {
	return gulp.src('./bower.json')
		.pipe(mainBowerFiles(['**/*.css']))
		.pipe(concat('vendor.css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(cssmin())
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('minify-css', function () {
	gulp.src('src/css/main.css')
		.pipe(cssmin())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist/css/'))		
		.pipe(browserSync.reload({
			stream: true
		}));;
});

gulp.task('minify-js', function () {
	return gulp.src('src/js/main.js')
		.pipe(uglify())
		.on('error', swallowError)
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', ['browserSync', 'compass', 'wiredep', 'minify-css', 'minify-js', 'js-lint', 'scss-lint'], function () {
	gulp.watch('src/css/**/*.scss', ['compass']);
	gulp.watch('src/css/main.css', ['minify-css']);
  	gulp.watch('src/js/main.js', ['minify-js']);
	gulp.watch("dist/*.html").on('change', browserSync.reload);
	gulp.watch("dist/js/*.js").on('change', browserSync.reload);
});

gulp.task('final', ['compass', 'minify-css', 'minify-js', 'wiredep']);