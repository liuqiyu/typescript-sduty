/**
 * 数组的类型
 */

// 1、类型+方括号
const arr1: number[] = [1, 2, 3, 4]

// 2、数组泛型
const arr2: Array<string> = ['1', '2', '3', '4'];

// 3、接口
interface NumberArray {
  [index: number]: number;
}
let arr3: NumberArray = [1, 2, 3, 5]

// 4、类数组
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

// 5、any在数组中的应用
let list: any[] = [1, 2, 3, '5', {
  a: 123
}]