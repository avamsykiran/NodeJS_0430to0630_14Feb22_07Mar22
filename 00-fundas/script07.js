//OOPs

//Constructor Functions

const Emp = function(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}

let e1 = new Emp(101,'Vamsy',56000);
let e2 = new Emp(102,'Vani',16000);
let e3 = new Emp(103,'Veena',46000);

e1.hra = e1.salary*0.1;
e2.ta = e1.salary*0.05;

console.log(e1);
console.log(e2);
console.log(e3);

class Employee{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    hra(){
        return this.salary*0.1;
    }

    ta(){
        return this.salary*0.05;
    }
}

let e4 = new Employee(200,'Varshini',78000);
console.log(e4);
console.log(e4.hra());