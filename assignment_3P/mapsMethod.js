// Maps in Javascript : We can use any type key and value


const myMap = new Map();

const key1 = 'mystr', key2 = {} , key3 = function(){}

// Setting the values 

myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3,'This is a function');

//console.log(myMap);


// Getting the values

let value1 = myMap.get(key2);

//console.log(value1);

// You can loop these values

for(let [key,value] of myMap)
{
    console.log(key, value);
}

// Get only keys
for(let key of myMap.keys())
{
    console.log("keys ", key);
}

// Get only values
for(let value of myMap.values())
{
    console.log('value ',value)
}

// Using forEach loop : -

myMap.forEach((value, key)=>{
    console.log('key is ', key);
    console.log('value is ', value);
});

let myArray = Array.from(myMap);
console.log(myArray);

let mapKeysArray = Array.from(myMap.keys())
console.log(mapKeysArray);

let mapValueArray = Array.from(myMap.values())
console.log(mapValueArray);

console.log([...myMap]);

let obj1 = {
    name: "Aman"
}

let visitedPerson = new Map()
 
visitedPerson.set("Aman",123);

console.log(visitedPerson.get("Aman"));

let ojected = {
    name:"alpha",
    age:30
}
console.log(Object.entries(ojected));
const flatted = Object.entries(ojected)

console.log(flatted.flat());

let mapped = new Map();

mapped.set('banana',1);
mapped.set('orange',2);
mapped.set('meat',3);

console.log(mapped.get('orange'));

let obj = Object.fromEntries(mapped);

console.log(obj);