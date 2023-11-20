//initializes an empty array and two values
let x = []
let a = "hello"
let b = "world"

//assigns the value of a as the first element of the x array. 1st element = index 0
x[0] = a

//pushes the value of b to the array, it is automatically added to the last index of the array
x.push(b)

//you can also assign a new value, not from a variable, to a specific index of an array
x[2] = "it's me"

console.log(x)