var array = [1,2,3,4,5,6,7,8,9,10];

array.reduce( function(prev, current) {
  return prev + current
}, 0) //0 at the end is the initial value.
