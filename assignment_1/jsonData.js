const fs = require('fs');
const path = require('path');

const info = {
    name: "aman",
    tech: "full stack developer",
    passingYear: 2021,
    hobbies:['chess','table tennis','motivational videos'],
    favourites:[
        {'fruit':'mango'},
        {'fun':'comedy'}
    ]
}

const jsonInfo = JSON.stringify(info);

fs.writeFile(path.join(__dirname,'jsonfile.txt'),jsonInfo,(err)=>{
    if(err)
    {
        console.error(err.message);
        return
    }
        console.log("Data added successfully");
        return
});

fs.readFile(path.join(__dirname,'jsonfile.txt'),'utf-8',(err,data)=>{
    if(err)
    {
        console.error(err.message);
        return
    }
    else{
        const objData = JSON.parse(jsonInfo);
        console.log(objData);

        console.log(
            `
            Hello I am ${objData.name}\n
            I am a ${objData.tech} \n
            I am going to complete my graduation Year = ${objData.passingYear},
            MY like to play ${objData.hobbies.slice(0,2)} and like to watch ${objData.hobbies.slice(2)}
            `
        )
    }
});