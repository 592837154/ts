// 定义数组
// var arr: string[] = [1, 2, 3]

// console.log(arr)

// 定义枚举类型
enum Color {
	red,
	// 执行索引值
	green = 10,
	blue
}
console.log(Color)
// 像数组一样使用
console.log(Color[0])
console.log(Color[1])
console.log(Color[2])
console.log(Color[10])
console.log(Color[11])
// 像对象一样使用
console.log(Color.red)
console.log(Color.green)
console.log(Color.blue)
