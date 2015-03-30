function sum() {
  console.log(arguments)
}

sum(1,2,3,4)
// => [1,2,3,4]

function sum() {
  for(i=0; i<arguments.length; i++) {
    console.log(arguments[i])
  }
}
