//F = Friends, L = Lovers, A = Acquaintances, M = Married, E = Enemies, S = Soulmates

function kalayo(name1, name2){
    let samelet = []
    let sandwh = name1 + name2
    let count  =0
    for(let i = 0; i < name1.length; i++){ 
        for (let j = 0; j < name2.length; j++){
            if(name1[i] == name2[j] && name1[i] != " "){
                samelet.push(name1[i])
            }
        }
    }
    for(let k = 0; k < sandwh.length; k++){
        let dupe = false
        for(let l = 0; l < samelet.length; l++){
            if(sandwh[k] == samelet[l]){
                dupe = true
            }
        }
        if(dupe == true){
            count += 1
        }
    }

    if(count == 1 || count == 7 || count == 13 ){
        outcome = "F = Friends"
    }
    else if(count == 2 || count == 8){
        outcome = "L = Lovers"
    }
    else if(count == 3 || count == 9){
        outcome = "A = Acquaintances"
    }
    else if(count == 4 || count == 10){
        outcome = "M = Married"
    }
    else if(count == 5 || count == 11){
        outcome = "E = Enemies"
    }
    else if(count == 6 || count == 12){
        outcome = "S = Soulmates"
    }
    return outcome
    
}

let x = "ant man" //5 letters identical to y
let y = "tan lanaja" //7 letters identical to x
let flames = kalayo(x, y)
console.log(flames)

