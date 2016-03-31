const assert = require('chai').assert;
const Enemy = require('../lib/enemy');

const game = { width: 100, height: 100 };

describe('Enemy', () => {

  it('instantiates with an x property', () => {
    let enemy = new Enemy(1, 2, 3, 4, game);
    assert.equal(enemy.x, 1);
  });

  it('instantiates with an y property', () => {
    let enemy = new Enemy(1, 2, 3, 4, game);
    assert.equal(enemy.y, 2);
  });

  it('instantiates with an width property', () => {
    let enemy = new Enemy(1, 2, 3, 4, game);
    assert.equal(enemy.width, 3);
  });

  it('instantiates with an height property', () => {
    let enemy = new Enemy(1, 2, 3, 4, game);
    assert.equal(enemy.height, 4);
  });

  it('knows where the bottom of the board is', () => {
    let enemy = new Enemy(1, 2, 3, 4, game);
    assert.equal(enemy.bottom, game.height);
  });

  it('knows if it is past the bottom of the screen', () => {
    let enemy = new Enemy(0, 101, 10, 10, game);
    assert.isTrue(enemy.isPastBottom);
  });

  it('ressurects off the top of the screen', () => {
    let enemy = new Enemy(0, 101, 10, 10, game);
    enemy.ressurect();
    assert.equal(enemy.y, -10);
  });

  it('moves it down on tick', () => {
    let enemy = new Enemy(0, 0, 10, 10, game);
    enemy.tick();
    assert.equal(enemy.y, 1);
  });

  it('ressurects if it is past the bottom on tick', () => {
    let enemy = new Enemy(0, 101, 10, 10, game);
    enemy.tick();
    assert.equal(enemy.y, -10);
  });

});
