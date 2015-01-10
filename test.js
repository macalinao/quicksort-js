var expect = require('chai').expect;
var sort = require('./');

describe('sort', function() {
  it('should be sorted', function() {
    var unsorted = [4, 2, 5, 1, 23, 5, 1, 4, 2];
    var sorted = unsorted.slice().sort(function(a, b) {
      return a - b;
    });

    expect(sort(unsorted)).to.eql(sorted);
  });

  it('should sort strings with comparator', function() {
    var comparator = function(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
    var unsorted = ['a', 'book', 'report', 'on', 'peter', 'rabbit'];
    var sorted = unsorted.slice().sort(comparator);
    expect(sort(unsorted, comparator)).to.eql(sorted);
  });

  it('should sort with comparator', function() {
    var comparator = function(a, b) {
      return b - a;
    };
    var unsorted = [4, 2, 5, 1, 23, 5, 1, 4, 2];
    var sorted = unsorted.slice().sort(comparator);
    expect(sort(unsorted, comparator)).to.eql(sorted);
  });
});
