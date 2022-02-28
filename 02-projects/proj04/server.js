import fs from 'fs';

let emps = [
    {id:1,name:'Vamsy Kiran',salary:65000,doj:new Date('2022-01-01')},
    {id:2,name:'Vinay',salary:75000,doj:new Date('2022-01-11')},
    {id:3,name:'Vani',salary:55000,doj:new Date('2022-02-01')},
    {id:4,name:'Veena',salary:85000,doj:new Date('2022-02-01')},
    {id:5,name:'Vinodh',salary:45000,doj:new Date('2022-02-11')}
];

fs.writeFile('emps.json',JSON.stringify(emps), err => {
    if (err){
        console.log(err.message);
    }else{
        console.log("File created and saved");
    }
});