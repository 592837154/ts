// // 定义对象接口
// interface Star {
// 	name: string,
// 	// 方法定义参数和返回值的结构
// 	getName():string
// }
// // 定义对象
// var zs:Star = {
// 	name: '尼古拉斯赵四',
// 	getName() {
// 		return this.name;
// 	}
// }
// console.log(zs)

// 定义函数接口
// interface add {
// 	// 一个参数，返回num1+10，两个参数返回两个参数之和
// 	(num1:number, num2?:number):number
// }

// // 定义add函数
// var addFn1:add = function(num1:number, num2:number):number {
// 	return num1 + num2;
// }
// var addFn2:add = function(num1:number):number {
// 	return 10 + num1;
// }
// console.log(addFn1(30, 40))
// console.log(addFn2(50))

// 定义类接口
interface Star {
	// 名称
	name:string;
	// 方法
	getName():string;
}

// 定义明星类
class MovieStar implements Star {
	// 定义属性
	name: string;
	constructor(name: string) {
		// 存储数据
		this.name = name;
	}
	// 定义方法
	getName():string {
		return this.name;
	}
}
// 实例化类
// var zs:MovieStar = new MovieStar('尼古拉斯赵四');
var zs:Star = new MovieStar('尼古拉斯赵四');
console.log(zs)