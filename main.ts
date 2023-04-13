import {Staff} from "./staff";

let a = new Staff('John')
a.insertFirst(1,1000);
a.insertFirst(2,2000);
a.insertLast(3,4000);
a.insertFirst(4,3000);

console.table(a.showList())
console.log(a.sumMoney())
console.log(a.maxMoney())