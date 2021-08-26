function outerFactorialFunction(value){
    let store = value;
    return function innerFactorialFunction(){
        let fact = 1;
        let access = store;
        while(access>1)
        {
            fact = fact*access;
            access--;
        }
        return fact;
    }
}

let innerFactorialFunction = outerFactorialFunction(8)

console.log(innerFactorialFunction());
console.log(innerFactorialFunction());
console.log(innerFactorialFunction());
console.log(innerFactorialFunction());