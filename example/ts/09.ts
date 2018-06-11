// 定义类
class Book {
	// 声明属性类型
	// private writer: string = 'Mr zhang';
	// public title: string = 'javascript 设计模式';
	writer: string = 'Mr zhang';
	// 静态属性
	static title: string = 'javascript 设计模式';
	// 只声明而没有被复制的数据，将被删除
	color: string;
	price: number;
	// 定义构造函数
	constructor(price: number) {
		// 构造函数内赋值
		this.price = price;
	}
	// 定义方法
	getPrice():number {
		return this.price
	}
	// 静态方法 获取名称
	static getTitle():string {
		return this.title;
	}
}

// 实例化
var jsBook: Book = new Book(100);
console.log(jsBook)
console.log(jsBook.getPrice())
// 静态的属性方法不能通过实例化对象方法，只能通过类方法
console.log(Book.title)
console.log(Book.getTitle())
// console.log(jsBook.getTitle())

