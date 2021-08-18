const fs = require('fs');
const path = require('path');

const jobs = require('./jobs.json');

const technologies = require('./technologies.json');

// for(let i=0;i<jobsData.length;i++)
// {
    
//     const desArray = jobsData[i].description.split(' ')

//     const matchData = technologyData.filter((tech)=> desArray.includes(tech))

//     jobsData[i].tags = matchData

//     jobsData[i].processing_timestamp = Date.now()
// }

for(let info of jobs)
{
    const desArray = info.description.split(' ');

    const matchData = technologies.filter((tech)=> desArray.includes(tech));

    info.tags = matchData;

    info.processing_timestamp = Date.now();
}

const timestamp = Date.now();

fs.writeFile(path.join(__dirname,`${timestamp}_response.json`),JSON.stringify(jobs),(err)=>{
    if(err)
    {
        console.error(err.message);
        return
    }
    else
    {
         console.log(`${timestamp}_response.json has been created`);
         return
    }
});
