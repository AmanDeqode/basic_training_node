const readline = require('readline');

const rl = readline.createInterface({
    input:  process.stdin,
    output: process.stdout 
});

const askPassword = (enterpassword) =>{
    return new Promise((resolve)=>{
        rl.question( enterpassword,(password)=> { resolve(password)})
    });
}


const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%&'*+\/=?^_`{|}~-])[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]{8,}$/;

const passwordValidation = async () =>{
    try {
        const password = await askPassword('Enter your password here: ')

        if(regExp.test(password))
        {
            console.log(`Hurry you entered correct pattern password...`);
            rl.close();
        }
        else
        {
            const passwordDestructure = Array.from(password);

            if(passwordDestructure[0]==='.' || passwordDestructure[passwordDestructure.length-1]==='.')
            {
                console.log('. added at invalid place');
                console.log('Sorry You didn\'t follow the pattern\n 1. there must be an lowercase character\n 2. uppercase character\n 3. a special character \n 4.a digit and atleast length of 8 character');
                rl.close();
            }
            else
            {
                console.log('Sorry You didn\'t follow the pattern\n 1. there must be an lowercase character\n 2. uppercase character\n 3. a special character \n 4.a digit and atleast length of 8 character');
                rl.close();
            }
        }
    } catch (error) {
        console.error(error.message)
        rl.close();
    }
}


passwordValidation()