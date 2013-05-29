module.exports = function(grunt) {

  // TODO clean dist dir

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: 'src/stylesheets',
          cssDir: 'dist/stylesheets',
          environment: 'production'
        }
      },
      dev: {
        options: {
          sassDir: 'src/stylesheets',
          cssDir: 'dist/stylesheets',
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
          {expand: true, cwd: 'src/', src: ['*.html'], dest: 'dist/'},
        ]
      },
      images: {
        files: [
          {expand: true, cwd: 'src/images', src: '*', dest: 'dist/images'}
        ]
      }
    }
  });

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['livereload-start',  'copy:html', 'copy:images', 'connect', 'regarde',]);
};
