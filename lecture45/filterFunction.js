var array = [1,2,3,4,5,6,7,8,9,10];

function isEven(element) {
  return element % 2 === 0;
}

array.filter(isEven);
