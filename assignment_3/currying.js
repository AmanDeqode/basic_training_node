function createAdder(args){
    return function add15(args1){
        return args+args1;
    }
}

const add15 = createAdder(15);

console.log(add15(20));
console.log(add15(14));