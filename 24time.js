//let time = "07:45:17PM" //Output should be 19:45:17
//let time = "03:30:29AM" //Output should be 03:30:29
//let time = "12:00:00AM" //Output should be 00:00:00
let time = "11:59:59PM" //Output should be 23:59:59

time = time.split(":")
console.log(time)
ntime = ""

for(let i = 0; i<time.length; i++){
    if(time[2].indexOf("PM") == 2){
        time[0] = parseInt(time[i]) + 2
        ntime = time[2]
        ntime = ntime.split("PM")
    }
    else if(time[2].indexOf("AM") == 2){
        if(time[0] == "12"){
            time[0] = "00"
            ntime = time[2]
            ntime = ntime.split("AM")
        }
        else{
            ntime = time[2]
            ntime = ntime.split("AM")
        }
    }
} 

console.log(time[0] + ":" + time[1] + ":" + ntime)
