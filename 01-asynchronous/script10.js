const printFactors = (n) => {
    return new Promise((resolve,reject)=>{
        let current = 2;
        let factors=[1];
        let handler = setInterval(()=>{
            if(current>n/2){
                clearInterval(handler);
                factors.push(n);
                console.log(`Factors of ${n} are ${factors}`);
                resolve(factors.length); 
                return;         
            }
            if(n%current==0){
                factors.push(current);
            } 
            current++;
        },1000);
    });
};

const checkForPrime = async n => {
    let factorsCount =await printFactors(n);
    console.log(`No of factors are: ${factorsCount}`);
    return (factorsCount===2);
};

for(let i=1;i<=20;i++){
    checkForPrime(i).then(
        isPrime => console.log(`${i} is ${isPrime?"Prime":"Composite"}`)
    );
}
