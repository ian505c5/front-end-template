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
                src: ['build/js/*','build/css/*', '!build/js/main.js', '!build/css/application.css', 'build/includes']
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
        includes: {
          build: {
            cwd: 'build',
            src: [ '*.html' ],
            dest: 'build',
            options: {
              flatten: true,
              includePath: 'build/includes',
              banner: ''
            }
          }
        },
        watch: {
             all: {
                files: 'dev/**/*',
                tasks: ['reload']
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
    grunt.loadNpmTasks('grunt-includes');
    grunt.registerTask('reload', ['clean','compass:dist','copy','useminPrepare','concat','uglify','usemin','includes','clean:all','copy:vendor']);
    grunt.registerTask('default', ['clean','compass:dist','copy','useminPrepare','concat','uglify','usemin','includes','clean:all','copy:vendor','connect','watch']);

};