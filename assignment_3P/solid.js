
const circle = (radius) => {

    const proto = {
        type:'Circle',
        area() {
            return Math.PI * Math.pow(this.radius,2);
        }
    }

    return Object.assign(Object.create(proto),{radius});
}

const square = (length) => {

    const proto = {
        type: 'Square',
        area(){
            return Math.pow(this.length,2);
        }
    }

    return  Object.assign(Object.create(proto),{length});
}

const triangle = (base,height) => {

    const proto = {
        type: 'Triangle',
        area() {
            return 0.5* base*height;
        }
    }
    return Object.assign(Object.create(proto),{base,height});
}



const shapes = [
    square(5),
    circle(6),
    square(3),
    triangle(4,5)
]

const areaCalculator = (shapes) => {

    const arr=[];

        const proto = {

            sum() {
                for(let shape of shapes) {
                    arr.push(shape.area());
                }
                const combinedResult =  arr.reduce((v,c) => c+= v, 0);

                console.log(combinedResult);
                return arr;
            },
        }
        return Object.assign(Object.create(proto),{shapes});
}


const sumCalculatorOputter = (a) => {
    const proto = {
      JSON() {
        return JSON.stringify(this.calculator.sum())
      },
    }
    return Object.assign(Object.create(proto), {calculator: a})
  }

const areas = areaCalculator(shapes);

const output = sumCalculatorOputter(areas);

console.log(output.JSON());

const roles = ['Admin','User']

function checkRoles(userRole) {
    if(roles.includes(userRole))
    {
        return true;
    }
    else
    {
        return false;
    }
}

//console.log(checkRoles('Admin'));

// Here if we want to add new role


function checkRoles(userRole) {
    if(roles.includes(userRole))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function addrole(role) {
    roles.push(role)
}

addrole('super user');

//console.log(checkRoles('Admin'));


class Job {
    constructor(customer) {
        this.customer = customer;
        this.calculateFee = function() {
            console.log('calculate fees');
        };
    }

    Simple(customer) {
        this.calculateFee(customer);
    }

    Pro(customer) {
        this.calculateFee(customer);
        console.log('Add pro services');
    }
}

const a = new Job('Deqode');

a.Simple();

a.Pro();
  