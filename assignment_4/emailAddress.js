const readline = require('readline');

const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout 
});

const askEmailAddress = (enterEmail) =>{
    return new Promise((resolve)=>{
        rl.question( enterEmail,(email)=> { resolve(email)})
    });
}

const regExp = /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+\.*[a-zA-Z0-9!#$%&'*.+\/=?^_`{|}~-]+@[a-zA-Z0-9.]+\.[a-z]+/g

const emailValidation = async() =>{
    try {
        const emailAddress = await askEmailAddress('Enter your email address ')

        if(regExp.test(emailAddress))
        {
            console.log('you entered a valid email address ');
            rl.close();
        }
        else
        {
            console.log('Please enter a valid email address');
            rl.close();
        }
    } catch (error) {
        console.error(error.message);
        rl.close();
    }
}

emailValidation()

