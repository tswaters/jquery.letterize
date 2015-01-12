/*eslint-env node*/

module.exports = function (grunt) {

  var allTasks = [
    'clean',
    'concat',
    'uglify'
  ];

  grunt.initConfig({
    'pkg': grunt.file.readJSON('bower.json'),
    'name': '<%= pkg.name.toLowerCase() %>',
    'banner': [
          '/*',
          '<%= pkg.name %> built <%= grunt.template.today("yyyy-mm-dd\'T\'HH:MM:sso")%>',
          '<%= grunt.file.read("LICENSE") %>',
          '*/'
    ].join('\n'),
    'clean': {
      'dist': ['dist']
    },
    'concat': {
      'options': {
        'banner': '<%= banner %>'
      },
      'dist': {
        'src': ['lib/<%= name %>.js'],
        'dest': 'dist/<%= name %>.js'
      }
    },
    'uglify': {
      'options': {
        'banner': '<%= banner %>',
        'sourceMap': true,
        'sourceMapName': 'dist/<%= name %>.map.js'
      },
      'dist': {
        'files': {
          'dist/<%= name %>.min.js': ['dist/<%= name %>.js']
        }
      }
    },

    'watch': {
      'scripts': {
        'files': ['README.md', 'Gruntfile.js', 'lib/*.*'],
        'tasks': allTasks
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('dev', allTasks.concat(['watch']));
  grunt.registerTask('default', allTasks);

};
