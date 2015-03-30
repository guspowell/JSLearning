var myArray = [67, 34, 5, 2, 8];

function numComparator(a,b) {
  return (a-b);
}

myArray.sort(numComparator);

// => [2, 5, 8, 34, 67]


var myArray = [67, 34, 5, 2, 8];

function numComparator(a,b) {
  return (b-a);
}

myArray.sort(numComparator);

// => [67, 34, 8, 5, 2]
