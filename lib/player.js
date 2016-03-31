const Block = require('./block');

class Player extends Block {

  constructor(x, y, width, height, game) {
    super(x, y, width, height);
    this.game = game;
  }

  get furthestX() {
    return this.game.width - this.width;
  }

  get furthestY() {
    return this.game.height - this.height;
  }

  get canMoveUp() {
    return this.y - 1 > 0;
  }

  get canMoveDown() {
    return this.y + 1 < this.furthestY;
  }

  get canMoveLeft() {
    return this.x - 1 > 0;
  }

  get canMoveRight() {
    return this.x + 1 < this.furthestX;
  }

  moveUp() {
    if (this.canMoveUp) { this.y--; }
    return this;
  }

  moveDown() {
    if (this.canMoveDown) { this.y++; }
    return this;
  }

  moveLeft() {
    if (this.canMoveLeft) { this.x--; }
    return this;
  }

  moveRight() {
    if (this.canMoveRight) { this.x++; }
    return this;
  }

}

module.exports = Player;
