//console.log(42%7) //this is the modulo 
let x = 1
for(let i = 0; i<10; i++){ //i<10 means if i is less than 10, i++ means i increments another length for every loop
    x = x + 1              //length is different than the actual value and since the initial value is 0, the value of 1 is 2 in length
    console.log(x)
}

let y = "Hello"
for (let i = 0; i<y.length; i++){ //y.length counts all the elements in a string
    console.log(y[i])   //(y[i]) displays all elements in the string with [i] scanning through the index of the string
}

let a = "Leo"
let b = "Virgo"
for(let i = 0; i < 10; i++){ //you can also get the reverse effect with (let i = 10; i > 0; i--)
    if(i == 2){
        console.log(a)
    }
    else if(i == 3){
        console.log(b)
    }
    else if(i == 4){
        console.log("20 % 4 is " + 20%i)
        //break;        // this breaks the loop so that it stops
    }
    else{
        console.log(i) //displays the initial value of i (which was 0) and starts the loop from there
    }
}