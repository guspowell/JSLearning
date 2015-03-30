var array = [1,2,3];
array[10] = 11;
for(var i=0; i<array.length; i++) {
  console.log(array[i]);
}

var array = [1,2,3]
array.forEach( function(i) { console.log(i) })
// 1
// 2
// 3

function printElement(elem) { console.log(elem) }
array.forEach(printElement)
// 1
// 2
// 3
