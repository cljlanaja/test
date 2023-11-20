let userplan = ["rock", "rock", "scissors", "paper", "scissors"]
let upoint = 0
let bpoint = 0

let dr = "draw"
let uwin = "user"
let bwin = "bot"
function RPS(usermove){
    let botWeap = ["rock", "paper", "scissors"]
    let botact = Math.floor(Math.random() * botWeap.length)

    let botplan = botWeap[botact]

    console.log("User: " + usermove + " Bot: " + botplan)

    if(usermove == botplan){
        return dr
    }
    else if(usermove == "rock" && botplan == "scissors" || usermove == "paper" && botplan == "rock" || usermove == "scissors" && botplan == "paper"){
        upoint += 1
        return uwin
    }
    else{
        bpoint += 1
        return bwin
    }
}

for(let i = 0; i < 5; i++){
    let usermove = userplan[i]
    let result = RPS(usermove)
    console.log("Round " + (i + 1) + ": " + result + " wins")
}if (upoint > bpoint){
    console.log("User won with " + upoint + " points.")
}else if (upoint < bpoint){
    console.log("Bot won with " + bpoint + " points.")
}
else{
    console.log("Both won with " + bpoint + " points.") 
}