//Password Checker
//let pss = "password" //"weak password"
let pss = "P4$sword" //"strong password"
//let pss = "Adm!nUs3r" //"strong password"
//let pss = "adminuser123" //"weak password"
//let pss = "December25_2000" //"strong password"

let letter = false
let numcheck = [0,1,2,3,4,5,6,7,8,9] 
let char = 0
let smol = 0
let cap = 0
let num = 0
let sym = 0
let strength = 0



for (let i = 0; i < pss.length; i++){
    char += 1
    if(pss[i] == pss[i].toUpperCase()){
        letter = true
        cap += 1
    }
    else if(pss[i] == pss[i].toLowerCase()){
        letter = true
        smol += 1
    }
    else{
        letter = false
        sym += 1
    }
for (let j = 0; j < numcheck.length; j++){ //notice that 2nd for loop is inside the first, but not indented
    if(numcheck[j] == pss[i]){
        num += 1
    }
}
}

let tally = [char, smol, cap, num, sym]
console.log(tally) //checks stuff inside

if(char >= 8 && smol >= 5 && cap >= 1 && num >= 1 && sym >= 1){
    strength = "and it is a strong password"
}
else{
    strength = "and it is a weak password"
}

console.log(char, "characters,", smol, "small letters,", cap, "capital letters,", num, "numbers,", sym, "symbols,", strength)

