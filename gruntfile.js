module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'build/'
                }
            }
        },
        copy: {
            build: {
                cwd: 'dev/',
                src: '**',
                dest: 'build/',
                expand: true
            },
            vendor: {
                cwd: 'dev/',
                src: 'js/vendor/**/*.js',
                dest: 'build/',
                expand: true
            }
           
        },
        clean: {
            build: {
                src: ['build']
            },
            all: {
                src: ['build/js/*','build/css/*', '!build/js/site.js', '!build/css/application.css', 'build/includes', 'build/components']
            }
        },
        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    sassDir: 'dev/css',
                    cssDir: 'dev/css',
                    environment: 'production'
                }
            },
             server: {
                options: {
                    debugInfo: true
                }
            }
        },
        useminPrepare: {
            html: 'build/**/*.html',
            options: {
                dest: 'build'
            }
        },
        usemin: {
            html: 'build/**/*.html'
        },
        // includes: {
        //   build: {
        //     cwd: 'build',
        //     src: [ '*.html' ],
        //     dest: 'build',
        //     options: {
        //       flatten: true,
        //       includePath: 'build/includes',
        //       banner: ''
        //     }
        //   }
        // },
        includereplace: {
            your_target: {
                options: {
                // Task-specific options go here.
                    includesDir: 'dev/includes',
                },
                expand: true,
                // Files to perform replacements and includes with
                src: ['**/*.html'],
                // Destination directory to copy files to
                dest: 'build/',
                cwd: 'dev'
            }
        },
        watch: {
             all: {
                options: { livereload: true },
                files: 'dev/**/*',
                tasks: ['reload']
            }
        },
        open: {
            server: {
                path: 'http://localhost:9001'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-usemin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-open');
    grunt.registerTask('reload', ['clean','compass:dist','copy','includereplace','useminPrepare','concat','uglify','usemin','clean:all','copy:vendor']);
    grunt.registerTask('default', ['clean','compass:dist','copy','includereplace','useminPrepare','concat','uglify','usemin','clean:all','copy:vendor','connect','open','watch']);

};