const assert = require('chai').assert;
const pointsEqual = require('../lib/points-equal');
const createPoint = require('../lib/create-point');

describe('pointsEqual', () => {

  it('returns true if points are equal', () => {
    let first = createPoint(1, 1);
    let second = createPoint(1, 1);

    assert.isTrue(pointsEqual(first, second));
  });

  it('returns false if points are not equal', () => {
    let first = createPoint(1, 1);
    let second = createPoint(555, 555);

    assert.isFalse(pointsEqual(first, second));
  });

});
