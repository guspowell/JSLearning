// Write a constructor function to represent a Rectangle, which can calculate its area and perimeter.
// Write a Point function which takes x and y coordinates as arguments to define it. It should also be able to evaluate the distance from another point. We may make use of this exercise in a later assignment problem when dealing with the Document Object Model.
// Write javascript code so that we can check if a string object is a palindrome. E.g. "xyx".isPalindrome() should return true.

function Rectangle(height, width) {
  this.area = height * width;
  this.perimeter = height*2 + width*2;
}


function Point(x,y) {
  this.x = x;
  this.y = y;
};

Point.prototype.distanceFrom = function (x2,y2) {
  var xDifference = x2 - this.x;
  var yDifference = y2 - this.y;
  var totalDistance = Math.sqrt(xDifference*xDifference + yDifference*yDifference);
  return totalDistance;
};


function isPal(string) {
  var backwardsString = string.split("").reverse().join("");
  if (string === backwardsString) { return true; }
  else { return false; };
};
