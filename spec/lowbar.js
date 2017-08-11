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
  describe('#first', function () {
    it('is a function', function() {
      expect(_.first).to.be.a('function');
    });
    it('should return first item in the array', function () {
      const arr = [1, 2, 3];
      const result = _.first(arr);
      expect(result).to.eql(1);
    });
    it('should return n number of items from beggining of array', function () {
      const arr = [1, 2, 3, 4, 5];
      const result = _.first(arr, 3);
      expect(result).to.eql([1, 2, 3]);
    });
  });
  describe('#last', function () {
    it('is a function', function() {
      expect(_.last).to.be.a('function');
    });
    it('should return last item in the array', function () {
      const arr = [1, 2, 3];
      const result = _.last(arr);
      expect(result).to.eql(3);
    });
    it('should return n number of items from end of array', function () {
      const arr = [1, 2, 3, 4, 5];
      const result = _.last(arr, 3);
      expect(result).to.eql([3, 4, 5]);
    });
  });
  describe('#each', function () {
    it('is a function', function() {
      expect(_.each).to.be.a('function');
    });
    it('should count array items', function() {
      const arr = ['a','b','c','d','e'];
      let counter = 0;
      const addToCounter = function() {
        return counter++;
      };
      _.each(arr, addToCounter);
      expect(counter).to.equal(arr.length);
    });
    it('should return the array passed', function() {
      const arr = ['a','b','c','d','e'];
      let counter = 0;
      const addToCounter = function() {
        return counter++;
      };
      const result = _.each(arr, addToCounter);
      expect(result).to.eql(arr);
    });
  });
  describe('#indexOf', function () {
    it('is a function', function() {
      expect(_.indexOf).to.be.a('function');
    });
    it ('should return index value passed', function () {
      let result = _.indexOf([1, 2, 3], 3);
      expect(result).to.equal(2);

      result = _.indexOf(['ash', 'adie'], 'adie');
      expect(result).to.equal(1);

      result = _.indexOf(['ash', false, 2], false);
      expect(result).to.equal(1);
    });
    it ('should return -1 if value is not present in array', function () {
      const result = _.indexOf([1, 2, 3], 4);
      expect(result).to.equal(-1);
    });
    it ('it should start search from 3rd argument (if passed)', function () {
      const result = _.indexOf(['test', 1, 8, 3, 'test', 5, 6], 'test', 2);
      expect(result).to.equal(4);
    });
  });
  describe('#filter', function () {
    it('is a function', function() {
      expect(_.filter).to.be.a('function');
    });
    it('should return an array', function() {
      const result = _.filter();
      expect(result).to.be.an('array');
    });
    it('should return an array of all the values that pass a truth test (predicate)', function () {
      let result = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
      expect(result).to.eql([2, 4, 6]);

      result = _.filter(['banana', 'apple', 'pear', 'banana'], function(str) { if (str === 'banana') return str; });
      expect(result).to.eql(['banana', 'banana']);
    });
    it('should return an array of all the values that pass a truth test (predicate) when passed an object', function () {
      const result = _.filter({
        'apple': 1, 'banana': 2,'pear': 3, 'kiwi': 4, 'stone': 5, 'tree': 6
      }, function(elem) { 
        return elem % 2 == 0; 
      });
      expect(result).to.eql([2, 4, 6]);
    });
  });
  describe('#reject', function () {
    it('is a function', function() {
      expect(_.reject).to.be.a('function');
    });
    it('should return an array', function() {
      const result = _.reject();
      expect(result).to.be.an('array');
    });
    it('should return an array of all the values that fail a truth test (predicate)', function () {
      const result = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
      expect(result).to.eql([1, 3, 5]);
    });
    it('should return an array of all the values that fail a truth test (predicate) when passed an object', function () {
      const result = _.reject({
        'apple': 1, 'banana': 2,'pear': 3, 'kiwi': 4, 'stone': 5, 'tree': 6
      }, function(elem) { 
        return elem % 2 == 0; 
      });
      expect(result).to.eql([1, 3, 5]);
    });
  });
  describe('#uniq', function () {
    it('is a function', function() {
      expect(_.uniq).to.be.a('function');
    });
    it('should return an array', function() {
      const result = _.uniq();
      expect(result).to.be.an('array');
    });
    it('should produce a duplicate-free version of the array', function () {
      const result = _.uniq([1, 2, 1, 4, 1, 3]);
      expect(result).to.be.eql([1, 2, 4, 3]);
    });
  });
  describe('#map', function () {
    it('is a function', function() {
      expect(_.map).to.be.a('function');
    });
    it('should return an array', function() {
        const arr = [1, 2, 3];
        const iteratee = function () {
          return arr;
        };
        const result = _.map(arr, iteratee);
        expect(result).to.be.an('array');
    });
    it('should return an empty array if list is undefined', function() {
        const result = _.map();
        expect(result).to.eql([]);
    });
    it ('should return an array of equal length to input array', function () {
      const arr = [1, 2, 3, 4, 5];
      const iteratee = function (num = num * 2) {
        return arr;
    };
    const result = _.map(arr, iteratee);
    expect(result.length).to.eql(5);
    });
    it('should return an array if list is object', function() {
        const result = _.map({});
        expect(result).to.eql([]);
    });
  });
  describe('_.contains', function () {
    it('is a function', function () {
        expect(_.contains).to.be.a('function');
    });
    it('should return true if the array contains the parameter', function () {
        expect(_.contains([1, 2, 3], 3)).to.equal(true);
    });
    it('should return false if the array does not contain the parameter', function () {
        expect(_.contains([1, 2, 3], 4)).to.equal(false);
    });
    it ('should start searching at the index provided as the third argument', function () {
        expect(_.contains([1, 2, 3], 1, 1)).to.equal(false);
        expect(_.contains([1, 2, 3], 1, 0)).to.equal(true);
    });
  });
});
