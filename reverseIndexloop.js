x = "hello" //string variable
y = "" //empty string variable

for(i = 0; i < x.length; i++){
    y = x[i] + y //increments new character at the left of the string (reversing the string)
    // y = "h" + ""
    // y = "e" + "h"
    // y = "l" + "eh"
    // y = "l" + "leh"
    // y = "o" = "lleh"
    // y = "olleh"

    /*
    y = y + x[i] //increments new character normally at the right of the string
    // y = "" + "h"
    // y = "h" + "e"
    // y = "he" + "l"
    // y = "hel" + "l"
    // y = "hell" + "o"
    // y = "hello"
    */
}
console.log(y) //prints the variable after it completed the full loop sequence (depending on parameters set)