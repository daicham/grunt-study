module.exports = function(grunt) {

  // config
  grunt.initConfig({
      less: {
        build: {
          src: 'src/style1.less',
          dest: 'build/style1.css'
        }
      }
  });

  // plugin
  grunt.loadNpmTasks('grunt-contrib-less');

  // tasks
  grunt.registerTask('default', 'less');

};
