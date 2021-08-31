const readline = require('readline');

const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout 
});

const askNumber = (enterNumber) =>{
    return new Promise((resolve)=>{
        rl.question( enterNumber,(number)=> { resolve(number)})
    });
}

const creditCardPattern = async() =>{
    const number = await askNumber('Have a trust on me and provide credit card number:  ')

    console.log(number);
} 


creditCardPattern()