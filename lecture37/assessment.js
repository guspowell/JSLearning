// Write a javascript function named reverse
// which takes a string argument and returns the reversed string.

//
// Given a javascript array of objects having a radius property as shown
// [{radius: 5}, {radius: 9}, {radius: 2}], write a comparator function
// to sort it.
//
// Write a javascript function named length_of_array, which takes an array
// as argument and returns the number of elements in that array (as
// opposed to what is given by the length property of the array).
// Remember undefined can also be an element if it is explicitly set at
// some index, e.g. x[5] = undefined;. This undefined should be counted,
// but elements which are not present in the array (as arrays can be
// sparse), should not be counted.

function reverseString(string) {
  return string.split("").reverse().join("");
}

function lengthOfArray(array) {
  var counter = 0;

  arr.forEach(function() {counter++;});

  return counter;
}
