const express = require('express');
const fs = require('fs');
const os = require('os');
const path = require('path');

const date = new Date().toISOString().slice(0,10);

const app = express();

const PORT = process.env.PORT || 3000;

const sys = {
    bit: os.arch(),
    hostname: os.hostname(),
    type: os.type(),
}

console.log(sys);

fs.writeFile(path.join(__dirname,'data.txt'),`You work with the system having specification :-\n ${sys.bit} \n ${sys.hostname} \n ${sys.type}` ,(err)=>{
    if(err)
    {
        console.error(err.message);
        return
    }
    console.log("File has been created");
    return

});


fs.appendFile(path.join(__dirname,'data.txt'),`\n Current Time ${date}`,(err)=>{
    if(err)
    {
        console.error(err.message);
        return
    }
    console.log("Data has been appended into the file successfully");
    return
});

app.get("/",(req,res)=>{

    fs.readFile('data.txt','utf-8',(err,info)=>{
        if(err)
        {
             console.error(err.messsge);
             return
        }
        else{
            return res.end(info);
        }
    });
    
});


// fs.unlink(path.join(__dirname,'data.txt'),(err)=>{
//     if(err)
//     {
//         return console.error(err.message)
//     }
//     return console.log("FIle has been removed successfully")
// });


app.listen(PORT,()=>{
    console.log(`server is connected at localhost:${PORT}`)
}
);