
function outerFactorialFunction(value){
    
    return function innerFactorialFunction(){
        let fact = 1;
        while(value>1)
        {
            fact = fact*value;
            value--;
        }
        return fact;
    }
}

let innerFactorialFunction = outerFactorialFunction(8)

let result = innerFactorialFunction();

console.log(result);
console.log(result);
console.log(result);