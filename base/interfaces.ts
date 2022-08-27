/**
 * 对象的类型-接口
 * 1、使用接口来定义对象的类型
 */

interface Person {
  name: string;
  age: number;
}

const tom: Person = {
  name: 'Tom',
  age: 18
}


//  可选属性
interface Person1 {
  name: string;
  age: number;
  gender?: string;
}

let bom: Person1 = {
  name: 'Bom',
  age: 123,
}

// 任意属性：[propName: string] 表示属性为 string 类型，:any 表示属性的值为任意类型
interface Person2 {
  name: string;
  age: number;
  gender?: string;
  [propName: number]: any;
}

let per2: Person2 = {
  name: '123',
  age: 123,
  // aaa: 31
  123: 3213
}

console.log(per2)


// 只读属性
interface Person3 {
  name: string;
  age: number;
  readonly id: number;
}

const per3: Person3 = {
  name: '123',
  age: 123,
  id: 123
}

per3.name = '321';
per3.id = 123;