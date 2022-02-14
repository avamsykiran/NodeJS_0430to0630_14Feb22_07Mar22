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

let leastSalariedEmp = emps.reduce((e1,e2) => e1.salary<e2.salary?e1:e2);
console.log(leastSalariedEmp)
