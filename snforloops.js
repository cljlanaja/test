//this for loop adds 1 to the value of x every time the code runs in the loop
let x = 1
for(let i = 0; i < 10; i++){
    x = x + 1
    console.log(x)
}

//this for loop gets each element, or letter, to the value of y using .length method
let y = "Hello"
for(let i = 0; i < y.length; i++){
    console.log(y[i])
}

//this for loop runs 10 times. if the index is 2, it outputs the value of a
//if the index is 3, it outputs the value of b
//if the index is 4, it solves the modulo equation of 20 % i, which is the i is 4
// if all are false, it outputs the index value
let a = "Leo"
let b = "Virgo"
for(let i = 0; i < 10; i++){
    if(i == 2){
        console.log(a)
    }
    else if(i == 3){
        console.log(b)
    }
    else if(i == 4){
        console.log("20 % 4 is " + 20%i) //modulo equation
    }
    else{
        console.log(i)
    }
}