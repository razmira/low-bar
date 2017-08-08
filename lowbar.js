var _ = {};

_.identity = function(input) {
  return input;
};

_.first = function(arr, n) {
  if (n === undefined || n === 1) {
    return arr[0];
  }
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
