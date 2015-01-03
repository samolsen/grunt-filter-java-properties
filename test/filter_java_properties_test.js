'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.filter_java_properties = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  default_delimiters: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_delimiters/template.txt');
    var expected = grunt.file.read('test/expected/default-delimiters.txt');
    test.equal(actual, expected, 'should filter with the default delimiters');

    test.done();
  },
  custom_delimiters: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_delimiters/template.txt');
    var expected = grunt.file.read('test/expected/custom-delimiters.txt');
    test.equal(actual, expected, 'should accept custom delimiters in the options');

    test.done();
  }
};
