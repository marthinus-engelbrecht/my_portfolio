var _ = require('lodash');

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: process.env.PORT || 9000,
                    hostname: '0.0.0.0',
                    base: ['app', 'images']
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['**/*.js'],
                tasks: ['jshint']
            }
        },

        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'app/**/*.js',
                '!app/bower_components/**/*.js'
            ]
        },

        clean: ['.tmp', 'www'],

        bower_concat: {
            all: {
                exclude: ['angular-mocks'],
                dest: '.tmp/_bower.min.js',
                callback: function(mainFiles, component) {
                    return _.map(mainFiles, function(filepath) {
                        // Use minified files if available
                        var min = filepath.replace(/\.js$/, '.min.js');
                        return grunt.file.exists(min) ? min : filepath;
                    });
                }
            }
        },

        concat: {
            distri: {
                src: ['.tmp/_bower.min.js','app/**/*.js', '!app/bower_components/**/*.js'],
                dest: '.tmp/blaze.concat.js'
            }
        },

        compass: {
            dev: {
                options: {
                    sassDir: 'app',
                    cssDir: 'app'
                }
            }
        },

        uglify: {
            distri: {
                files: {
                    '.tmp/blaze.min.js': ['.tmp/blaze.annotated.js']
                }
            }
        },

        usemin: {
            html: '.tmp/index.html'
        },

        ngAnnotate: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp/',
                        src: '*.js',
                        ext: '.annotated.js',
                        dest: '.tmp/'
                    }
                ]
            }
        },

        karma: {
            unit: {
                configFile: 'test/config/karma.conf.js',
                singleRun: true
            }
        },

        includeSource: {
            client: {
                files: {
                    'app/index.html': 'app/index.html'
                }
            }
        },

        wiredep: {
            options: {
                directory: 'app/bower_components/'
            },
            app: {
                src: ['app/index.html']
            },
            test: {
                src: ['test/config/karma.conf.js'],
                ignorePath: /..\//,
                exclude: ['/foundation', '/angular-scenario'],
                devDependencies: true
            }
        }
    });

    grunt.registerTask('develop', function () {
        grunt.task.run([
            'wiredep:app',
            'includeSource',
            'connect:server',
            'watch'
        ]);
    });

    grunt.registerTask('test', function (target) {
        if (target === 'unit') {
            grunt.task.run([
                'wiredep:test',
                'karma:unit'
            ]);
        }
    });
};