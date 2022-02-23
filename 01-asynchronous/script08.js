const printSeries = async (lb,ub,taskName) => {
    let sum =0;
    for(let i=lb;i<=ub;i++){
        console.log(`${taskName}>>${i}`);
        sum+=i;
    }
    return sum;
}; //all sync functions will return promises.


console.log(printSeries(10,100,"task1"));
console.log(printSeries(200,300,"task2"));
