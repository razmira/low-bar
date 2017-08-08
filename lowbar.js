var _ = {};

_.identity = function(input) {
  return input;
};

if (typeof module !== 'undefined') {
  module.exports = _;
}
