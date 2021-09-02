const testNum = (num) =>{
    return new Promise((resolve,reject)=>{
        if(num>10)
        {
            resolve(`${num} is greater than 10`)
        }
        else if(num<10)
        {
            resolve(`${num} is less than 10`);
        }
        else
        {
            resolve(`${num} is equal to 10`)
        }
    })
}

const validNumber = async() =>{
    const number = await testNum(10);

    console.log(number);
}

validNumber();
