const readline = require('readline');

console.log('Welcome to calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Which action you would like to perform\n For addition press - 1\n For substraction press - 2 \n For multiplication press - 3 \n For division press - 4\n',(result)=>{
    const value = +result;

    switch(value)
    {
        case 1:
            rl.question('Please enter the first number :', (num1)=>{
                rl.question('Please enter the second number :',(num2)=>{
                    let result  = +num1 + +num2;
                    console.log(`The sum of the above two numbers ${result}`);
                    rl.close();
                })
            });
            break;
        case 2:
            rl.question('Please enter the first number :', (num1)=>{
                rl.question('Please enter the second number :',(num2)=>{
                    let result  = +num1 - +num2;
                    console.log(`The substraction of the above two numbers ${result}`);
                    rl.close();
                })
            });
            break;
        case 3:
            rl.question('Please enter the first number :', (num1)=>{
                rl.question('Please enter the second number :',(num2)=>{
                    let result  = +num1 * +num2;
                    console.log(`The multiplication of the above two numbers ${result}`);
                    rl.close();
                })
            });
            break;
        case 4:
            rl.question('Please enter the first number :', (num1)=>{
                rl.question('Please enter the second number :',(num2)=>{
                    let result  = +num1 / +num2;
                    console.log(`The Division of the above two numbers ${result}`);
                    rl.close();
                })
            });
            break;
        default:
            console.log("Invalid Input");
            rl.close();

    }
});
