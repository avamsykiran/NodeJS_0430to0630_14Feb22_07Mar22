//functions 

function f1(a1,a2){
    return a1+a2;
}

function f2(){
    //...
}

console.log(f1(10,12));
console.log(f2());

(function(){
    //this is a anonymous function 
    console.log("I don\'t have a name ");
})(); //IIFE

const v1 = function(){
    console.log("I am a fucntion but assigned to my handler variable");
}

v1();

const greet = function(userName,greetingProvider){
    console.log(`${greetingProvider()} ${userName}!`);
}

const inTelugu = function(){ return 'Namaskaram'; };
const inHindi = function(){ return 'Namaskar'; };
const inTamil = function(){ return 'Vanakkam'; };

greet('Vamsy',inTelugu);
greet('Vamsy',inHindi);
greet('Vamsy',inTamil);

//closure
const sequencer = function(initialValue){
    let seed = initialValue;
    return function(){
        return (++seed);
    };
};

const nextEmpId = sequencer(100);
const nextDeptId = sequencer(200);

console.log(nextEmpId());
console.log(nextDeptId());
console.log(nextEmpId());
console.log(nextDeptId());