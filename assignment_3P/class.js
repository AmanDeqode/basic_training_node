/* 
class User {
    constructor(username,email,password) {
        this.name = username,
        this.email = email,
        this.password = password
    }

    register() {
        console.log(`${this.name} is registered successfully you can ping him on id ${this.email}`);
    }

    static countUsers() {
        console.log('There are 50 users');
    }
}

const userData = new User('aman chaudhary','aman28111998@gmail.com','abcd');

console.log(userData.name);
console.log(userData.email);

userData.register();

User.countUsers();

class Members extends User {
    constructor(username,email,groupname,groupid) {
        super(username,email)

        this.grpname = groupname;
        this.grpid = groupid;
    }

    memberData() {
        console.log(`member name ${this.username} haqving id ${this.email} is member of ${this.groupname} with ${this.groupid}`);
    }

    static confirmation() {
        return 'I here by confirm your membership';
    }
}

const aman = new Members('aman chaudhary','aman28111998@gmail.com','backend team',001);

aman.memberData();

Members.confirmation();

//console.log(`Parent call static method ${User.confirmation()}`);
console.log('=========');
Members.countUsers();

 */

// class ParentClass {
//     constructor(){}

//     printPath() {
//         console.log(this.path);
//     }
// }

// class Childclass extends ParentClass {
//     constructor(){
//         super();
//         this.path = 'register'
//     }
// }

// const c = new Childclass();

// c.printPath();

// const p = new ParentClass();

// p.printPath();


const args1 = [1,2,3];

const args2 = [4,5,6];

function test() {
    console.log(args1+ ',' +args2);
}

test.apply(null,args1);

test(...args1, ...args2);

