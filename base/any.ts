// 任意值 any 表示允许赋值未任意类型
let myName: any = 'Bob';
myName = 12;

let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);