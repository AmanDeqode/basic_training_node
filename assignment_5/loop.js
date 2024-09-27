// ====================== Question code =======================================================

// for(var i=0;i<10;i++)
// {
//     setTimeout(()=>{
//         console.log(i);
//     },1000);
// }


// The output of above question -

// It prints '10' -  10 times

// reason  - 

// var is a functional scoped hence it has only one single binding for the entire for loop
// also the setTimeout function contains a callback function which execute after the completion of another
// function.

// So in the above question for loop will executes completely and after that setTimeout executes


// ============================= Method to resolve these issues=================================



const delay = (i) =>{
    setTimeout(()=>{
        console.log(i);
    },1000)
};

for(var i=0;i<10;i++)
{
    delay(i);
}

for(let i=0;i<10;i++)
{
    setTimeout(()=>{
        console.log(i);
    },1000)
}
