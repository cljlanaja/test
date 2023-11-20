const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let x = 0
let a = "Hello"
let b = "World"
let c = "Hello World"
result = 0

rl.question('Pick a number where the loop will end: ', (x) => {
    x = parseInt(x)
    for(let i = 1; i <= x; i++){
        if(i % 2 != 0){
            result = (i + " is an odd number ")
            if (i % 3 == 0 && i % 5 != 0){ 
                console.log(result + a)
            }
            else if (i % 5 == 0 && i % 3 != 0){
                console.log(result + b)
            }
            else if (i % 3 == 0 && i % 5 == 0 && i % 15 == 0){
                console.log(result + c)
            }
            else{
                console.log(result)
            }
        }
        else{
            result = (i + " is an even number ")
            if (i % 3 == 0 && i % 5 != 0){
                console.log(result + a)
            }
            else if (i % 5 == 0 && i % 3 != 0){
                console.log(result + b)
            }
            else if (i % 3 == 0 && i % 5 == 0 && i % 15 == 0){
                console.log(result + c)
            }
            else{
                console.log(result)
            }
            
        }
        
    }
    rl.close()
})