/*
 * grunt-airbornos
 * 
 *
 * Copyright (c) 2016 Daniel Huigens
 * Licensed under the MIT license.
 */

/*** SET UP AIRBORN OS ***/

var fs = require('fs');

var airbornRenameGlobalVariables;

(function() {
  var window = {};
  
  var parent = window;
  
  var TextDecoder = function() {}, TextEncoder = function() {};
  
  window.sjcl = {};
  window.sjcl.codec = {};

  var document = {};
  document.createElement = function() {
    return {};
  };
  document.head = {};
  document.head.appendChild = function() {};

  window.crypto = {};
  
  var getFile = function() {};
  
  var esprima = require(__dirname + '/../airbornos/3rdparty/esprima.js');
  var estraverse = require(__dirname + '/../airbornos/3rdparty/estraverse.js');
  
  eval(fs.readFileSync(__dirname + '/../airbornos/core.js', 'utf8'));
  
  airbornRenameGlobalVariables = renameGlobalVariables; // jshint ignore:line
})();

/*** END SET UP AIRBORN OS ***/

var RENAMES = {
  cookie: 'airborn_cookie',
  location: 'airborn_location',
  top: 'airborn_top',
  parent: 'airborn_parent',
  localStorage: 'airborn_localStorage',
  src: 'airborn_src',
  href: 'airborn_href',
  pathname: 'airborn_pathname',
  source: 'airborn_source',
  contentWindow: 'airborn_contentWindow',
  indexedDB: 'airborn_indexedDB',
  responseType: 'airborn_responseType',
  readyState: 'airborn_readyState',
  status: 'airborn_status',
  response: 'airborn_response',
  responseText: 'airborn_responseText',
  innerHTML: 'airborn_innerHTML',
  result: 'airborn_result',
};

module.exports = function(grunt) {
  grunt.registerMultiTask('airbornos', 'Optimize JavaScript files for running under Airborn OS', function() {
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      grunt.file.write(f.dest, f.src.map(function(src) {
        return airbornRenameGlobalVariables(src, grunt.file.read(src), RENAMES);
      }).join(';'));
    });
  });
};
