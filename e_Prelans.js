//Sir's Solution
let s = "We promptly judged antique ivory buckles for the next prize" //pangram
//let s = "Merry Christmas and Happy New Year" //not pangram
//let s = "The quick brown fox jumps over the dog" //not pangram
//let s = "Pack my box with five dozen liquor jugs" //pangram
//let s = "The five boxing wizards jumped quickly" //pangram

let alphabet = 
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    for(let i = 0; i<s.length; i++){
        if(s[i] == "A" || s[i] == "a"){
            alphabet[0] += 1
        }
        else if(s[i] == "B" || s[i] == "b"){
            alphabet[1] += 1
        }
        else if(s[i] == "C" || s[i] == "c"){
            alphabet[2] += 1
        }
        else if(s[i] == "D" || s[i] == "d"){
            alphabet[3] += 1
        }
        else if(s[i] == "E" || s[i] == "e"){
            alphabet[4] += 1
        }
        else if(s[i] == "F" || s[i] == "f"){
            alphabet[5] += 1
        }
        else if(s[i] == "G" || s[i] == "g"){
            alphabet[6] += 1
        }
        else if(s[i] == "H" || s[i] == "h"){
            alphabet[7] += 1
        }
        else if(s[i] == "I" || s[i] == "i"){
            alphabet[8] += 1
        }
        else if(s[i] == "J" || s[i] == "j"){
            alphabet[9] += 1
        }
        else if(s[i] == "K" || s[i] == "k"){
            alphabet[10] += 1
        }
        else if(s[i] == "L" || s[i] == "l"){
            alphabet[11] += 1
        }
        else if(s[i] == "M" || s[i] == "m"){
            alphabet[12] += 1
        }
        else if(s[i] == "N" || s[i] == "n"){
            alphabet[13] += 1
        }
        else if(s[i] == "O" || s[i] == "o"){
            alphabet[14] += 1
        }
        else if(s[i] == "P" || s[i] == "p"){
            alphabet[15] += 1
        }
        else if(s[i] == "Q" || s[i] == "q"){
            alphabet[16] += 1
        }
        else if(s[i] == "R" || s[i] == "r"){
            alphabet[17] += 1
        }
        else if(s[i] == "S" || s[i] == "s"){
            alphabet[18] += 1
        }
        else if(s[i] == "T" || s[i] == "t"){
            alphabet[19] += 1
        }
        else if(s[i] == "U" || s[i] == "u"){
            alphabet[20] += 1
        }
        else if(s[i] == "V" || s[i] == "v"){
            alphabet[21] += 1
        }
        else if(s[i] == "W" || s[i] == "w"){
            alphabet[22] += 1
        }
        else if(s[i] == "X" || s[i] == "x"){
            alphabet[23] += 1
        }
        else if(s[i] == "Y" || s[i] == "y"){
            alphabet[24] += 1
        }
        else if(s[i] == "Z" || s[i] == "z"){
            alphabet[25] += 1
        }
    }
    let pangram = true
    for(let i = 0; i < alphabet.length; i++){
        if(alphabet[i] == 0){
            pangram = false
        }
    }
    if(pangram == true){
        console.log("pangram")
    }
    else{
        console.log("not pangram")
    }

