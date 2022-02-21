const series = (lb,ub,taskName) => {
    let current = lb;
    let handler = setInterval(()=>{
        console.log(`${taskName}>>${current}`);
        current++;
        if(current===ub){
            clearInterval(handler);
        }        
    },1000);
};

console.log("task1 is initiated");
series(1,15,"task1");
console.log("task1 is accomplished");

console.log("task2 is initiated");
series(100,115,"task2");
console.log("task2 is accomplished");

