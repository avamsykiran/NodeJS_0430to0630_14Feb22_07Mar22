//arrow functions

const f1 = userName => {
    console.log(`Hello! ${userName}`);
};

const f2 = (userName,title) => {
    console.log(`Hello! ${title} ${userName}`);
};

const f3 = x => x*x;

const f4 = (x,y) => Math.pow(x,y);

f1('Vamsy');
f2('Vamsy','Dr.');
console.log(f3(12));
console.log(f4(12,3));

