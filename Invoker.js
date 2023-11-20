
function cast(skill,mLeft){
    let mUsed = 0
    cost = 0
    //let mLeft = 0
    if(mLeft > 0){
            //skill.split("R")
            if(skill == "QQQR"){
                mUsed = "Cold Snap."
                cost = 90
                mLeft -= 90
                console.log(mUsed + " Mana used:" + cost + ". Mana left:" + mLeft)
            }
            else if(skill == "QQWR"){
                mUsed = "Ghost Walk."
                cost = 175
                mLeft -= 175
                console.log(mUsed + " Mana used:" + cost + ". Mana left:" + mLeft)
            }
            else if(skill == "QQER"){
                mUsed = "Ice Wall."
                cost = 125
                mLeft -= 125
                console.log(mUsed + " Mana used:" + cost + ". Mana left:" + mLeft)
            }
            else if(skill == "WWWR"){
                mUsed = "E.M.P."
                cost = 175
                mLeft -= 175
                console.log(mUsed + " Mana used:" + cost + ". Mana left:" + mLeft)
            }
            else if(skill == "WWQR"){
                mUsed = "Tornado."
                cost = 140
                mLeft -= 140
                console.log(mUsed + " Mana used:" + cost + ". Mana left:" + mLeft)
            }
            else if(skill == "WWER"){
                mUsed = "Alacrity."
                cost = 90
                mLeft -= 90
                console.log(mUsed + " Mana used:" + cost + ". Mana left:" + mLeft)
            }
            else if(skill == "EEER"){
                mUsed = "Sunstrike."
                cost = 175
                mLeft -= 175
                console.log(mUsed + " Mana used:" + cost + ". Mana left:" + mLeft)
            }
            else if(skill == "EEQR"){
                mUsed = "Forge Spirit."
                cost = 75
                mLeft -= 75
                console.log(mUsed + " Mana used:" + cost + ". Mana left:" + mLeft)
            }
            else if(skill == "EEWR"){
                mUsed = "Chaos Meteor."
                cost = 200
                mLeft -= 200
                console.log(mUsed + " Mana used:" + cost + ". Mana left:" + mLeft)
            }
            else if(skill == "QWER"){
                mUsed = "Deafening Blast."
                cost = 250
                mLeft -= 250
                console.log(mUsed + " Mana used:" + cost + ". Mana left:" + mLeft)
            }

            else{
                console.log("invalid combination")
                mLeft -= 0
            }   
            return mLeft
        
    }
    else{
        console.log("Not enough mana")
    }

}

//let skills = ["QQQQ", "QWE", "R", "WWWR", "QQWR"]
//let skills = ["EEQR", "WWER", "QQQR", "QQER", "EEQR"]
//let skills = ["ABC", "123", "DoReMi", "?!@-", "QWER"]
//let skills = ["WWQR", "EEWR", "QWER", "QQQR", "EEER"]
let skills = ["EEER", "EEER", "E", "ERE", "EEER"]
let mana = 500
for(let i = 0; i < skills.length; i++){
    console.log(cast(skills[i],mana))
}
//nskill = skill.split()



