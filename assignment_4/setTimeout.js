const process1 = ()=>{
    console.log('Hello Everyone I am process 1');
}


const process2 = () =>{
    setTimeout(()=>{
        console.log('Hello..I am process 2 sorry I am late due to raining');
    },5000)
}

const process3 = () =>{
    console.log('Hello Everyone I am process 3');
}

const CPU = () =>{
    setTimeout(()=>{
        console.log('Where is process 2?????');
    },2000)
}


process1();
process2();
process3();

CPU();
