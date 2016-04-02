const Game = require('./game');

const bullshitCanvas = { width: 400, height: 300 };

const game = new Game(bullshitCanvas);

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 37) {
    game.leftArrowWasPressed();
  }
});
