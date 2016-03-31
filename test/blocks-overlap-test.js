const assert = require('chai').assert;
const Block = require('../lib/block');
const blocksOverlap = require('../lib/blocks-overlap');

describe('blocksOverlap', () => {

  it('returns true if blocks overlap', () => {
    const first = new Block(0, 0, 10, 10);
    const second = new Block(5, 5, 10, 10);
    assert.isTrue(blocksOverlap(first, second));
  });

  it('returns false if do not blocks overlap', () => {
    const first = new Block(0, 0, 10, 10);
    const second = new Block(500, 500, 10, 10);
    assert.isFalse(blocksOverlap(first, second));
  });

});
