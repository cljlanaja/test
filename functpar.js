/*function sentence(a,b){
    console.log(a+b)
}

let y = 12
let z = 23
sentence(y, z)

let i = 4
let j = 10
sentence(i,j)*/

/*function sentence(a,b){
    a = a * 2
    b = b * 2
    return a+b //return is used for passing and modifying data through parameters, while console.log simply outputs data
}

let y = 12
let z =23
let sum = sentence(y,z)
console.log(sum)
console.log(y, z) //the initial values do not change*/

/*function sentence(){
    return "this is my statement"
}

let statement = sentence()
console.log(statement)*/

/*function sentence(){
    console.log("hello world")
}

sentence()*/

/*function calcu(num1, num2, operation){
    if(operation == "add"){
        return num1 + num2
    }
    else if(operation == "subtract"){
        return num1 - num2
    }
    else if(operation == "multiply"){
        return num1 * num2
    }
    else if(operation == "divide"){
        return num1 / num2
    }
    else{
        return "Unknown Operation"
    }
}

let x = 10
let y = 7
let operation = "multiply"
let result = calcu(x, y, operation)
console.log(result)*/

/*function calcu(num1, num2, operation){
    let outcome
    if(operation == "add"){
        outcome = num1 + num2
    }
    else if(operation == "subtract"){
        outcome = num1 - num2
    }
    else if(operation == "multiply"){
        outcome = num1 * num2
    }
    else if(operation == "divide"){
        outcome = num1 / num2
    }
    else{
        outcome = "Unknown Operation"
    }
    return outcome
}

let x = 10
let y = 7
let operation = "multiply"
let result = calcu(x, y, operation)
console.log(result)*/


function print(array1){
    for(let i = 0; i<array1.length; i++){
        //array1[i] += 10
        array1[i] += 10 * 9 //basically + 90
        //array1[i] = array1[i] * 10
        //array1[i] = (array1[i] * 10) / 9
    }
    return array1
}

let z = [10, 20, 30]
let newArray = print(z)
console.log(newArray)

/*function print(number){
    let newNumber = number + 1
    return newNumber
}

let z  = [10, 20, 30]
for(let i = 0; i < z.length; i++){
    z[i] = print(z[i])
}
console.log("array is", z)*/