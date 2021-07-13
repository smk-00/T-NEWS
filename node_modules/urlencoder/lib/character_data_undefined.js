/**
 * LISENCE MIT.
 * Copyright luckydrq<drqzju@gmail.com>
 *
 * - lib/character_data_undefined.js
 * CharacterDataUndefined
 */
var Character = require('./character');

function CharacterDataUndefined() {}

var proto = CharacterDataUndefined.prototype;

proto.getProperties = function(ch) {
  return 0;
};

proto.getType = function(ch) {
  return Character.UNASSIGNED;
};

proto.isJavaIdentifierStart = function(ch) {
  return false;
};

proto.isJavaIdentifierPart = function(ch) {
  return false;
};

proto.isUnicodeIdentifierStart = function(ch) {
  return false;
};

proto.isUnicodeIdentifierPart = function(ch) {
  return false;
};

proto.isIdentifierIgnorable = function(ch) {
  return false;
};

proto.toLowerCase = function(ch) {
  return ch;
};

proto.toUpperCase = function(ch) {
  return ch;
};

proto.toTitleCase = function(ch) {
  return ch;
};

proto.digit = function(ch, radix) {
  return -1;
};

proto.getNumericValue = function(ch) {
  return -1;
};

proto.isWhitespace = function(ch) {
  return false;
};

proto.getDirectionality = function(ch) {
  return Character.DIRECTIONALITY_UNDEFINED;
};

proto.isMirrored = function(ch) {
  return false;
};

exports.instance = new CharacterDataUndefined();
