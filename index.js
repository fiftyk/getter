'use strict';

var getter = function (obj, keychains, defaultValue) {
  var keys = keychains.split('.'),/*split 属性链*/
    result = obj,//存储最终结果
    sFunc = 'function',
    sObj = 'object';

  for(var i = 0, size = keys.length; i < size; i++) {
    if(typeof obj === sFunc || typeof obj === sObj) {
      result = result[keys[i]];
    }else{
      break;
    }
  }
  return result;
};

