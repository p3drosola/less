module.exports = function(grunt) {

  // TODO clean dist dir

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: 'src/stylesheets',
          cssDir: 'dist/stylesheets',
          environment: 'production',
          imageDir: 'src/images'
        }
      },
      dev: {
        options: {
          sassDir: 'src/stylesheets',
          cssDir: 'dist/stylesheets',
          imageDir: 'images'
        }
      }
    },
    regarde: {
      html: {
        files: 'src/*.html',
        tasks: ['copy:html', 'livereload']
      },
      images: {
        files: 'src/images/**/*',
        tasks: ['copy:images', 'livereload']
      },
      css: {
        files: 'src/stylesheets/**/*.{sass,scss,css}',
        tasks: ['compass:dev', 'livereload']
      },
      js: {
        files: 'src/javascripts/**/*.js',
        tasks: ['copy:js', 'livereload']
      },
      handlebars: {
        files: 'src/templates/**/*.hbs',
        tasks: ['handlebars']
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'dist'
        }
      }
    },
    copy: {
      html: {
        files: [
          {expand: true, cwd: 'src/', src: ['*'], dest: 'dist/', filter: 'isFile'}
        ]
      },
      images: {
        files: [
          {expand: true, cwd: 'src/images', src: '*', dest: 'dist/images'}
        ]
      },
      js: {
        files: [
          {expand: true, cwd: 'src/javascripts', src: '**', dest: 'dist/javascripts'}
        ]
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: "Less.Templates",
          processName: function (filename) {
            filename = filename.replace(/^src\/templates\//, '').replace(/\.hbs$/, '');
            return filename.replace('/', '.');
          }
        },
        files: {
          "dist/javascripts/templates.js": "src/templates/**/*.hbs",
        }
      }
    }

    // concat: {
    //   application: {
    //     src: [
    //     'src/javascripts/vendor/jquery.*.js',
    //     'src/javascripts/vendor/underscore.*.js',
    //     'src/javascripts/application.js'
    //     ],
    //     dest: 'dist/javascripts/application.js'
    //   }
    // },


  });

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['livereload-start', 'compass', 'copy', 'handlebars', 'connect', 'regarde',]);
};
