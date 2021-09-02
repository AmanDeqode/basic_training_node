const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askNumber = (ques) =>{
    return new Promise((resolve,reject)=>{
        rl.question(ques,(answer)=>{
            resolve(answer)
        });
    })
}


const testNum = (num) =>{
    return new Promise((resolve,reject)=>{
        if(num>10)
        {
            resolve(`${num} is grater than 10`);
            rl.close();
        }
        else if(num<10)
        {
            resolve(`${num} is less than 10`);
            rl.close();
        }
        else
        {
            resolve(`${num} is equal to 10`)
            rl.close();
        }
    });
}

const checkNumber = async() =>{
    const number = await askNumber('Enter number ');
    const result = await testNum(number);

    console.log(result);
}

checkNumber();