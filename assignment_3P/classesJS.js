class Company {
    constructor(givenName,givenPosition,givenAge){
        this.name = givenName;
        this.position = givenPosition;
        this.age = givenAge;
    }

    statement(){
        return `I am ${this.name} and I am a ${this.position} .`
    }

    static deqode(){
        return 'Deqode is an IT industry';
    }
}

class Personal extends Company {
    constructor(givenName,givenPosition,givenAge,givenDegree,givenPassoutYear,myTech){
        super(givenName,givenPosition,givenAge);

        this.degree = givenDegree;
        this.passoutYear = givenPassoutYear;
        this.tech = myTech; 
    }

    
}
console.log(Company.deqode());

//console.log(Personal.deqode());

 const objPersonal = new Personal("Aman Chaudhary","Full Stack Developer",22,"B.Tech",2021,["Nodejs","React"]);

 const objEmp = new Company("Deqode",["Mobile","Web","BlockChain"],9);

 console.log(objEmp.statement());

 //console.log(objEmp.deqode());

