var gulp = require('gulp');
var shell = require('gulp-shell');
var babel = require('gulp-babel');
var gulpIgnore = require('gulp-ignore');
var del = require('del');
var runSequence = require('run-sequence');
var htmlTemplates = require('gulp-inject-stringified-html');
var pump = require('pump');
var uglify = require('gulp-uglify');

process.env.NODE_ENV = "production"

gulp.task( 'clean' , function( cb ){
    return del([ './assets/js/*' ],{ force:true })
});

gulp.task( 'libs' , function( cb ){
    pump([
        gulp.src( [ './src/libs/*.js' ]),
        gulp.dest( './assets/js/' )
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
        gulp.src( [ './src/*.js' , '!./src/core/main.js', '!./src/libs/*.js' , '!./src/core/modules/*.js' , './assets/js/main.js' ]),
        babel({ presets: [ 'es2015' ] }),
        htmlTemplates( { pre: 'embed(' , post: ')' } ),
        uglify( { mangle:true , compress:true , warnings:false } ),
        gulp.dest( './assets/js/' )
        ],
        cb
    );
});

    
gulp.task( 'prod' , function( callback ){
    runSequence( 'clean' , 'libs' , 'core' , 'build' , callback );
});
