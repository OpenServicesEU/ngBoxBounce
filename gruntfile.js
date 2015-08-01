module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: ['ng-boxbounce.js','gruntfile.js']
    },
    csslint: {
      strict: {
        src: ['ng-boxbounce.css']
      },
    },
    uglify: {
      js: {
        files: {
          'ng-boxbounce.min.js': 'ng-boxbounce.js'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'ng-boxbounce.min.css': 'ng-boxbounce.css'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['jshint', 'csslint', 'uglify', 'cssmin']);
  grunt.registerTask('travis', ['jshint', 'csslint' ]);
};
