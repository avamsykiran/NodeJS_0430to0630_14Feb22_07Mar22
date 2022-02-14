//JSON(s)

let e1  = {id:101,name:'Vamsy',salary:45000.0,joinDate:new Date()};
console.log(e1);

let e2 = e1;
e2.salary+=1000;
console.log(e2);
console.log(e1);

let e3 = {...e1,salary:e1.salary+1000};
console.log(e3);
console.log(e1);