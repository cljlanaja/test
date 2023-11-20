const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    console.log(name)
    rl.question('Enter your age: ', (age) => {
        age = parseInt(age)
        console.log(age)
        rl.question('Enter your address: ', (address) => {
            console.log(address)
            rl.close()
        })
    })
})