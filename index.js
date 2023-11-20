//let x = [1, 3, 5, 7, 9]
// let x = ["apple", "orange", "mango", 1, 9, true, [3,4]] // a list can contain string as well
// let x = [[3,4], [5,6], [7,8]] // known as a 2D array - array/s inside an array
let x = [1,2, "apple", true, [8,9], 4, 5, 6, 7] // an array with multiple data types

for (i = 0; i < x.length; i++){
    //console.log(x[i]);
    /* for (let j = 0; j < x[i].length; j++){ Double for-loop for situations like 2D array
        console.log(x[i][j])
    } */
    if(typeof x[i] == "number")[ // typeof checks for different data types within an array
        console.log(x[i]) // much simpler code of execution was console.log(typeof x[i]) which displays only the data type of item inside array
    ]
    
    
}

/* let a = 1
let b = "alpha"
let c = [0, 1, 2]
console.log(typeof a)
console.log(typeof b) 
console.log(typeof c[0])*/