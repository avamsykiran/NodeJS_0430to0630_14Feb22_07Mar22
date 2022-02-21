/*Promise
        is a class in ES6.

        its cosntructor takes a job and executes it asynchronously.

        let p = new Promise(()=> {
            //job is coded here.....
        });

        the job will not execute unless p.then() is called.
        p.then(callback1,callback2) takes two callbacks....

        callback1 is refered as Promise::resolve , is used to indicate successful completion
        callback2 is refered as Promise::reject , is used to indicate errorSome completion.
*/

const series = (lb,ub,taskName) => {
    return new Promise((resolve,reject)=>{
        if(ub<lb){
            reject("not valid limits");
            return;
        }
        let current = lb;
        let handler = setInterval(()=>{
            console.log(`${taskName}>>${current}`);
            current++;
            if(current===ub){
                clearInterval(handler);
                resolve(); //indicating that the job is done
            }        
        },1000);
    });
};

let p1 = series(1,15,"task1");
let p2 = series(100,115,"task2");
let p3 = series(100,1,"task3");

console.log("task1 is initiated");
p1.then(
    ()=> console.log("task1 is accomplished"),
    err => console.log(`task1 >> ${err}`)
);

console.log("task2 is initiated");
p2.then(
    ()=> console.log("task2 is accomplished"),
    err => console.log(`task2 >> ${err}`)
);

console.log("task3 is initiated");
p3.then(
    ()=> console.log("task3 is accomplished"),
    err => console.log(`task3 >> ${err}`)
);