console.log("Printing a message ONE");

let counter=0;
let handler = setInterval(() => {
    console.log("Printing a message TWO");
    counter++;
    if(counter===10){
        clearInterval(handler);
    }
},1500);

console.log("Printing a message THREE");