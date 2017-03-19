const gulp               = require('gulp'),
			concat             = require('gulp-concat'),
			rename             = require('gulp-rename'),
			uglify             = require('gulp-uglify'),
			rigger             = require('gulp-rigger'),
			sourcemaps         = require('gulp-sourcemaps'),
			sass               = require('gulp-sass'),
			babel              = require('gulp-babel'),
			browserSync        = require('browser-sync').create(),
			historyApiFallback = require('connect-history-api-fallback');

const devRoot = "script/dev/", prodRoot = "script/prod/";

const paths = {
	htmlfiles: [
		'htmlsrc/*.html',
		'htmlsrc/template/*.html'
	],
	jsfiles  : [
		devRoot + 'main.js'
	]
};

gulp.task('sass', () => {
	gulp.src(['style/**/*.scss'])
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'})
			.on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('style/'));
});

// ================== Main working scope ==================
gulp.task('app-js', () => {

	return gulp.src(paths.jsfiles)
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('concat.js'))
		.pipe(gulp.dest(prodRoot))
		.pipe(rename('app-uglify.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(prodRoot));

});

gulp.task('html:build', function() {
	gulp.src('htmlsrc/*.html')
		.pipe(rigger())
		.pipe(gulp.dest("./"));
});


gulp.task('watch', () => {

	browserSync.init({
		server: {
			baseDir   : "./",
			middleware: [historyApiFallback()]
		}
	});

	// Build html templates
	gulp.watch(paths.htmlfiles, ['html:build']);

	// Reload after compile html
	gulp.watch(['*.html', 'build.js', 'build.min.js'])
		.on('change', browserSync.reload);

	// Watch JS files
	gulp.watch(paths.jsfiles, ['app-js'])
		.on('change', browserSync.reload);

	// Watch CSS
	gulp.watch(['style/**/*.scss', 'style/style.css'], ['sass'])
		.on('change', browserSync.reload);

});

gulp.task('default', ['app-js'], () => {
});