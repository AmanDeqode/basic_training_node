let str = 'deqode industry'

str = str.split(' ');

let arr = [];

str.forEach((s)=> {
    const firstChar = s.charAt(0);

    const newStr = s.replace(firstChar,firstChar.toUpperCase());

    arr.push(newStr);
});

console.log(arr.join(' '));



