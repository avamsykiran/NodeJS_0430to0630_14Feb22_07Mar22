console.log("Printing a message ONE");
let handler = setInterval(() => console.log("Printing a message TWO"),1500);
setTimeout(()=> clearInterval(handler),8000);
console.log("Printing a message THREE");