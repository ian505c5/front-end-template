module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // uglify: {
        //   options: {
        //     mangle: true
        //   },
        //   build: {
        //     src: "js/*.js",
        //     dest: "js/min/script.js"
        //   }
        // },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: ''
                }
            }
        },

        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    sassDir: 'css',
                    cssDir: 'css',
                    environment: 'production'
                }
            },
             server: {
                options: {
                    debugInfo: true
                }
            }
            // dev: {                    // Another target
            //     options: {
            //         sassDir: 'css',
            //         cssDir: 'css'
            //     }
            // }
            // 
        },


        watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass:dist'],
				options: {
					livereload: true,
				},
			},
		}

    });

    // grunt.loadNpmTasks("grunt-contrib-uglify");
    // grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['compass:dist','connect','watch']);
    // grunt.registerTask('default', ['connect','watch']);

};