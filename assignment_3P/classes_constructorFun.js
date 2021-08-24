function Company(givenName,givenPosition,givenAge){
    this.name = givenName;
    this.position = givenPosition;
    this.age = givenAge;

    this.statement = function(){
        return `I am ${this.name} and I am a ${this.position}`
    }
    Company.deqode = function(){
        return 'Deqode is an IT industry'
    }
};

function Personal(givenName,givenPosition,givenAge,givenDegree,givenPassoutYear,myTech){
    Company.call(this,givenName,givenPosition,givenAge);

    this.degree = givenDegree;
    this.year = givenPassoutYear;
    this.tech = myTech;
};

function Personal1(givenName,givenPosition,givenAge,givenDegree,givenPassoutYear,myTech){
    Company.apply(this,[givenName,givenPosition,givenAge]);

    this.degree = givenDegree;
    this.year = givenPassoutYear;
    this.tech = myTech;
};

let comObj = new Company("Deqode",["Mobile","Web","BlockChain"],9);

console.log(Company.deqode());


console.log('Company has been called\n');

console.log(comObj.name);
console.log(comObj.position);
console.log(comObj.age);
console.log(comObj.statement());

let perObj = new Personal("Aman Chaudhary","Full Stack Developer",22,"B.Tech",2021,["Nodejs","React"]);

let perObj1 = new Personal1("Aman Chaudhary","Full Stack Developer",22,"B.Tech",2021,["Nodejs","React"]);
console.log('\nPersonal has been called ');
console.log(perObj1.name);
console.log(perObj1.position);
console.log(perObj1.age);
console.log(perObj1.degree);
console.log(perObj1.year);
console.log(perObj1.tech);
console.log(perObj1.statement());

