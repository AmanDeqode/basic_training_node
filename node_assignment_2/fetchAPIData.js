const fs = require('fs');
const path = require('path');

const express = require('express');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', async(req,res) => {
    try {
        const employees = await axios.get('https://dummy.restapiexample.com/api/v1/employees',{});

        console.log(employees.data.data);

        const timestamps = Date.now();

        fs.writeFile(path.join(__dirname,`${timestamps}_employees.txt`),JSON.stringify(employees.data.data), (error) => {
            if(error)
            {
                console.error("Something went wrong here");
                return;
            }
            else
            {
                console.log('Employees information has been saved successfully into the file');
                return;
            }
        });

        res.send(employees.data);

    } catch (error) {
        console.error(error.message);
        throw Error(error.message);
    }
});

url = 'https://dummy.restapiexample.com/api/v1/';



app.get('/:id',async(req,res,next) => {
    try {
        const id = req.params.id;
        const employee = await axios({
            method:'GET',
            url:`${url}/employee/${id}`
        });
        console.log(employee.data);

        const timestamps = Date.now();

        fs.writeFile(path.join(__dirname,`${timestamps}_employees_${id}.txt`),JSON.stringify(employee.data), (error) => {
            if(error)
            {
                console.error("Something went wrong here");
                return;
            }
            else
            {
                console.log('Employees information has been saved successfully into the file');
                return;
            }
        });
        res.send(employee.data);

    } catch (error) {
        console.error(error.message);
        throw Error(error.message);
    }
});

app.listen(PORT,() => {
    console.log(`Server is connected at ${PORT}`);
});

