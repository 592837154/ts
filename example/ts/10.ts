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

// 定义子类
class JsBook extends Book {
	// 重写父类属性
	writer:string =  'zhang';
	price: number;
	color: string;
	// 定义构造函数
	constructor(price: number, color: string) {
		// 继承父类的构造函数
		super(price)
		// 存储数据
		this.color = color;
	}
	// 重写父类方法
	getPrice():number {
		return this.price;
	}
}

// 实例化
var jb: JsBook = new JsBook(200, 'red')
console.log(jb)
// 子类静态属性和静态方法
console.log(JsBook.getTitle())
console.log(JsBook.title)

 __extends(JsBook, _super);
 // d是子类，b是父类
var __extends = (this && this.__extends) || function (d, b) {
	// 静态继承
    for (var p in b) 
    	if (b.hasOwnProperty(p)) 
    		d[p] = b[p];
    // 寄生类
    function __() { 
    	this.constructor = d; 
    }
    d.prototype = 
    	b === null ? 
    		Object.create(b) : 
    		(__.prototype = b.prototype, new __());
};