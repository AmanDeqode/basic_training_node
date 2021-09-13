/* Create a program to fetch content from the API's provided on the following 
link and store its response in different files in the filesystem.
 */
import fs from "fs";
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

const HOST = process.env.HOST;

const URL = process.env.URL;

const employees = async (req, res) => {
    try {
        const employees = await axios.get(`${URL}/employees`, {});

        console.log(employees.data.data);

        const timestamps = Date.now();

        fs.writeFile(path.join(__dirname, 'output', `${timestamps}_employees.txt`), JSON.stringify(employees.data.data), (error) => {
            if (error) {
                console.error("Something went wrong here");
                return;
            }
            else {
                console.log('Employees information has been saved successfully into the file');
                return;
            }
        });

        return res.send(employees.data);
    } catch (error) {
        throw Error(error.message);
    }
};

const getEmployee = async (method, url, id) => {
    try {
        // const id = req.params.id;
        const employee = await axios({
            method,
            url
        });

        const timestamps = Date.now();

        fs.writeFile(path.join(__dirname, 'output', `${timestamps}_employees_${id}.txt`), JSON.stringify(employee.data), (error) => {
            if (error) {
                console.error("Something went wrong here");
                return;
            }
            else {
                console.log('Employees information has been saved successfully into the file');
                return;
            }
        });
        return employee.data;

    } catch (error) {
        console.error(error.message);
        throw Error(error.message);
    }
}

app.get('/', employees);

app.get('/:id', async(req, res) => {
    const id = req.params.id;
    const url = `${URL}/employee/${id}`;
    const resp = await getEmployee('get', url, id)
    res.json(resp);
});

app.listen(PORT, HOST, () => {
    console.log(`Server is connected at http://${HOST}:${PORT}`);
});