const numbers = [1,2,3,4,5,6,7,8,9,10];

let num = 0;
let delay = 1000;

function randomInterval(num){
    if(num=== numbers.length)
    {
        return;
    }
    setTimeout(()=>{
        console.log(numbers[num]);
        num++;
        randomInterval(num);
    },delay)
    delay = Math.floor(Math.random()*(6-0+1))*1000
}

randomInterval(num);