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

const checkForPrime = n => {
    let isPrime=null;
    printFactors(n).then(
        factorsCount => {
            console.log(`No of factors are: ${factorsCount}`);
            isPrime = (factorsCount===2);
        }
    );
    return isPrime;
}

for(let i=1;i<=20;i++){
    console.log(`${i} is ${checkForPrime(i)?"Prime":"Composite"}`);
}
