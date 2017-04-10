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
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('public_html/css'));
});

gulp.watch('public_html/less/**/*.less', ['less']);

app.listen(8888, function () {
    console.log('Example app listening on port 3000!');
});

gulp.task("default", ["less"]);



app.post("/api/cards/list", (req, res) => {
    res.json([
        {
            id: 1,
            title: "Тестовая",
            discription: "Описание",
            url: "https://pp.userapi.com/c639528/v639528417/15513/vDUGu7jz0KM.jpg"
        },
        {
            id: 2,
            title: "Тестовая2",
            discription: "Описание2",
            url: "https://pp.userapi.com/c836126/v836126215/3006b/n8Kv6TekSFo.jpg"
        },
    ])
});

app.use('/', express.static('public_html'));