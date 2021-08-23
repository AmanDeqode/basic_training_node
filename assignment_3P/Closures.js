// ------------  Lexical Scoping --------------------

function init(){
    let name = 'Aman';

    function displayName() {
        console.log(name);
    }
    displayName();
}

init();

// ------------------------- Closure ---------------------

function makeFunc() {
    var name = 'Hemant'

    function displayName() {
        console.log(name);
    }

    return displayName;
}

const myFunc = makeFunc();

myFunc();


function makeAdder(x) {
    return function(y) {
        console.log(x+y);
    }
}

const add5 = makeAdder(5);

add5(2);


function makeCounter()
{
    let count = 0;

    return function(){
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter());
console.log(counter());

// console.log(counter2());
// console.log(counter2());

function sum(a){
    return function(b){
        return (a+b);
    }
}

console.log(sum(1)(2));

// let arr1 = [1,2,3,4,5];

// let arr2 = arr1;

// console.log(arr2);
// console.log(arr1);

// arr2.push(6,7);

// let arr3 = [].concat(arr1);

// arr3.push(98);

// console.log(arr2);
// console.log(arr1);
// console.log(arr3);


// let obj1 = {
//     a:1,
//     b:2,
//     alpha:{
//         beta:"gamma"
//     }
// }

// let obj2 = obj1;

// console.log(obj2);
// console.log(obj1);

// obj2.c = 5;

// console.log(obj2);
// console.log(obj1);

// let obj3 = Object.assign({},obj1);

// console.log(obj3);

// obj3.d = "success";

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// obj3.alpha.beta = "delta";

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// let obj4 = JSON.parse(JSON.stringify(obj1));

// obj3.alpha.beta = "theta";

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);
// let a1 = 10;
// let b1 = 20;
// b1 = a1;
// console.log(a1);
// console.log(b1);

// b1 = 12;
// console.log(b1);