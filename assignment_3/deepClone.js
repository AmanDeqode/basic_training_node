
let company = {
    name:'deqode',
    zone:['red','blue','yellow'],
    tech:{
        mobile: 'react native',
        backend: 'nodejs',
        frontend: 'react',
        database:'mongoDB'
    },
    email:'deqode@technologies.co.in',

    about: function(value){
        return `${this.name} is an IT industry located at various places in India. I am working here for ${value} months`
    }
}

function deepClone(obj){

    let copyObj ={};

    if(typeof(obj) === 'object')
    {
        for(let key in obj)
        {
        
                copyObj[key] = deepClone(obj[key])
        }
    }
    else if(obj instanceof Array)
    {
        copyObj = [];

        obj.forEach((data,index)=>{
            copyObj[index] = deepClone(data);
        })
    }
    else{
        copyObj = obj;
    }
    return copyObj;
}

const clonedObject = deepClone(company);

clonedObject.zone = ['green','voilet'];

clonedObject.tech.mobile = 'ionic';

clonedObject.email = 'deqode@tech.com';

console.log(company);


console.log(clonedObject);


