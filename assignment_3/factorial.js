function outerFactorialFunction(value){
    
    return function(){
        let fact = 1;
        let access = value;
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
