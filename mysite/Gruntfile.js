module.exports = function(grunt) {

  // config
  grunt.initConfig({
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
      }
  });

  // plugin
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // tasks
  grunt.registerTask('default', ['less', 'csslint']);

};
