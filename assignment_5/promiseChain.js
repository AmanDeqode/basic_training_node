let names = ['aman',4,'dhawal','hemant'];

let arr = [];
const makeAllCaps = (names) =>{
    return new Promise((resolve,reject)=>{
        names.forEach((name)=>{
            if(typeof name!=='string')
            {
                reject('Error');
            }
            else
            {
                name = name.toUpperCase();
                arr.push(name);
            }
        })
        resolve(arr);
    });
}

makeAllCaps(names).then((data)=>{
    const sortWords = ()=>{
        return new Promise((resolve,reject)=>{
            resolve(data.sort())
        })
    }
    sortWords().then((result)=> console.log(result))
}).catch((err)=>{
    console.log(err);
})
