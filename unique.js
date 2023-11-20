let x = [0, 0, 1, 2, 1, 3, 3, 5, 5]
let y = [1, 1, 1, 2, 2, 3, 3, 4, 4, 9]
///let z = []

for (i = 0; i < x.length; i++){
    let counter = 0
    for (let j = 0; j < x.length; j++){
        if(x[i] == x[j]){
            counter = counter + 1
        }
    }
    if(counter == 1){
        console.log(x[i])
        /*z[i] = x[i]
        console.log(z)*/
    }

}

/* let g = []
let c = [1,2]
g[0] = c[0] // transfers item from c to new array g
console.log(g) */ 