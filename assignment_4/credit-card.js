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

const regExpVisa = /^4[0-9]{12}(?:[0-9]{3})/g;

const regExpRupay = /^6[0-9]{12}(?:[0-9]{3})/g;

const creditCardPattern = async() =>{

    const number = await askNumber('Have a trust on me and provide credit card number:  ')

    if(number===regExpVisa)
    {
        console.log('You have a visa card');
        rl.close();
    }
    else if(number===regExpRupay)
    {
        console.log('You have a rupay card')
    }
    else
    {
        console.log('Sorry your card functionality didn\'t persent in our database' );
    }
} 


creditCardPattern()
