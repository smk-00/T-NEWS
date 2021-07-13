/**
 * LISENCE MIT.
 * Copyright luckydrq<drqzju@gmail.com>
 *
 * - lib/character_data.js
 * CharacterData
 */
'use strict';

var CharacterDataLatin1 = require('./character_data_latin1');
var CharacterData00 = require('./character_data_00');
var CharacterData01 = require('./character_data_01');
var CharacterData02 = require('./character_data_02');
var CharacterData0E = require('./character_data_0E');
var CharacterDataPrivateUse = require('./character_data_private_use');
var CharacterDataUndefined = require('./character_data_undefined');

exports.of = function(ch) {
  if (ch >>> 8 === 0) {  // fast-path
    return CharacterDataLatin1.instance;
  } else {
    switch(ch >>> 16) {  //plane 00-16
      case 0:
        return CharacterData00.instance;
      case 1:
        return CharacterData01.instance;
      case 2:
        return CharacterData02.instance;
      case 14:
        return CharacterData0E.instance;
      case 15:   // Private Use
      case 16:   // Private Use
        return CharacterDataPrivateUse.instance;
      default:
        return CharacterDataUndefined.instance;
    }
  }
};
