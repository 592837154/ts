// 定义模块，封装数据
module Ickt {
	// 将数据定义在外面
	// 想访问必须暴露
	export var num:number = 100;
	// 定义方法
	export function add(num1:number, num2:number):number {
		return num1 + num2;
	}
	// 定义类
	export class Star {
		name:string = '尼古拉斯赵四'
	}
}




console.log(Ickt)
console.log(Ickt.add(10, 20))
// 实例化类
console.log(new Ickt.Star())