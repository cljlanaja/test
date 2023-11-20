function triarea(base,height){
    //area = (base*height)/2 //alternate code (by Bea)
    //return area
    upper = base * height
    lower = upper / 2
    return lower 
}

let x = 8
let y = 10
let result = triarea(x, y)
console.log(result)