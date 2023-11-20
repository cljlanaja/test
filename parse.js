let x = ["aba", "baba", "aba", "xzxb"]
let y = ["aba", "xzxb", "ab"]

//[2, 1, 0]

let a = ["xzz", "xy", "xyz", "yyy", "yyy", "yyy", "xyz"]
let b = ["xy", "xyz", "yyy"]

//[1, 2, 3]

/* //My Solution (My attempt at least*)

let e = 0

let f = 0
let g = 0   


for (i = 0; i < x.length; i++){
    if (y[0] == x[i]){
        e += 1
    }
    else if (y[1] == x[i]){
        f += 1
    }
    else if (y[2] == x[i]){
        g += 1
    }
}

counter = [e, f, g]
console.log(counter)*/

//Sir's Solution
let counterarr = []

for(let i = 0; i < y.length; i++){
    let count = 0
    for(let j = 0; j < x.length; j++){
        if(y[i] == x[j]){
        count += 1
        }
    }
    counterarr[i] = count //push method
    //counterarr.push(count) //alternate push method
}
console.log(counterarr)