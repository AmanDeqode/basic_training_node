
const company = {
    name:"Deqode",
    technology:["Mobile","Web","Blockchain"],
    teams:{
        Web:{
            team1: "FrontEnd",
            team2: "Backend",
            team3: "Database"
        },
        Mobile:{
            team1: "FrontEnd",
            team2: "Backend",
            team3: "Database"
        }
    },
    levels: ["lead","mentors","trainees"]
}

//console.log(company);

const {name:cname,technology,teams,levels} = company;

const {team1,team2,team3} = company.teams.Web


console.log(`Company name is ${cname}`);
console.log(`Technology in which we are working ${[...technology]}`);
console.log(`Our Team ${teams}`);
console.log(`In Web team ${team1} ${team2} ${team3}`);
console.log(`levels are ${levels} specifically ${[...levels]}`);