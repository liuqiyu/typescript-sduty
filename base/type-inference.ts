/**
 * 类型推论
 * 1、如果没有明确指定类型，那么TS会依照类型推论的规则推断出一个类型
 * 2、如果定义的时候没有明确赋值，那么会被推断为any类型
 */


// let myName1 = 'Bob';
// myName1 = 12;

let myName2;
myName2 = 123;
myName2 = 'Bob';

