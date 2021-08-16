const fs = require('fs');

fs.writeFile('data.txt','Welcome to the nodejs',(err)=>{
    if(err)
    {
        return console.error(err.message)
    }
    return console.log("File has been created");

});


fs.appendFile('data.txt',' Data has been added to the file',(err)=>{
    if(err)
    {
        return console.error(err.message)
    }
    return console.log("Data has been appended into the file successfully");
});

fs.readFile('data.txt','utf-8',(err,info)=>{
    if(err)
    {
        return console.error(err.messsge)
    }
    return console.log(info)
});

fs.unlink('data.txt',(err)=>{
    if(err)
    {
        return console.error(err.message)
    }
    return console.log("FIle has been removed successfully")
});