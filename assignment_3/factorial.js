function factorial(value){
    let fact = 1;

    function inner(){
        while(value>1)
        {
            fact = fact*value;
            value--;
        }
        return fact;
    }
    return inner;
}

const result = factorial(5);

console.log(result());
