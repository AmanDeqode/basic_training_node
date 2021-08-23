function User(name,degree,year){
    this.myname = name;
    this.mydegree =degree;
    this.myYear = year;
};

export const userInfo = new User("Aman","B.Tech",2021);

console.log(userInfo);


function Calculator(){

    this.read = function(){
        this.value1 = prompt('Enter first value ',0);
        this.value2 = prompt('Enter second value ',0);
    },

    this.sum = function(){
        return +this.value1 + +this.value2;
    }

    this.mul = function(){
        return this.value1 * this.value2;
    }
}

let calculator = new Calculator()
    calculator.read();
    console.log(calculator.sum());
    console.log(calculator.mul());


    function Accumulator(initialValue){

        this.value=+initialValue;

        this.read = function(){
            this.val = prompt('Enter value ',0);
            this. value += this.val
        }
    };

    let accumulator = new Accumulator(1);
        accumulator.read();
        accumulator.read();

