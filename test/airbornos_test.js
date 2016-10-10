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

exports.airbornos = {
  test: function(test) {
    test.expect(2);

    var actual, expected;
    
    actual = grunt.file.read('tmp/simple.js');
    expected = grunt.file.read('test/expected/simple.js');
    test.equal(actual, expected, 'location should be replaced with airborn_location');

    actual = grunt.file.read('tmp/strut.js');
    expected = grunt.file.read('test/expected/strut.js');
    test.equal(actual, expected);

    test.done();
  },
};
