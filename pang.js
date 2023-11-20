let x = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let y = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//let a = "We promptly judged antique ivory buckles for the next prize" //pangram
//let a = "Merry Christmas and Happy New Year" //not pangram
//let a = "The quick brown fox jumps over the dog" //not pangram
//let a = "Pack my box with five dozen liquor jugs" //pangram
let a = "The five boxing wizards jumped quickly" //pangram

let cap = 0
let nocap = 0
let total = 0



for(let i = 0; i <a.length; i++){
    let duplicate = 0
    let presdupe = false
    for(let j = 0; j <x.length; j++){
        if(a[i] == x[j]){
            cap += 1            
        }
        for(let k = 0; k <y.length; k++){
            if(a[i] == y[k]){
                nocap += 1
                duplicate += 1
                if(duplicate <= 2){
                    presdupe = true
                    if(presdupe == true){
                        nocap -= 1
                    }
                }
            }
        }
    }
    total = cap + nocap
}
//console.log(total)
if(total >= 26){
    console.log("pangram")
}
else{
    console.log("not pangram")
}



