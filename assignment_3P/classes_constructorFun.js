function Company(givenName,givenPosition,givenAge){
    this.name = givenName;
    this.position = givenPosition;
    this.age = givenAge;

    this.statement = function(){
        return `I am ${this.name} and I am a ${this.position}`
    }
};

function Personal(givenName,givenPosition,givenAge,givenDegree,givenPassoutYear,myTech){
    Company.call(this,givenName,givenPosition,givenAge);

    this.degree = givenDegree;
    this.year = givenPassoutYear;
    this.tech = myTech;
};

let comObj = new Company("Deqode",["Mobile","Web","BlockChain"],9)

console.log('Company has been called\n');

console.log(comObj.name);
console.log(comObj.position);
console.log(comObj.age);
console.log(comObj.statement());

let perObj = new Personal("Aman Chaudhary","Full Stack Developer",22,"B.Tech",2021,["Nodejs","React"]);


console.log('\nPersonal has been called ');
console.log(perObj.name);
console.log(perObj.position);
console.log(perObj.age);
console.log(perObj.degree);
console.log(perObj.year);
console.log(perObj.tech);
console.log(perObj.statement());

