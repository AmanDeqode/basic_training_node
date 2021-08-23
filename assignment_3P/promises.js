const fetch = require('node-fetch');

const studentsInfo = [
    {name:"Aman", rollno:1},
    {name:"Hemant", rollno:2}
]

const getStudents = () =>{
    return new Promise((resolve,reject) =>{

        const error = false;

        if(error)
        {
            reject("Something went wrong");
        }
        else
        {
            const arr = [];
            studentsInfo.forEach((student)=>{
                return(arr.push(student.name))
            })
            resolve(arr);
        }
    });
}

const createStudent = (student) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            studentsInfo.push(student);

            const error = false;

            if(error)
            {
                reject("Something went wrong");
            }
            else
            {
                resolve("Data has been inserted successfully");
            }
        },5000)
    })
}

const data = async () =>{
    try {
        const insert = await createStudent({name:"Suraj", rollno:3});
        console.log(insert);        
        const result = await getStudents();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

//data();

const promise1 = Promise.resolve("Hello");

const promise2 = 10;

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am late for 3 sec")
    },3000)
})

const apiData = async() =>{
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/users');

    const response = await fetchData.json()
    console.log(response);
}

apiData()

Promise.all([promise1,promise2,promise3]).then((res)=> console.log(res));
