/*

== -Compared to python, this symbol is more generous as it does not check for data types
<=
>=
!=
=== -This symbol is reserved for checking data types like the Python "=="

var x = 9

if (x == 9) {
    let x = "Juan"
    console.log(x)
}*/

let name = "Pedro"
let age = 20

if (age >= 18){
    console.log(name + " is an adult because he is " + age + " years old.")

}
else {
    console.log(name + " is a childe because he is " + age + " years old.")

}