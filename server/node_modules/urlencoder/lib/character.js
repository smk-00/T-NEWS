/**
 * LISENCE MIT.
 * Copyright luckydrq<drqzju@gmail.com>
 *
 * - lib/character.js
 * Character
 */

exports.MIN_RADIX = 2;
exports.MAX_RADIX = 36;

exports.UNASSIGNED = 0;
exports.UPPERCASE_LETTER = 1;
exports.LOWERCASE_LETTER = 2;
exports.TITLECASE_LETTER = 3;
exports.MODIFIER_LETTER = 4;
exports.OTHER_LETTER = 5;
exports.NON_SPACING_MARK = 6;
exports.ENCLOSING_MARK = 7;
exports.COMBINING_SPACING_MARK = 8;
exports.DECIMAL_DIGIT_NUMBER = 9;
exports.LETTER_NUMBER = 10;
exports.OTHER_NUMBER = 11;
exports.SPACE_SEPARATOR = 12;
exports.LINE_SEPARATOR = 13;
exports.PARAGRAPH_SEPARATOR = 14;
exports.CONTROL = 15;
exports.FORMAT = 16;
exports.PRIVATE_USE = 18;
exports.SURROGATE = 19;
exports.DASH_PUNCTUATION = 20;
exports.START_PUNCTUATION = 21;
exports.END_PUNCTUATION = 22;
exports.CONNECTOR_PUNCTUATION = 23;
exports.OTHER_PUNCTUATION = 24;
exports.MATH_SYMBOL = 25;
exports.CURRENCY_SYMBOL = 26;
exports.MODIFIER_SYMBOL = 27;
exports.OTHER_SYMBOL = 28;
exports.INITIAL_QUOTE_PUNCTUATION = 29;
exports.FINAL_QUOTE_PUNCTUATION = 30;
exports.ERROR = 0xFFFFFFFF;
exports.DIRECTIONALITY_UNDEFINED = -1;
exports.DIRECTIONALITY_LEFT_TO_RIGHT = 0;
exports.DIRECTIONALITY_RIGHT_TO_LEFT = 1;
exports.DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC = 2;
exports.DIRECTIONALITY_EUROPEAN_NUMBER = 3;
exports.DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR = 4;
exports.DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR = 5;
exports.DIRECTIONALITY_ARABIC_NUMBER = 6;
exports.DIRECTIONALITY_COMMON_NUMBER_SEPARATOR = 7;
exports.DIRECTIONALITY_NONSPACING_MARK = 8;
exports.DIRECTIONALITY_BOUNDARY_NEUTRAL = 9;
exports.DIRECTIONALITY_PARAGRAPH_SEPARATOR = 10;
exports.DIRECTIONALITY_SEGMENT_SEPARATOR = 11;
exports.DIRECTIONALITY_WHITESPACE = 12;
exports.DIRECTIONALITY_OTHER_NEUTRALS = 13;
exports.DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING = 14;
exports.DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE = 15;
exports.DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING = 16;
exports.DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE = 17;
exports.DIRECTIONALITY_POP_DIRECTIONAL_FORMAT = 18;
exports.MIN_HIGH_SURROGATE = '\uD800';
exports.MAX_HIGH_SURROGATE = '\uDBFF';
exports.MIN_LOW_SURROGATE = '\uDC00';
exports.MAX_LOW_SURROGATE = '\uDFFF';
exports.MIN_SURROGATE = exports.MIN_HIGH_SURROGATE;
exports.MAX_SURROGATE = exports.MAX_LOW_SURROGATE;
exports.MIN_SUPPLEMENTARY_CODE_POINT = 0x010000;
exports.MIN_CODE_POINT = 0x000000;
exports.MAX_CODE_POINT = 0X10FFFF;

exports.isLetter = function(codePoint) {
  if (typeof codePoint === 'string') {
    codePoint = codePoint.charCodeAt(0);
  }
  return ((((1 << exports.UPPERCASE_LETTER) |
    (1 << exports.LOWERCASE_LETTER) |
    (1 << exports.TITLECASE_LETTER) |
    (1 << exports.MODIFIER_LETTER) |
    (1 << exports.OTHER_LETTER)) >> getType(codePoint)) & 1) !== 0;
};

exports.forDigit = function(digit, radix) {
  if ((digit >= radix) || (digit < 0)) {
    return '\0';
  }
  // MIN_RADIX, MAX_RADIX
  if ((radix < exports.MIN_RADIX) || (radix > exports.MAX_RADIX)) {
    return '\0';
  }
  if (digit < 10) {
    return String(digit);
  }
  return String.fromCharCode('a'.charCodeAt(0) - 10 + digit);
};

function getType(codePoint) {
  var CharacterData = require('./character_data');
  return CharacterData.of(codePoint).getType(codePoint);
}
