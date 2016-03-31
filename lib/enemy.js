const Block = require('./block');

class Enemy extends Block {

  constructor(x, y, width, height, game) {
    super(x, y, width, height);
    this.game = game;
  }

  get bottom() {
    return this.game.height;
  }

  get isPastBottom() {
    return this.y > this.bottom;
  }

  tick() {
    if (this.isPastBottom) {
      this.ressurect();
      return this;
    }
    return this.moveDown();
  }

  moveDown() {
    this.y++;
    return this;
  }

  ressurect() {
    this.y = 0 - this.height;
    return this;
  }

}

module.exports = Enemy;
