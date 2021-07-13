/**
 * LISENCE MIT.
 * Copyright luckydrq<drqzju@gmail.com>
 *
 * - lib/character_data_latin1.js
 * CharacterDataLatin1
 */
var assert = require('assert');
var Character = require('./character');

// static vars
var sharpsMap = ['S', 'S'];
var A = new Array(256);
var A_DATA =
  '\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800' +
  '\u100F\u4800\u100F\u4800\u100F\u5800\u400F\u5000\u400F\u5800\u400F\u6000\u400F' +
  '\u5000\u400F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800' +
  '\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F' +
  '\u4800\u100F\u4800\u100F\u5000\u400F\u5000\u400F\u5000\u400F\u5800\u400F\u6000' +
  '\u400C\u6800\030\u6800\030\u2800\030\u2800\u601A\u2800\030\u6800\030\u6800' +
  '\030\uE800\025\uE800\026\u6800\030\u2000\031\u3800\030\u2000\024\u3800\030' +
  '\u3800\030\u1800\u3609\u1800\u3609\u1800\u3609\u1800\u3609\u1800\u3609\u1800' +
  '\u3609\u1800\u3609\u1800\u3609\u1800\u3609\u1800\u3609\u3800\030\u6800\030' +
  '\uE800\031\u6800\031\uE800\031\u6800\030\u6800\030\202\u7FE1\202\u7FE1\202' +
  '\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1' +
  '\202\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1\202' +
  '\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1\202\u7FE1' +
  '\202\u7FE1\uE800\025\u6800\030\uE800\026\u6800\033\u6800\u5017\u6800\033\201' +
  '\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2' +
  '\201\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2\201' +
  '\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2\201\u7FE2' +
  '\201\u7FE2\201\u7FE2\201\u7FE2\uE800\025\u6800\031\uE800\026\u6800\031\u4800' +
  '\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u5000\u100F' +
  '\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800' +
  '\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F' +
  '\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800' +
  '\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F\u4800\u100F' +
  '\u3800\014\u6800\030\u2800\u601A\u2800\u601A\u2800\u601A\u2800\u601A\u6800' +
  '\034\u6800\030\u6800\033\u6800\034\000\u7005\uE800\035\u6800\031\u4800\u1010' +
  '\u6800\034\u6800\033\u2800\034\u2800\031\u1800\u060B\u1800\u060B\u6800\033' +
  '\u07FD\u7002\u6800\030\u6800\030\u6800\033\u1800\u050B\000\u7005\uE800\036' +
  '\u6800\u080B\u6800\u080B\u6800\u080B\u6800\030\202\u7001\202\u7001\202\u7001' +
  '\202\u7001\202\u7001\202\u7001\202\u7001\202\u7001\202\u7001\202\u7001\202' +
  '\u7001\202\u7001\202\u7001\202\u7001\202\u7001\202\u7001\202\u7001\202\u7001' +
  '\202\u7001\202\u7001\202\u7001\202\u7001\202\u7001\u6800\031\202\u7001\202' +
  '\u7001\202\u7001\202\u7001\202\u7001\202\u7001\202\u7001\u07FD\u7002\201\u7002' +
  '\201\u7002\201\u7002\201\u7002\201\u7002\201\u7002\201\u7002\201\u7002\201' +
  '\u7002\201\u7002\201\u7002\201\u7002\201\u7002\201\u7002\201\u7002\201\u7002' +
  '\201\u7002\201\u7002\201\u7002\201\u7002\201\u7002\201\u7002\201\u7002\u6800' +
  '\031\201\u7002\201\u7002\201\u7002\201\u7002\201\u7002\201\u7002\201\u7002' +
  '\u061D\u7002';

var B = ('\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000' +
  '\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000' +
  '\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000' +
  '\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000' +
  '\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000' +
  '\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000' +
  '\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000' +
  '\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000' +
  '\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\001' +
  '\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\001\000\000\000' +
  '\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000' +
  '\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000' +
  '\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000' +
  '\000\000\000\000\000\000\000\000\000').split('');

var data = A_DATA.split('');
assert(data.length == (256 * 2));
var i = 0, j = 0;
while (i < (256 * 2)) {
  var entry = data[i++] << 16;
  A[j++] = entry | data[i++];
}

function CharacterDataLatin1() {}

var proto = CharacterDataLatin1.prototype;

proto.getProperties = function(ch) {
  return A[~~ch];
};

proto.getPropertiesEx = function(ch) {
  return B[~~ch];
};

proto.isOtherLowercase = function(ch) {
  var props = this.getPropertiesEx(ch);
  return (props & 0x0001) !== 0;
};

