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
            }
           
        },
        clean: {
            build: {
                src: ['build']
            },
            scripts: {
                src: ['build/js/*', '!build/js/site.js']
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
            html: 'build/index.html',
            options: {
                dest: 'build'
            }
        },
        usemin: {
            html: 'build/index.html'
        },
        watch: {
			all: {
                files: 'dev/*',
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
    grunt.registerTask('reload', ['clean','copy','useminPrepare','concat','uglify','compass:dist','usemin','clean:scripts']);
    grunt.registerTask('default', ['clean','copy','useminPrepare','concat','uglify','compass:dist','usemin','clean:scripts','connect','watch']);

};