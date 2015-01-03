/*
 * grunt-filter-java-properties
 * 
 *
 * Copyright (c) 2015 Sam Olsen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    filter_java_properties: {
      default_delimiters: {
        options: {
          propertiesPath: "test/fixtures/configure.properties"
        },
        files: {
          'tmp/default_delimiters': ['test/fixtures/template.txt']
        }
      },
      custom_delimiters: {
        options: {
          propertiesPath: "test/fixtures/configure.properties",
          delimiters: "(*)"
        },
        files: {
          'tmp/custom_delimiters': ['test/fixtures/template.txt']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'filter_java_properties', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
