/* global describe, it */
const path = require('path');
const expect = require('chai').expect;

const _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });
  describe('#identity', function () {
    it('is a function', function() {
      expect(_.identity).to.be.a('function');
    });
    it('should return the same value that is used as the argument', function() {
      const result = _.identity('test');
      expect(result).to.equal('test');
    });
  });
});
