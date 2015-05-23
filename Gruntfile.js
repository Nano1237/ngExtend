module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-closure-compiler');
    grunt.loadNpmTasks('grunt-karma');
    //
    //
    //
    var mergeJsFiles = [
        'src/xt/filter/*.js',
        'src/xt/directive/*.js',


        'src/xt/index.js'//always the last file
    ];
    //
    //
    //
    grunt.initConfig({
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
                banner: '(function(angular){\n',
                footer: '\n})(angular);',
                separator: "\n"
            },
            dist: {
                src: mergeJsFiles,
                dest: 'build/ngExtend.js'
            }
        },
        jshint: {
            files: mergeJsFiles,
            options: {
                //reporterOutput:'logs/jshint.log.txt',
                reporter: require('jshint-stylish')
            }
        },
        'closure-compiler': {
            frontend: {
                closurePath: 'closure-compiler',
                js: 'build/ngExtend.js',
                jsOutputFile: 'build/ngExtend.min.js',
                maxBuffer: 500,
                options: {
                    define: [
                        '"--externs=angular-1.3.externs.js"',
                        '"--externs=ngExtend.externs.js"'
                    ],
                    //externs:'https://raw.githubusercontent.com/google/closure-compiler/master/contrib/externs/angular-1.3.externs.js',

                    compilation_level: 'ADVANCED_OPTIMIZATIONS',
                    language_in: 'ECMASCRIPT5_STRICT'
                }
            }
        }
    });

    grunt.registerTask('default', [
        'justbuild',
        'karma'
    ]);

    grunt.registerTask('justbuild', [
        'jshint',
        'concat',
        'closure-compiler'
    ]);

};