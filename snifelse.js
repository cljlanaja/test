let first = "Pedro"
let age = 15

let x = 1

//tripe equal condition or === is comparing both data and data type

//the first if condition checks if the value of x(which is an integer 1) and "1"(which is a string), thus it's false
if(x === "1"){
    console.log(x)
}
//the second if checks if x(which is an integer 1) and 1(which is also an integer), thus it's true
else if(x === 1){
    console.log(first + " is " + age + " years old.")
}
//this else would be true if the if-else conditions before it are all false
else {
    console.log(x)
}
//keep in mind that "if" should come first, followed by "else if"s, and "else" would be the last in coding if-else statements