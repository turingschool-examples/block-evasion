const Player = require('./player');
const Enemy = require('./enemy');

const Game = function Game(canvas) {
  const w = this.width = canvas.width;
  const h = this.height = canvas.height;
  this.player = new Player(w/2, h/2, 10, 10);
  this.enemies = [];
};

Game.prototype.leftArrowWasPressed = function () {
  this.player.moveLeft();
  console.log('Left arrow was pressed', this.player);
};

module.exports = Game;
