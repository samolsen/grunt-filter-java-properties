/*
 * grunt-filter-java-properties
 * 
 *
 * Copyright (c) 2015 Sam Olsen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  var path = require('path');
  var PropertyFilter = require('filter-java-properties').PropertyFilter;

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('filter_java_properties', 'Grunt wrapper for the filter-java-properties Node pacakge', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      propertiesPath: undefined,
      delimiters: undefined
    });

    if (!options.propertiesPath) {
      return grunt.fail.warn("The propertiesPath option must be defined");
    }

    if (!grunt.file.exists(options.propertiesPath)) {
      return grunt.fail.warn("The .properties file does not exist");
    }

    var propertiesString = grunt.file.read(options.propertiesPath);
    var filter = PropertyFilter.withString({string: propertiesString, delimiters: options.delimiters});

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).each(function (filepath) {
        // Read file source.
        var filtered = filter.filterString(grunt.file.read(filepath));
        var outPath = path.resolve(file.dest, path.basename(filepath));

        grunt.file.write(outPath, filtered);
      });

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
