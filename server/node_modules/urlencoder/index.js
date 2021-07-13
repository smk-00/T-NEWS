/**
 * LISENCE MIT.
 * Copyright luckydrq<drqzju@gmail.com>
 *
 * - index.js
 * URLEncoder
 */
'use strict';

var i;
var caseDiff = 'a' - 'A';
var dontNeedEncoding = [];
for (i = 97; i <= 122; i++) {
  dontNeedEncoding.push(String.fromCharCode(i));
}
for (i = 65; i <= 90; i++) {
  dontNeedEncoding.push(String.fromCharCode(i));
}
for (i = 48; i <= 57; i++) {
  dontNeedEncoding.push(String.fromCharCode(i));
}
dontNeedEncoding.push(' ');
dontNeedEncoding.push('-');
dontNeedEncoding.push('_');
dontNeedEncoding.push('.');
dontNeedEncoding.push('*');

var Character = require('./lib/character');

exports.dontNeedEncoding = dontNeedEncoding;
exports.encode = function(s, encoding) {
  encoding = encoding || 'utf8';

  if (s) {
    var out = [];
    var charArray = [];

    for (var i = 0, len = s.length; i < len;) {
      var c = s[i];
      var charCode = s.charCodeAt(i);

      if (~dontNeedEncoding.indexOf(c)) {
        if (c === ' ') {
          c = '+';
        }
        out.push(c);
        i++;
      } else {
        do {
          charArray.push(c);

          if (c >= 0xD800 && c <= 0xDBFF) {
            if ((i + 1) < len) {
              var d = s.charCodeAt[i + 1];
              if (d >= 0xDC00 && d <= 0xDFFF) {
                charArray.push(d);
                i++;
              }
            }
          }
          i++;
          c = s[i];
        } while(i < len && !~dontNeedEncoding.indexOf(c));

        var buf = new Buffer(charArray.join(''), encoding);
        for (var j = 0; j < buf.length; j++) {
          out.push('%');
          var ch = Character.forDigit((buf[j] >> 4) & 0xF, 16);
          if (Character.isLetter(ch)) {
            ch = String.fromCharCode(ch.charCodeAt(0) - caseDiff);
          }
          out.push(ch);
          ch = Character.forDigit(buf[j] & 0xF, 16);
          if (Character.isLetter(ch)) {
            ch = String.fromCharCode(ch.charCodeAt(0) - caseDiff);
          }
          out.push(ch);
        }
        // reset
        charArray = [];
      }
    }

    return out.join('');
  }

  return null;
};
