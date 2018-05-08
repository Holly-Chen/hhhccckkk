var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    concatCss = require('gulp-concat-css'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    es = require('event-stream'),
    cfg = require('./config');

gulp.task('entrance', function() {
    var task = [];
    task.push(
        gulp.src('./app.html')
        .pipe(gulp.dest('../dist'))
    );
    return es.concat(task);
});
gulp.task('cfg', function() {
    var task = [];
    task.push(
        gulp.src('./config.xml')
        .pipe(gulp.dest('../dist'))
    );
    return es.concat(task);
});

gulp.task('templates', function() {
    var task = [];
    task.push(
        gulp.src(cfg.dirstrict['default'].templates)
        .pipe(
            templateCache({
                module: 'app',
                templateHeader: 'angular.module("<%= module %>", ' +
                    cfg.dirstrict['default'].deps +
                    ').run(["$templateCache", function($templateCache) {',
            }))
        .pipe(rename('templates.min.js'))
        .pipe(gulp.dest('../dist'))
    );
    return es.concat(task);
});

gulp.task('commonimgs', function() {
    var task = [];
    task.push(
        gulp.src(cfg.dirstrict['default'].commonimgs)
        .pipe(gulp.dest('../dist/imgs/common'))
    );
    return es.concat(task);
});
gulp.task('dailyimgs', function() {
    var task = [];
    task.push(
        gulp.src(cfg.dirstrict['default'].dailyimgs)
        .pipe(gulp.dest('../dist/imgs/dailypit'))
    );
    return es.concat(task);
});
gulp.task('mydrawing', function() {
    var task = [];
    task.push(
        gulp.src(cfg.dirstrict['default'].mydrawing)
        .pipe(gulp.dest('../dist/imgs/mydrawing'))
    );
    return es.concat(task);
});
gulp.task('myhistory', function() {
    var task = [];
    task.push(
        gulp.src(cfg.dirstrict['default'].myhistory)
        .pipe(gulp.dest('../dist/imgs/myhistory'))
    );
    return es.concat(task);
});
gulp.task('mycollect', function() {
    var task = [];
    task.push(
        gulp.src(cfg.dirstrict['default'].mycollect)
        .pipe(gulp.dest('../dist/imgs/mycollect'))
    );
    return es.concat(task);
});
gulp.task('myicon', function() {
    var task = [];
    task.push(
        gulp.src(cfg.dirstrict['default'].myicon)
        .pipe(gulp.dest('../dist/imgs/myicon'))
    );
    return es.concat(task);
});
gulp.task('audio', function() {
    var task = [];
    task.push(
        gulp.src(cfg.dirstrict['default'].audio)
        .pipe(gulp.dest('../dist/audio'))
    );
    return es.concat(task);
});

gulp.task('data', function() {
    var task = [];
    task.push(
        gulp.src(cfg.dirstrict['default'].data)
        .pipe(gulp.dest('../dist/data'))
    );
    return es.concat(task);
});

gulp.task('lesses', function() {
    var task = [];
    task.push(
        gulp.src(cfg.dirstrict['default'].lesses)
        .pipe(less())
        .pipe(concatCss('app.min.css'))
        .pipe(gulp.dest('../dist'))
    );
    return es.concat(task);
});

gulp.task('csses', ['lesses'], function() {
    var task = [];
    var csses = cfg.dirstrict['default'].csses;
    csses.push('../dist/app.min.css');
    task.push(
        gulp.src(csses)
        .pipe(concatCss('app.min.css', { rebaseUrls: false }))
        .pipe(gulp.dest('../dist'))
    );
    return es.concat(task);
});

gulp.task('app', function() {
    var tasks = [];
    tasks.push(
        gulp
        .src(cfg.dirstrict['default'].app)
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('../dist'))
    );
    return es.concat(tasks);
});

gulp.task('libs', function() {
    var task = [];
    task.push(
        gulp.src(cfg.dirstrict['default'].libs)
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('../dist'))
    );
    return es.concat(task);
});

gulp.task("clean", function() {
    var tasks = [];
    tasks.push(
        gulp
        .src('../dist/*')
        .pipe(clean({ force: true }))
    );
    return es.concat(tasks);
});

gulp.task('watch', function() {
    return gulp.watch(
        [
            './app.html',
            './config.xml',
            './styles/*.less',
            './tpls/*.html',
            './config.js',
            './scripts/controllers/*.js',
            './scripts/routers/*.js',
            './scripts/services/*.js',
            './scripts/directives/*.js',
            './imgs/common/**',
            './imgs/dailypit/**',
            './imgs/mycollect/**',
            './imgs/mydrawing/**',
            './imgs/myhistory/**',
            './imgs/myicon/**',
            './audio/**',
            './data/*.js'
        ], [
            'entrance',
            'cfg',
            'lesses',
            'templates',
            'libs',
            'csses',
            'app',
            'commonimgs',
            'dailyimgs',
            'mycollect',
            'mydrawing',
            'myhistory',
            'myicon',
            'audio',
            'data'
        ]
    );
});

gulp.task('default', ['clean'], function() {
    gulp.start(
        'entrance',
        'templates',
        'lesses',
        'cfg',
        'libs',
        'csses',
        'watch',
        'app',
        'commonimgs',
        'dailyimgs',
        'mycollect',
        'mydrawing',
        'myhistory',
        'myicon',
        'audio',
        'data'
    );
});