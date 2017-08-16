var _ = {};

_.identity = function(input) {
  return input;
};

_.first = function(arr, n) {
  if (n === undefined || n === 1) {
    return arr[0];
  }
  return arr.slice(0, n);
};

_.last = function(arr, n) {
  if (n === undefined || n === 1) {
    return arr[arr.length - 1];
  }
  return arr.slice(-n);
};

_.each = function(arr, iteratee) {
  for (let i = 0; i < arr.length; i++) {
    iteratee(arr[i], i, arr);
  }
  return arr;
};

_.indexOf = function (arr, val, start) {
  if (!start) return arr.indexOf(val);
  let beginStrLength = arr.slice(0, start).length;
  let resultIndex = arr.slice(start).indexOf(val); 
  return resultIndex + beginStrLength;
};

_.filter = function (list, predicate) {
  if (!list) return [];
  let truthArr = [];
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      let isTrue = predicate(list[i]);
      if (isTrue) truthArr.push(list[i]);
    }
  } else if (typeof list === 'object') {
    for (let key in list) {
      let isTrue = predicate(list[key]);
      if (isTrue) truthArr.push(list[key]);
    }
  }
  return truthArr;
};

_.reject = function (list, predicate) {
  if (!list) return [];
  let falseArr = [];
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      let isTrue = predicate(list[i]);
      if (!isTrue) falseArr.push(list[i]);
    }
  } else if (typeof list === 'object') {
    for (let key in list) {
      let isTrue = predicate(list[key]);
      if (!isTrue) falseArr.push(list[key]);
    }
  }
  return falseArr;
};

_.uniq = function (arr) {
  if (!arr) return [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) newArr.push(arr[i]);
  }
  return newArr;
};

_.map = function (list, iteratee) {
    let newArr = [];
    if (list === undefined) return [];
    if (Array.isArray(list)) {
      for (let i = 0; i < list.length; i++) {
        iteratee(list[i], i, list);
        newArr.push(i);
      }
    }
    return newArr; 
};

_.contains = function (array, target, fromIndex) {
    let slice = array.slice(fromIndex);
    if (slice.indexOf(target) !== -1) {
        return true;
    } else {
        return false;
    }
};

_.pluck = function (list, propName) {
    const newList = list.map(function (elem) {
      return (elem[propName]);
    });
    return newList;
};

_.reduce = function(list, iteratee, memo) {
  for (let i = 0; i < list.length; i++) {
    memo = iteratee(memo, list[i]);
  }
  return memo;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}


