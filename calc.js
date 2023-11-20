const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a = 0
let b = 0
result = 0

rl.question('Enter first number: ', (a) => {
    a = parseInt(a)
    rl.question('Enter second number: ', (b) => {
        b = parseInt(b)
        rl.question('Choose Operation (add, sub, mult, div, mod): ', (operation) => {
            if (operation == 'add'){
                result = parseInt(a + b)
                console.log(a + '+' + b + '=' + result)
                
            }
            else if (operation == 'sub'){
                result = parseInt(a - b)
                console.log(a + '-' + b + '=' + result) 
            }
            else if (operation == 'mult'){
                result = parseInt(a * b)
                console.log(a + 'x' + b + '=' + result)
            }
            else if (operation == 'div'){
                result = parseInt(a / b)
                console.log(a + '/' + b + '=' + result)
            }
            else if (operation == 'mod'){
                result = parseInt(a % b)
                console.log(a + '%' + b + '=' + result)
            }
            else {
                console.log('Invalid Operation')
            }
            rl.close()

        })

    })
})

/*rl.question('Enter first number: ', (a) => {
    a = parseInt(a)
    rl.question('Enter second number: ', (b) => {
        b = parseInt(b)
        rl.question('Enter operation (add, sub, mult, div): ', (operation) => {
            if (operation == 'add'){
                result = parseInt(a + b)
                console.log(a + '+' + b + '=' + result)
            }
            else {
                if (operation == 'sub'){
                    result = parseInt(a - b)
                    console.log(a + '-' + b + '=' + result)
                }
                else {
                    if (operation == 'mult'){
                        result = parseInt(a * b)
                        console.log(a + 'x' + b + '=' + result)
                    }
                    else{
                        if (operation == 'div'){
                            result = parseInt(a / b)
                            console.log(a + '/' + b + '=' + result)
                        }
                    }
                }
            }
            rl.close()
        })
    })
})*/