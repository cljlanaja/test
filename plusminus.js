let z = [3, -4, 0, 0, 7, 10, -1]

let poscount = 0
let negcount = 0
let zerocount = 0
for(let i = 0; i < z.length; i++){
    if(z[i] > 0){
        poscount += 1
    }
    else if(z[i] < 0){
        negcount += 1
    }
    else if(z[i] == 0){
        zerocount += 1
    }
}

let posfraction = poscount/z.length
let negfraction = negcount/z.length
let zerofraction = zerocount/z.length
console.log (posfraction.toFixed(2))
console.log (negfraction.toFixed(2))
console.log (zerofraction.toFixed(2))

/* let zero = 0
let positive = 0
let negative = 0

for(i = 0; i < z.length; i++){
    if(z[i] == 0){
        zero = zero + 1
    }
    else if(z[i] > 0){
        positive = positive + 1
    }
    else{
        negative = negative + 1
    }
    

}
console.log("There are " + positive + " positives, " + negative + " negatives, and " + zero + " zeroes.") //My solution
*/ 