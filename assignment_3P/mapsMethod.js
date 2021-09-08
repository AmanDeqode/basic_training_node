/* // Maps in Javascript : We can use any type key and value


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
 */

let map = new Map();

map.set('1','str1');

map.set(1,'num');

map.set(true,'bool');

map.set('tech',{
    'front-end': 'React',
    'back-end':'Node'
});

map.set('tech',['Node','React']);

const a = {
    name:'aman'
}

map.set(a,'its an object');

const b = {
    name: 'aman'
}

map.set(b,'its an object');

for(let keys of map.keys())
{
    //console.log(keys);
}

for(let values of map.values())
{
    //console.log(values);
}

for(let entries of map.entries())
{
    //console.log(entries);
}

for( let [key,value] of map.entries())
{
    //console.log(`For these ${key} we have ${value} value`)
}

const keysArray = [...map.keys()];

//console.log(keysArray);

const mapArray = [...map.values()];

//console.log(mapArray);

map.delete(1);

//console.log(map);



const obj = {
    'name':'aman',
    'tech':['Node','React'],
    true:'bool',
    12:'number',
    obj:{
        name:'object',
        present:'inside object'
    },
    obj:{
        name:'object1',
        data:['1',2,true]
    }
}

//console.log(obj);

//console.log(typeof obj.true)

let peoples = new Map();

peoples.set('1', 'jhon');
peoples.set('2', 'jasmein');
peoples.set('3', 'abdo');

//console.log([...peoples.entries()]);


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {

    let map = new Map();

    for(let words of arr)
    {
        let sorted = words.toLowerCase().split('').sort().join('');

        map.set(sorted,words);
    }

  //  console.log(map.values());
}

aclean(arr);


let map_data = new Map();

map_data.set('name','abc');

let keys = Array.from(map_data.keys());

keys.push('email');

//console.log(keys);


const operation = new Map();

const users = {
    name: 'aman',
    technology:['Node','React'],
    experience: 0.3,
}

const callback = () => {
    console.log('I am a callback function');
}

function asynchronous() {
    setTimeout(function() {
        console.log('I am async in nature');
    },2000)
}


const printValue = (callback,asynchronous) =>{
    console.log('The value has been printed');
    callback();

    asynchronous();

}

operation.set(function(){
    printValue(callback,asynchronous);
},function() {
    return 1+1;
});

operation.set(users,function(){
    console.log(users)
});

operation.set({item:'choclate'},'cadbury');

operation.set(1,'one');

operation.set({},'empty object');

operation.set(true,'boolean');

//console.log(operation);

//console.log(operation.keys())

for(let key of operation.keys())
{
    if(typeof key === 'object')
    {
        
        console.log(key);
    }
    else if(typeof key === 'function')
    {
        console.log(key())
    }
    
}