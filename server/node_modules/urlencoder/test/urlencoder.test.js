/**
 * LISENCE MIT.
 * Copyright luckydrq<drqzju@gmail.com>
 *
 * - test/urlencoder.test.js
 */
'use strict';

var assert = require('assert');
var encode = require('..').encode;
var dontNeedEncoding = require('..').dontNeedEncoding;

describe('url encode', function() {
  it('should keep alphanumeric characters', function() {
    var s = dontNeedEncoding.join('');
    var index = s.indexOf(' ');
    s = s.slice(0, index) + s.slice(index + 1);
    assert(encode(s) === s);
  });

  it('should escape space', function() {
    assert(encode(' abc') === '+abc');
  });

  it('should escape non alphanumeric characters', function() {
    var s = '^@';
    assert(encode(s) === '%5e%40');
  });

  it('should escape multi-byte characters', function() {
    var s = '雪卒';
    assert(encode(s) === '%e9%9b%aa%e5%8d%92');
  });
});
