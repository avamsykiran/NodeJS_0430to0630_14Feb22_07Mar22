const series = (lb,ub,taskName) => {
    return new Promise((resolve,reject)=>{
        if(ub<lb){
            reject("not valid limits");
            return;
        }
        let current = lb;
        let sum = lb;
        let handler = setInterval(()=>{
            console.log(`${taskName}>>${current}`);
            current++;
            sum+=current;
            if(current===ub){
                clearInterval(handler);
                resolve(sum); 
            }        
        },1000);
    });
};

let p1 = series(1,15,"task1");
let p2 = series(100,115,"task2");
let p3 = series(100,1,"task3");

console.log("task1 is initiated");
p1.then(
    data => console.log(`task1 resulted in a sum of ${data}`),
    err => console.log(`task1 >> ${err}`)
);

console.log("task2 is initiated");
p2.then(
    data=> console.log(`task2 resulted in a sum of ${data}`),
    err => console.log(`task2 >> ${err}`)
);

console.log("task3 is initiated");
p3.then(
    data=> console.log(`task3 resulted in a sum of ${data}`),
    err => console.log(`task3 >> ${err}`)
);