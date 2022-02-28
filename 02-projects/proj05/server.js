import fs from 'fs';

fs.readFile('emps.json',(err,data) => {
    if (err){
        console.log(err.message);
    }else{
        console.log(JSON.parse(data));
    }
});