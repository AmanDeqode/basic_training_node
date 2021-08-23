const about = {
    firstName:"Aman",
    lastName:"Chaudhary",
    get fullName() {
        return `I am ${this.firstName} ${this.lastName}`
    },
    set fullName(value){
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
    }
};
    about.fullName = "Hemant Singh"
console.log(about.fullName)