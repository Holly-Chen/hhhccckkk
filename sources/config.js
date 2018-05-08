module.exports = {

    dirstrict: {
        default: {
            templates: [
                './tpls/*.html'
            ],

            lesses: [
                './styles/base.less',
                './styles/app.less'
            ],

            csses: [
                '../libs/bootstrap/bootstrap.min.css',
                '../libs/webuploader/0.1.6/webuploader.min.css',
                '../libs/ngDialog/0.2.9/ngDialog.min.css',
                '../libs/ngDialog/0.2.9/ngDialog-theme-default.min.css',
            ],

            libs: [
                '../libs/angular/1.2.5/angular.min.js',
                '../libs/jquery/1.11.1/*.js',
                '../libs/touch/touchslider.js',
                '../libs/webuploader/0.1.6/webuploader.js',
                '../libs/angular/1.2.5/angular-ui-router.min.js',
                '../libs/angular/1.2.5/angular-sanitize.min.js',
                '../libs/angular/1.2.5/angular-websql.min.js',
                '../libs/ngDialog/0.2.9/ngDialog.min.js',
                '../libs/angular/1.2.5/ocLazyLoad.min.js',
                '../libs/flexible/flexible.debug.js',
                '../libs/flexible/flexible_css.debug.js',
                '../libs/snapfit/snapfit.js',
            ],

            app: [
                './scripts/routers/Router.js',
                './scripts/controllers/*.js',
                './scripts/directives/*.js',
                './scripts/services/*.js'
            ],

            commonimgs: './imgs/common/**',
            dailyimgs: './imgs/dailypit/**',
            mycollect: './imgs/mycollect/**',
            mydrawing: './imgs/mydrawing/**',
            myhistory: './imgs/myhistory/**',
            myicon: './imgs/myicon/**',
            audio: './audio/**',
            data: ['./data/*.xml'],

            deps: '["ui.router", "oc.lazyLoad", "ngDialog","angular-websql"]'
        }
    }
};