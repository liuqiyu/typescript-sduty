/**
 * 对象的类型-接口
 * 1、使用接口来定义对象的类型
 */
var tom = {
    name: 'Tom',
    age: 18
};
var bom = {
    name: 'Bom',
    age: 123
};
var per2 = {
    name: '123',
    age: 123,
    // aaa: 31
    123: 3213
};
console.log(per2);
var per3 = {
    name: '123',
    age: 123,
    id: 123
};
per3.name = '321';
per3.id = 123;
