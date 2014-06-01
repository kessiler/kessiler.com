module.exports = function (grunt) {
    'use strict';
    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            dist: {
                src: ['assets/css/style.css'],
                dest: 'assets/dist/css/all.min.css'
            }
        },
        uglify: {
            options: {
            mangle: false,
            compress: false,
            report : 'min'
        },
        dist: {
            files: { 
                    'assets/dist/js/main.min.js': ['assets/components/angular/angular.js', 'assets/js/*.js']
                }   
            }
        },
        imageoptim: {
            dist: {
                options: {
                    jpegMini: false,
                    imageAlpha: true,
                    quitAfter: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/img',
                    src: '**/*.{png}',
                    dest: 'assets/img'
                }]
            }
        }
    };
    grunt.initConfig(gruntConfig);

    var keys = Object.keys(gruntConfig);
    var tasks = [];

    for (var i = 1, l = keys.length; i < l; i++) {
        tasks.push(keys[i]);
    }

    grunt.loadNpmTasks('grunt-yui-compressor');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-imageoptim');
    grunt.registerTask('default', tasks);
};