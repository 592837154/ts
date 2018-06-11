// 定义类
class Book {
	// 属性定义在外部
	get color() {
		return 'red';
	}
	// 构造函数
	constructor(title) {
		// 属性定义在内部
		this.title = title;
	}
	// 方法
	getTitle() {
		return this.title;
	}
	// 静态属性和方法
	// 属性
	static get writer() {
		return 'Mr Zhang'
	}
	// 方法
	static getWriter() {
		return this.writer
	}
}
// 在类的外面定义静态属性和方法
Book.num = 100;
Book.getNum = function() {
	return this.num;
}


// 定义jsbook，继承book
class JsBook extends Book {
	// 定义构造函数
	constructor(title, price) {
		// 继承父类的构造函数
		super(title);
		// 存储数据
		this.price = price;
	}
	// 定义方法
	getPrice() {
		return this.price;
	}
}

// 实例化
// var book = new Book('javascript 设计模式');
var book = new JsBook('javascript 设计模式', 60)
// 使用子类静态属性方法
console.log(JsBook.writer)
console.log(JsBook.getWriter())
console.log(JsBook.num)
console.log(JsBook.getNum())
console.log(book)