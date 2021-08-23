let setData = new Set();

let obj1 = {
    name:"Aman",
    value: 3
}

let obj2 = {
    name: "Shivam",
    value: 5
}

let obj3 = {
    name: "Nitin",
    value:1
}

setData.add(obj1);
setData.add(obj2);
setData.add(obj3);
setData.add(obj2);
setData.add(obj1);

console.log(setData);

console.log(setData.size);