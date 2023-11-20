//Math Functions
//round off
let a = 1.5
a = Math.round(a)
console.log(a)

//randomizer
let b = Math.floor(Math.random() *11) //gives a random number from 1 to 10 (idk why 11 pero 10 lng sya taman)
//let b = Math.floor(Math.random() * 6) + 5 //gives a random number from 5 to 10 (*6 as the starting value aka 5, + 5 is the maximum value random number can reach)
console.log(b)

//absolute value
let c = -101
console.log(Math.abs(c)) //abs gives the absolute value of c. Absolute value is the version of the number that has no negative.

//String Functions
//length
let d = "Hello"
console.log(d.length) //.length outputs the total amount of characters in the string/array

//index
let e = "Hello world, it is me"
console.log(e.indexOf("e")) //searches the first position of the letter "e"
//console.log(e.indexOf("e", 5)) //searches the position of the letter "e", after position 5 and disregards the last 5 letters in the search.
//console.log(e.indexOf("world"))

//to upper case
let f = "hello world"
console.log(f.toUpperCase())

//to lower case
let g = "IT IS ME"
console.log(g.toLowerCase())

//split
let h = "this is my fruit salad"
h = h.split(" ") //cuts the strings into arrays depending on what character in the parameter of teh split method
//h = h.split("i") //try this code
console.log(h)

/*let h = "this is my fruit salad"
h = h.split("i")
for(i = 0; i < h.length; i++){
    if(h[i] == " "){
        h = h.split(" ")
        
    }
}
console.log(h)*/

//Array Functions

let i = []
console.log(i.length)

//sort
let j = [8, 1, 4, 6]
console.log(j.sort())

let k = ["apple", "prange", "banana", "grape", 1, 92, 16]
console.log(k.sort())