const fs = require('fs');
const path = require('path');

const jobsData = require('./jobs.json');

const technologyData = require('./technologies.json');

for(let i=0;i<jobsData.length;i++)
{
    //console.log(jobsData[i].company)
    
    const desArray = jobsData[i].description.split(' ')

    const matchData = technologyData.filter((tech)=> desArray.includes(tech))

    //console.log(matchData);

    jobsData[i].tags = matchData

    jobsData[i].processing_timestamp = Date.now()
}

const timestamp = Date.now();

fs.writeFile(path.join(__dirname,`${timestamp}_response.json`),JSON.stringify(jobsData),(err)=>{
    if(err)
    {
        return console.error(err.message)
    }
    else
    {
        return console.log(`${timestamp}_response.json has been created`)
    }
});

//console.log(jobsData);


