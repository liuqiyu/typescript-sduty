/**
 * 函数的类型
 */

// 1、函数声明
function sum (x: number, y: number) {
  return x + y;
}
sum(1,2);

// 2、函数表达式
let sum1 = function(x:number, y: number) {
  return x + y;
}

// 3、接口定义