proto.isOtherUppercase = function(ch) {
  var props = this.getPropertiesEx(ch);
  return (props & 0x0002) !== 0;
};

proto.isOtherAlphabetic = function(ch) {
  var props = this.getPropertiesEx(ch);
  return (props & 0x0004) !== 0;
};

proto.isIdeographic = function(ch) {
  var props = this.getPropertiesEx(ch);
  return (props & 0x0010) !== 0;
};

proto.getType = function(ch) {
  var props = this.getProperties(ch);
  return (props & 0x1F);
};

proto.isJavaIdentifierStart = function(ch) {
  var props = this.getProperties(ch);
  return ((props & 0x00007000) >= 0x00005000);
};

proto.isJavaIdentifierPart = function(ch) {
  var props = this.getProperties(ch);
  return ((props & 0x00003000) !== 0);
};

proto.isUnicodeIdentifierStart = function(ch) {
  var props = this.getProperties(ch);
  return ((props & 0x00007000) == 0x00007000);
};

proto.isUnicodeIdentifierPart = function(ch) {
  var props = this.getProperties(ch);
  return ((props & 0x00001000) !== 0);
};

proto.isIdentifierIgnorable = function(ch) {
  var props = this.getProperties(ch);
  return ((props & 0x00007000) === 0x00001000);
};

proto.toLowerCase = function(ch) {
  var mapChar = ch;
  var val = this.getProperties(ch);

  if (((val & 0x00020000) != 0) &&
    ((val & 0x07FC0000) != 0x07FC0000)) {
    var offset = val << 5 >> (5 + 18);
    mapChar = ch + offset;
  }
  return mapChar;
};

proto.toUpperCase = function(ch) {
  var mapChar = ch;
  var val = this.getProperties(ch);

  if ((val & 0x00010000) != 0) {
    if ((val & 0x07FC0000) != 0x07FC0000) {
      var offset = val << 5 >> (5 + 18);
      mapChar =  ch - offset;
    } else if (ch == 0x00B5) {
      mapChar = 0x039C;
    }
  }
  return mapChar;
};

proto.toTitleCase = function(ch) {
  return this.toUpperCase(ch);
};

proto.digit = function(ch, radix) {
  var value = -1;
  if (radix >= Character.MIN_RADIX && radix <= Character.MAX_RADIX) {
    var val = this.getProperties(ch);
    var kind = val & 0x1F;
    if (kind == Character.DECIMAL_DIGIT_NUMBER) {
      value = ch + ((val & 0x3E0) >> 5) & 0x1F;
    } else if ((val & 0xC00) == 0x00000C00) {
      // Java supradecimal digit
      value = (ch + ((val & 0x3E0) >> 5) & 0x1F) + 10;
    }
  }
  return (value < radix) ? value : -1;
};

proto.getNumericValue = function(ch) {
  var val = this.getProperties(ch);
  var retval = -1;

  switch (val & 0xC00) {
    default: // cannot occur
    case 0x00000000:         // not numeric
      retval = -1;
      break;
    case 0x00000400:              // simple numeric
      retval = ch + ((val & 0x3E0) >> 5) & 0x1F;
      break;
    case 0x00000800:       // "strange" numeric
      retval = -2;
      break;
    case 0x00000C00:           // Java supradecimal
      retval = (ch + ((val & 0x3E0) >> 5) & 0x1F) + 10;
      break;
  }
  return retval;
};

proto.isWhitespace = function(ch) {
  var props = this.getProperties(ch);
  return ((props & 0x00007000) == 0x00004000);
};

proto.getDirectionality = function(ch) {
  var val = this.getProperties(ch);
  var directionality = (val & 0x78000000) >> 27;

  if (directionality == 0xF ) {
    directionality = -1;
  }
  return directionality;
};

proto.isMirrored = function(ch) {
  var props = this.getProperties(ch);
  return (props & 0x80000000) !== 0;
};

proto.toUpperCaseEx = function(ch) {
  var mapChar = ch;
  var val = this.getProperties(ch);

  if ((val & 0x00010000) != 0) {
    if ((val & 0x07FC0000) != 0x07FC0000) {
      var offset = val  << 5 >> (5 + 18);
      mapChar = ch - offset;
    } else {
      switch(ch) {
        // map overflow characters
        case 0x00B5 : mapChar = 0x039C; break;
        default     : mapChar = Character.ERROR; break;
      }
    }
  }
  return mapChar;
};

proto.toUpperCaseCharArray = function(ch) {
  var upperMap = [String.fromCharCode(ch)];
  if (ch == 0x00DF) {
    upperMap = sharpsMap;
  }
  return upperMap;
};

exports.instance = new CharacterDataLatin1();
