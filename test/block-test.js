const assert = require('chai').assert;
const Block = require('../lib/block');

describe('Block', () => {

  it('initializes with the an x property', () => {
    const block = new Block(1, 2, 10, 50);
    assert.equal(block.x, 1);
  });

  it('initializes with the an y property', () => {
    const block = new Block(1, 2, 10, 50);
    assert.equal(block.y, 2);
  });

  it('initializes with the an width property', () => {
    const block = new Block(1, 2, 10, 50);
    assert.equal(block.width, 10);
  });

  it('initializes with the an height property', () => {
    const block = new Block(1, 2, 10, 50);
    assert.equal(block.height, 50);
  });

  it('iterates over all points', () => {
    const block = new Block(0, 0, 2, 2);
    const points = [...block];
    assert.equal(points.length, 4);
  });

  it('can tell if it overlaps with another block', () => {
    const first = new Block(0, 0, 20, 20);
    const second = new Block(5, 5, 20, 20);
    assert.isTrue(first.overlapsWith(second), 'The blocks do not overlap.');
  });

  it('can tell if it does not overlap with another block', () => {
    const first = new Block(0, 0, 20, 20);
    const second = new Block(500, 500, 20, 20);
    assert.isFalse(first.overlapsWith(second), 'The blocks overlap.');
  });

});
