var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

//gulp.task('sass', function(){return gulp.src(['src/app/scss/**/*.scss', 'src/app/sass/**/*.sass'])

//.pipe(sass())
//.pipe(concat('libr.css'))
//.pipe(gulp.dest('./src/assets/style'))
//});

//gulp.task('js', function(){
	//return gulp.src([
	//	'./src/app/js/services/**/*.js',
	//	'/src/app/js/components/**/*.js',
	//	'/src/app/js/app.js'])
	//.pipe(uglify())
	//.pipe(concat('app.js'))
	//.pipe(gulp.dest('./src/assets/js'))
//});

gulp.watch('./src/app/**', function(event) {
	gulp.run('js');
	gulp.run('saas');
});