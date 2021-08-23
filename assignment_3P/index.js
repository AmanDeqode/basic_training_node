import {objEmp, objPersonal} from './classesJS';
import { userInfo } from './constructorFunction';

import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    //console.log(objEmp);
    //console.log(objEmp.statement());
    const info = objEmp;
    console.log(info.position);
    console.log(userInfo);
    res.write(`Constructor Function ${JSON.stringify(userInfo)}\n`);
    res.end(`Classes ${JSON.stringify(objEmp)}`);
});

app.get('/me',(req,res)=>{
    //console.log(objPersonal);
    res.end(JSON.stringify(objPersonal));
});

app.listen(PORT, ()=>{
    console.log(`Server is connected at http://localhost:${PORT}`);
});

export default app;
