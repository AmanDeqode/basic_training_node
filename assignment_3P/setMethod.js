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

const techArray = ['Node','React','MongoDB'];

const techArray1 = ['Node','React','MongoDB'];

techArray1.push('TypeScript');

setData.add(obj1);
setData.add(obj2);
setData.add(obj3);
setData.add(obj2);
setData.add(obj1);

setData.add(techArray);

setData.add(techArray1);

//setData.delete(techArray1);

for(let value of setData)
{
    //console.log(value);
}

setData.forEach((value, valueData,set)=>{
    console.log(valueData);
})

//console.log(setData);

console.log(setData.size);


let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(values) {

    const uniqueValues = new Set(values);

    return Array.from(uniqueValues);
}

console.log(unique(values));
