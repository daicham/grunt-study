module.exports = function(grunt) {

  // config
  grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      less: {
        build: {
          /*
          src: 'src/style1.less',
          dest: 'build/style1.css'
          */
          files: {
            'build/style.css': 'src/**/*.less'
          }
        }
      },

      csslint: {
        check: {
          src: 'build/*.css'
        }
      },

      cssmin: {
        minimize: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
          },
          files: {
            'build/style.min.css': 'build/style.css'
          }
        }
      }
  });

  // plugin
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // tasks
  grunt.registerTask('default', ['less', 'csslint', 'cssmin']);

};
