const assert = require('chai').assert;
const Player = require('../lib/player');

const game = { width: 100, height: 100 };

describe('Player', () => {

  it('instantiates with an x property', () => {
    let player = new Player(1, 2, 3, 4, game);
    assert.equal(player.x, 1);
  });

  it('instantiates with an y property', () => {
    let player = new Player(1, 2, 3, 4, game);
    assert.equal(player.y, 2);
  });

  it('instantiates with an width property', () => {
    let player = new Player(1, 2, 3, 4, game);
    assert.equal(player.width, 3);
  });

  it('instantiates with an height property', () => {
    let player = new Player(1, 2, 3, 4, game);
    assert.equal(player.height, 4);
  });

  it('instantiates furthestX with the game width - its own width', () => {
    let player = new Player(0, 0, 10, 10, game);
    assert.equal(player.furthestX, 90);
  });

  it('instantiates furthestX with the game height - its own height', () => {
    let player = new Player(0, 0, 10, 10, game);
    assert.equal(player.furthestY, 90);
  });

  it('cannot move left if it is at the left edge', () => {
    let player = new Player(0, 0, 10, 10, game);
    assert.isFalse(player.canMoveLeft);
  });

  it('cannot move right if it is at the right edge', () => {
    let player = new Player(90, 0, 10, 10, game);
    assert.isFalse(player.canMoveRight);
  });

  it('cannot move up if it is at the upper edge', () => {
    let player = new Player(0, 0, 10, 10, game);
    assert.isFalse(player.canMoveUp);
  });

  it('cannot move down if it is at the bottom edge', () => {
    let player = new Player(0, 90, 10, 10, game);
    assert.isFalse(player.canMoveDown);
  });

  it('moves up if it can move up', () => {
    let player = new Player(50, 50, 10, 10, game);
    player.moveUp();
    assert.equal(player.y, 49);
  });

  it('moves down if it can move down', () => {
    let player = new Player(50, 50, 10, 10, game);
    player.moveDown();
    assert.equal(player.y, 51);
  });

  it('moves left if it can move left', () => {
    let player = new Player(50, 50, 10, 10, game);
    player.moveLeft();
    assert.equal(player.x, 49);
  });

  it('moves right if it can move right', () => {
    let player = new Player(50, 50, 10, 10, game);
    player.moveRight();
    assert.equal(player.x, 51);
  });

});
