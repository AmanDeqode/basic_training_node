function Calculator(){

    this.read = function(){
        this.value1 = prompt("Enter first value ",0)
        this.value2 = prompt("Enter second value ",0);
    }
    this.sum = function(){
        return `Sum of given numbers is ${+this.value1 + +this.value2}`;
    }

    this.mul = function(){
        return `Multiply of the given number is ${this.value1*this.value2}`;
    }
}

const calc = new Calculator();

calc.read();

console.log(calc.sum());

console.log(calc.mul());