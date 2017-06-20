var gulp = require('gulp');
var shell = require('gulp-shell');
var babel = require('gulp-babel');
var cssnano = require('gulp-cssnano');
var postcss = require('gulp-postcss');
var rename = require("gulp-rename");
var postcssImport = require('postcss-import');
var autoprefixer = require('autoprefixer');
var customProperties = require("postcss-custom-properties");
var calc = require("postcss-calc")
var processors = [ postcssImport(), customProperties(), calc() , autoprefixer({browsers: ['> 1% in US, not op_mini all']}) ];
var gulpIgnore = require('gulp-ignore');
var del = require('del');
var runSequence = require('run-sequence');
var htmlTemplates = require('gulp-inject-stringified-html');
var pump = require('pump');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');

process.env.NODE_ENV = "production"

gulp.task( 'clean' , function( cb ){
    return del([ './resources/client/brp/assets/js/*', './resources/client/brp/assets/css/*' ],{ force:true })
});

gulp.task( 'libs' , function( cb ){
    pump([
        gulp.src( [ './src/libs/*.js' ]),
        gulp.dest( './resources/client/brp/assets/js/' )
        ],
        cb
    );
});

var server = require('gulp-server-livereload');

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      defaultFile: "index.html",
      open: true
    }));
});

gulp.task( 'core' , function (cb) {
    return gulp.src( '' , { read: false } ).pipe( shell( [ 'npm run build' ] , {} ) )
});

gulp.task( 'build' , function( cb ){
    pump([
        gulp.src( [ './src/*.js' , '!./src/core/main.js', '!./src/libs/*.js' , '!./src/core/modules/*.js' , './resources/client/brp/assets/js/main.js' ]),
        babel({ presets: [ 'es2015' ] }),
        htmlTemplates( { pre: 'embed(' , post: ')' } ),
        uglify( { mangle:true , compress:true , warnings:false } ).on('error', function(e){
          console.log( e ); }),
        gulp.dest( './resources/client/brp/assets/js/' )
        ],
        cb
    );
});

gulp.task( 'prod' , function( callback ){
    runSequence( 'clean' , 'css', 'img', 'fonts', 'libs' , 'core' , 'build' , callback );
});

gulp.task( 'css' , function(){
    return gulp.src( [ './src/style/App.css' ] )
    .pipe( postcss( processors ) )
    .pipe( cssnano() )
    .pipe( rename( "style.css" ) )
    .pipe( gulp.dest( 'resources/client/brp/assets/css/' ) );
});

gulp.task('img', function () {
    return gulp.src(['./img/**/*'], { dot: true })
      .pipe( changed( './resources/client/brp/assets/img/' ) )
      .pipe( gulp.dest( './resources/client/brp/assets/img/' ) )
});

gulp.task( 'fonts', function () {
    return gulp.src(['./fonts/**/*'], { dot: true })
      .pipe( changed( './resources/client/brp/assets/fonts/' ) )
      .pipe( gulp.dest( './resources/client/brp/assets/fonts/' ) )
});

gulp.task( 'automation', function () {
    runSequence( 'clean' , 'css', 'img', 'fonts', 'libs' , 'core' , 'build' );
});

