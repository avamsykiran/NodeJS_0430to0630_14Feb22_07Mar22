import { sayHello,sayBye } from './greet.js'
import { sayHello as sayHelloInHindi,sayBye as sayByeInHindi} from './greetInHindi.js'
import arth from './arth.js';
import isPrime,{getFactors} from './numService.js';

let userName = "Vamsy Kiran";

console.log(sayHello(userName));
console.log(sayBye(userName));

console.log(sayHelloInHindi(userName));
console.log(sayByeInHindi(userName));

console.log(arth.sum(20,7));
console.log(arth.dif(20,7));
console.log(arth.prd(20,7));
console.log(arth.qut(20,7));
console.log(arth.rem(20,7));

console.log(isPrime(478) +"\t" + getFactors(478));
console.log(isPrime(7) +"\t" + getFactors(7));