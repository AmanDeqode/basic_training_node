const numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach((number)=>{
    randomNumber(number)
});

function randomNumber(number){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(number)
        },Math.random()*6000)
    }).then((digit)=>{
        console.log(digit)
    });
}
