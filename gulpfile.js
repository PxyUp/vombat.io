/**
 * Created by PyxRu on 4/1/2017.
 */
let gulp = require('gulp');
let less = require('gulp-less');
let path = require('path');

let express = require('express');
let app = express();

gulp.task('less', function () {
    return gulp.src('public_html/less/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('public_html/css'));
});

gulp.watch('public_html/less/**/*.less', ['less']);

app.listen(8888, function () {
    console.log('Example app listening on port 3000!');
});

app.use('/',  express.static('public_html'));