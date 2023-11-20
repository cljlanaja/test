//outputs every elemenet of the array x
let x = ["Hello", "world", "it", "is", "me"]
for(let i = 0; i < x.length; i++){
    console.log(x[i])
}

//outputs every element in this 2d array
let z = [[3, 4], [5, 6], [7, 8]]
for(let i = 0; i < z.length; i++){
    for(let j = 0; j < z[i].length; j++){
        console.log(z[i][j])
        //the index i serves as the element of the first array
        //the index j serves as the element of the second array
    }
}

//outputs the data type of each element
let y = [1, 2, "apple", true, [8, 9], 4, 5, 6, 7]
for(let i = 0; i < y.length; i++){
    console.log(typeof y[i])
}