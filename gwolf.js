/*
//1.
let a = 'storingo'
let b = 21
let c = true
let d = [1,2]

console.log(a + " is a " + typeof a)
console.log(b + " is a " + typeof b)
console.log(c + " is a " + typeof c)
console.log(c + " is a " + typeof c)


//2.
let name = "Jose"
let age = 19

if(age <= 18){
    console.log("My name is " + name + " and I am " + age + " years old. (adult)")
}

else{
    console.log("My name is " + name + " and I am " + age + " years old. (minor)")
}


//3.
let x = "2"

x = parseInt(x)
console.log("2 + 10 = ", x + 10)


//4.
let x = 3

if(x % 2 != 0){
    console.log(x + " is odd.")
}
else{
    console.log(x = " is even.")
}


//5. 
let grade = 87

if(grade <= 75){
    console.log("Passar.")
}
else{
    console.log("Failed :((")
}


//6.
for(i = 2; i <= 12; i++){
    console.log(i)
}


//7.
let x = 6
for(i = 1; i <= 10; i++){
    console.log(x, " x ", i, " = ", x*i)
}


//8.
let x = ['storingo', 21, true, [1,2]]

for(i = 0; i < x.length; i++){
    console.log(x[i] + " typeof is: " + typeof x[i])
}


//9. 
let x = [[1,2], [3,4], [5,6]]

for(let i = 0; i < x.length; i++){
    for(let j = 0; j< x[i].length; j++){
        console.log(x[i][j])
    }
}


//10.
let x = [1,2,3,4,5]

for(let i = 0; i < x.length; i++){
    console.log(x[i], " + 2 = ", x[i] + 2)
}


//11.
let x = ["Hello", "World"]

for(i = 0; i<x.length; i++){
    for(j = 0; j<x[i].length; j++){
        console.log(x[i][j])
    }
}


//12.
let x = ["Hello", "World"]
let y = ["Happy", "Birthday"]
for(let i = 0; i < y.length; i++){
    for(let j = 0; j < x.length; j++)
    x[i] = y[i]
    
}
console.log(x)


//13.
let x = ["Hello", "World"]
let a = "it"
let b = "is"
let c = "me"

x.push(a, b, c)
console.log(x)


//14.
let x = 5
let y = 3

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)


//15.
let x = 15

if(x % 5 == 0){
    console.log(x + " is divisible by 5.")
}
else if(x % 3 == 0){
    console.log(x + " is divisible by 3.")
}
else if(x % 3 == 0 && x % 5 == 0){
    console.log(x + " is divisible by both 5 and 3.")
}



//16. Job's solution
let x = "Philippines"
let vowels = ["i", "e"] //dapat all vowels with higher and lower case

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
}

//Alternate answer
let x = "Philippines"
for(let i = 0; i < x.length; i++){
    if(x[i] != "a" && x[i] != "e" && x[i] != "i" && x[i] != "o" && x[i] != "u"){
        console.log(x[i])
    }
}


//17. You can also use Job's solution from 16.
let x = "Eutopia"

for(let i = 0; i<x.length; i++){
    if(x[i] != "t" && x[i] != "p"){ //you can use the 'or' syntax or '||' while using '== vowel letters'
        console.log(x[i])
    }
}


//18.
let x = "Mask of Madness"
let y = ""
for(let i = 0; i < x.length; i++){
    if(x[i] != "a"){
        y += x[i]
    }
    else{
        y += "o"
    }
}
console.log(y)


//19.
let x = "1"
let y = 5

console.log(parseInt(x) + y)


//20.
for(let i = 1; i <=10; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}


//21.
for(let i = 1; i <=100; i++){
    if(i % 10 == 0){
        console.log(i)
    }
}


//22.
for(let i = 0; i <=30; i++){
    console.log(i + 3)
}

//Alternate answer
for(let i = 0; i <= 30; i+=3){
    console.log(i)
}

//Alternate answer
for(let i = 0; i <=30; i++){
    console.log(i)
    i += 2
}

//23.
let boolean = true
let x = 2

if(boolean == true){
    console.log(x + 2)
}
else if(booloean == false){
    console.log(x - 2)
}


//24.
let x = [2, 4, 6, 8]

console.log(x[0] + 2)
console.log(x[1] - 2)
console.log(x[2] * 2)
console.log(x[3] / 2)

//Alternate answer //Also try this code: "x[10%2] = x[10%2] * 2"
x[0] = x[0] + 2
x[1] = x[1] - 2
x[2] = x[2] * 2
x[3] = x[3] / 2

console.log(x)


//25.
let x = [10, 3]

for(let i = 0; i < 100; i++){
    if(x[0] >= x[1]){
        x[1] += 2
        console.log(x[1])
    }
}

//26. Much recommended to use double loop as per instruction
let x = ["Hello", "World"]
let y = ""

for(let i = 0; i < x.length; i++){
    y += x[i]
}
console.log(y)

//27.
let x = [1,2,3,4,5]
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
}


//28.
let x = 37

if(x >= 25){
    console.log(x + " is in Quadrant 1")
}
else if(x <= 26 && x >= 50){
    console.log(x + " is in Quadrant 2")
}
else if(x <= 51 && x >= 75){
    console.log(x + " is in Quadrant 3")
}
else if(x <= 76 && x >= 100){
    console.log(x + " is in Quadrant 4")
}
else{
    console.log(x + " is invalid.")
}

//29.
let x = [true, true, false, false, false]
let counter = 0 //Remember that if you're gonna use a variable outside a block, make sure to initializa it outside the block as well

for(){
    if(x[i] == true){
        counter += 1
    }
}
if(counter >= 3){
    console.log("Thank You.")
}
else if(counter < 3){
    console.log("Sorry")
}


//30.
let e = ""

for(i = 0; i <= 10; i++){
    e += "x"
    console.log(e)
}