module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-closure-tools');
    grunt.loadNpmTasks('grunt-karma');
    //
    //
    //
    var mergeJsFiles = grunt.file.readJSON('ngExtendFiles.json');
    //
    //
    //
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            frameworks: ['jasmine'],
            options: {
                browsers: ['Firefox']
            },
            unit: {
                singleRun: true,
                files: [
                    {
                        src: [
                            'bower_components/angular/angular.js',
                            'bower_components/angular-mocks/angular-mocks.js'
                        ]
                    },
                    {src: mergeJsFiles},
                    {src: ['tests/unit/*.js', 'tests/unit/**/*.js']}

                ]
            }
        },
        concat: {
            options: {
                banner: '/**\n* @preserve Copyright 2015 Tim Ruecker.\n*/\n(function(window, angular, undefined){\n',
                footer: '\n})(window, angular);',
                separator: "\n"
            },
            dist: {
                src: mergeJsFiles,
                dest: '<%= pkg.name %>.js'
            }
        },
        jshint: {
            files: mergeJsFiles,
            options: {
                //reporterOutput:'logs/jshint.log.txt',
                reporter: require('jshint-stylish')
            }
        },
        closureCompiler: {
            options: {
                compilerFile: 'node_modules/closure-compiler/lib/vendor/compiler.jar',
                compilerOpts: {
                    compilation_level: 'ADVANCED_OPTIMIZATIONS',
                    externs: ['bower_components/cc-angular-externs/index.js', '<%= pkg.name %>.externs.js']
                }
            },
            main: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        }
    });

    grunt.registerTask('default', [
        'justbuild'
    ]);

    grunt.registerTask('justbuild', [
        'jshint',
        'concat',
        'closureCompiler'
    ]);

};