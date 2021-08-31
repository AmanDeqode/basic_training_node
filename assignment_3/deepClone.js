const employee = {
    id:1,
    name:'Aman Chaudhary',
    age:22,
    education:[
        {
            qualification: 'B.Tech',
            passingYear:2021
        },
        {
            qualifiacation:'XII',
            subject:'PCM'
        }
    ],
    contactInfo:{
        mobile:{number1:8602323705,number2:8085750711}
    },
    address:{
        permanentAddress:[
            {
            HouseNo:13,
            line1:'Silicon City',
            PIN: 452012
            }
        ]
    },
    skills:[
        {
            tech:['Node', 'React','MongoDB','Express'],
            others:{
                sports:['Chess','Table Tennis', 'Squosh'],
                curicularActivity:null
            }
        }
    ],
    Are_you_a_developer:true,
    g:undefined,
    s:null
}

function deepClone(obj){

    let copyObj ={};
    
    if(obj instanceof Array)
    {
        copyObj = [];

        obj.forEach((data,index)=>{

            if(data instanceof Object)
            {
                copyObj[index] = deepClone(data);
            }
            else
            {
                copyObj[index] = data;
            }
        })
    }
    else if(obj instanceof Object)
    {
        
        for(let key in obj)
        {
                if(obj[key] instanceof Array)
                {
                     copyObj[key] = deepClone(obj[key]);
                }
                else if(obj[key] instanceof Object)
                {
                    copyObj[key] = deepClone(obj[key]);
                }
                else
                {
                    copyObj[key] = obj[key];

                }
        }
    }
    else{
        
        copyObj = obj;
    }
    return copyObj;
}

const clonedObject = deepClone(employee);

console.log(JSON.stringify(clonedObject,undefined,4));

