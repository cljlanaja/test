/*const readline = require('readline')

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})



rl.question("Enter string of whatksdlka: ", (str) => {
    
    let nstr = []
    for(i=0; i < str.length; i++){
        let x = parseInt(str[i])
        if(x != NaN){
            console.log(x)
        }
    }
    ///console.log(nstr)






})*/
/*let x = [1,2,3,4,5]
let y = [2,4,5]


for(let i = 0; i < x.length; i++){
    let duplicate = false //we initialize the 'duplicate' here as 'false' since it still does not have a reference to compare to
    for(let j = 0; j < y.length; j++){
        if(x[i] == y[j]){
            duplicate = true
        }
    }
    if(duplicate == false){ //'if duplicate' checking starts outside the second loop so that it doesn't reset kjashdkhasd
        console.log(x[i])
    }
}*/

/*let x = "Philippines"
let vowels = ["i", "e"]

for(let i = 0; i < x.length; i++){
    let duplicate = false
    for(let j = 0; j < vowels.length; j++){
        if(x[i] == vowels[j]){
           duplicate = true 
        }
    }
    if(duplicate == false){
        console.log(x[i])
    }
}*/
/*let x = ["Hello", "World"]
let y = ""

for(let i = 0; i < x.length; i++){
    y += x[i]
}
console.log(y)*/

/*function sentence(statement){
    console.log(statement)
}

let x = "Hello"
sentence(x)

let y = 123
sentence(y)*/

let h = "this is my fruit salad"
h = h.split("i")
for(i = 0; i < h.length; i++){
    if(h[i] == " "){
        h = h.split(" ")
        
    }
}
console.log(h)
