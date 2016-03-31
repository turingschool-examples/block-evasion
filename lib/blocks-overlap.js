const pointsEqual = require('./points-equal');

module.exports = function (first, second) {
  for (let firstPoint of first) {
    for (let secondPoint of second) {
      if (pointsEqual(firstPoint, secondPoint)) {
        return true;
      }
    }
  }
  return false;
};
