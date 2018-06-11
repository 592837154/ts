// 定义函数
// 如果一个参数，返回num1+10，如果两个参数，返回两个参数之和
function add(num1: number, num2?: number): number {
	if (typeof num2 === 'undefined') {
		return num1 + 10;
	} else {
		return num1 + num2;
	}
}

console.log(add(10))
console.log(add(10, 20))