const fs = require('fs');
const path = require('path');

const request = require('request');

const url = 'http://dummy.restapiexample.com/api/v1/employees';

request(url,(error,response)=>{
    if(error)
    {
        console.log(new Error(error.message));
        return;
    }
    else
    {
        const responseData = response.body;

        const timestamps = Date.now();

        fs.writeFile(path.join(__dirname,`${timestamps}_employees.txt`),responseData,(error)=>{
            if(error)
            {
                console.log(new Error(error.message));
                return;
            }
            else
            {
                console.log('Response has been stored into the file successfully');
            }
        })

        console.log(responseData);
    }
})