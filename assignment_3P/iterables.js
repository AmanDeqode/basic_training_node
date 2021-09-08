
let range = {
    from :1,
    to: 5,

    [Symbol.iterator]() {
            this.current = this.from;
            return this;
    },

            next(){
                if(this.current <= this.to)
                {
                    return {done:false, value: this.current++}
                }
                else
                {
                    return {done:true}
                }
            }
};
/* 
for(let num of range)
{
    console.log(num);
}
  */


const str = 'Deqode';

const iterator = str[Symbol.iterator]();

console.log(iterator);

while(true)
{
    let result = iterator.next();

    if(result.done) break;

    console.log(result.value);

}


let arrayLike = {
    0:'Hello',
    1:'World',
    2: 'Indore',
    3:{name:'abcd'},
    4: 44,
    length:5
};

const arr = Array.from(arrayLike);

console.log(arr);

const obj = {
    from:1,
    to:5
}

console.log(Array.from(range));


console.log(Array.from(range,num=>num*num));

