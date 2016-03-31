const createPoint = require('./create-point');
const blocksOverlap = require('./blocks-overlap');

class Block {

  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  overlapsWith(otherBlock) {
    return blocksOverlap(this, otherBlock);
  }

  *[Symbol.iterator]() {
    for (let x = this.x; x < this.x + this.width; x++) {
      for (let y = this.y; y < this.y + this.height; y++) {
        yield createPoint(x, y);
      }
    }
  }

}

module.exports = Block;
