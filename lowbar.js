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

if (typeof module !== 'undefined') {
  module.exports = _;
}
