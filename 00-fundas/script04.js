//Arrays

let emps = [
    {id:101,name:'Vamsy',salary:45000},
    {id:102,name:'Vasu',salary:55000},
    {id:103,name:'Veena',salary:35000},
    {id:104,name:'Vibhav',salary:15000},
    {id:105,name:'Vasantha',salary:55000},
    {id:106,name:'Vinitha',salary:75000},
    {id:107,name:'Vahini',salary:25000}
];

emps.push({id:108,name:'Vikram',salary:64000});
console.log(emps);

emps.splice(2,3);
console.log(emps);

console.log(emps.find(e => e.id===102));
console.log(emps.findIndex(e => e.id===102));
console.log(emps.find(e => e.id===103));
console.log(emps.findIndex(e => e.id===103));

console.log(emps.forEach(e => e.salary=e.salary-5000));
console.log(emps);
console.log(emps.forEach(function(e){e.salary+=3000;});
console.log(emps);

console.log(emps.filter(e => e.salary<60000));

console.log(emps.map(e => e.name));

let leastSalariedEmp = emps.reduce((e1,e2) => e1.salary<e2.salary?e1:e2);
console.log(leastSalariedEmp)

let a1 = [1,2,3,4,5];
let a2 = [6,7,8,9];
let a3 = [a1,a2];
let a4 = [...a1,...a2];
console.log(a3);
console.log(a4);
