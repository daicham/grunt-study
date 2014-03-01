module.exports = function(grunt) {

  // config
  grunt.initConfig({
      less: {
        options: {
          compress: true
        },
        build: {
          /*
          src: 'src/style1.less',
          dest: 'build/style1.css'
          */
          files: {
            'build/style.css': 'src/**/*.less'
          }
        }
      }
  });

  // plugin
  grunt.loadNpmTasks('grunt-contrib-less');

  // tasks
  grunt.registerTask('default', 'less');

};
