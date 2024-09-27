let weekDays = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

let arr = [];
const makeAllCaps = (weekDays) => {
    return new Promise((resolve,reject) => {
        for(let day of weekDays)
        {
            if(typeof day !== 'string')
            {
                reject(new Error('Invalied type in array'));
                break;
            }
            else
            {
                day = day.toUpperCase();
                arr.push(day);
            }
        }
        resolve(arr);
    });
}

const sortWords = (days)=>{
    return new Promise((resolve)=>{
        resolve(days.sort())
    })
};

makeAllCaps(weekDays).then((days)=>{
    sortWords(days).then((day)=> console.log(day))
}).catch((err)=>{
    console.log(err);
})
