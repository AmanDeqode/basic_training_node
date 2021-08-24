function factorial(value){
    let fact = 1;

    function inner(){
        if(value===0 || value===1)
        {
            return 1;
        }
        while(value>1)
        {
            fact = fact*value;
            value--;
        }
        return fact;
    }
    return inner;
}

const result = factorial(8);

console.log(result());
