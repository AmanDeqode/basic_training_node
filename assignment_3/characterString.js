let str = 'deqode industry'

str = str.split(' ');

//console.log(str);

let arr = [];

str.forEach((s)=> {
    const firstChar = s.charAt(0);

    if(firstChar === firstChar.toUpperCase)
    {
        arr.push(s);
        return ;
    }
    else
    {
        const newStr = s.replace(firstChar,firstChar.toUpperCase());
        arr.push(newStr);
        return;
    }
});

//console.log(str);

console.log(arr.join(' '));

