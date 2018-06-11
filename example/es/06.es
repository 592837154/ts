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
	




_get(Object.getPrototypeOf(JsBook.prototype), 'constructor', this)
.call(this, title);
// _x 子类的原型的原型对象， _x 构造函数的名称，_x3 子类实例化对象 
var _get = function get(_x, _x2, _x3) { 
	var _again = true; 
	_function: while (_again) { 
		var object = _x, 
		property = _x2, 
		receiver = _x3;
		_again = false; 
		if (object === null) 
			object = Function.prototype; 
		var desc = Object.getOwnPropertyDescriptor(object, property); 
		if (desc === undefined) { 
			var parent = Object.getPrototypeOf(object); 
			if (parent === null) { 
				return undefined; 
			} else { 
				_x = parent; 
				_x2 = property; 
				_x3 = receiver; 
				_again = true; 
				desc = parent = undefined; 
				continue _function; 
			} 
		} else if ('value' in desc) { 
			return desc.value; 
		} else { 
			var getter = desc.get; 
			if (getter === undefined) { 
				return undefined; 
			} 
			return getter.call(receiver); 
		} 
	} 
};


// _inherits(JsBook, _Book);
// // subClass子类 superClass父类
// function _inherits(subClass, superClass) { 
// 	if (typeof superClass !== 'function' && superClass !== null) { 
// 		throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); 
// 	} 
// 	subClass.prototype = Object.create(
// 		superClass && superClass.prototype, 
// 		// 修正构造函数
// 		{ 
// 			constructor: { 
// 				value: subClass, 
// 				enumerable: false, 
// 				writable: true, 
// 				configurable: true 
// 			} 
// 		}
// 	);
// 	// 静态继承 
// 	if (superClass) 
// 		// getPrototypeOf用来获取原型，setPrototypeOf用来修改原型
// 		Object.setPrototypeOf ? 
// 			Object.setPrototypeOf(subClass, superClass) : 
// 			subClass.__proto__ = superClass; 
// }




var JsBook = (function (_Book) {
	// 继承了父类的原型，和静态属性方法
	_inherits(JsBook, _Book);

	// 定义构造函数

	function JsBook(title, price) {
		_classCallCheck(this, JsBook);

		// 继承父类的构造函数
		_get(Object.getPrototypeOf(JsBook.prototype), 'constructor', this).call(this, title);
		// 存储数据
		this.price = price;
	}

	// 实例化
	// var book = new Book('javascript 设计模式');

	// 定义方法

	_createClass(JsBook, [{
		key: 'getPrice',
		value: function getPrice() {
			return this.price;
		}
	}]);

	return JsBook;
})(Book);












// var _createClass = (function () { 
// 	function defineProperties(target, props) { 
// 		for (var i = 0; i < props.length; i++) { 
// 			var descriptor = props[i]; 
// 			descriptor.enumerable = descriptor.enumerable || false; 
// 			descriptor.configurable = true; 
// 			if ('value' in descriptor) 
// 				descriptor.writable = true; 
// 			Object.defineProperty(target, descriptor.key, descriptor); 
// 		} 
// 	} 
// 	return function (Constructor, protoProps, staticProps) { 
// 		if (protoProps) 
// 			defineProperties(Constructor.prototype, protoProps); 
// 		if (staticProps) 
// 			defineProperties(Constructor, staticProps); 
// 		return Constructor; 
// 	}; 
// })();

// _createClass(Book, [{
// 	key: 'getTitle',
// 	value: function getTitle() {
// 		return this.title;
// 	}

// 	// 静态属性和方法
// 	// 属性
// }], [{
// 	key: 'getWriter',

// 	// 方法
// 	value: function getWriter() {
// 		return this.writer;
// 	}
// }, {
// 	key: 'writer',
// 	get: function get() {
// 		return 'Mr Zhang';
// 	}
// }]);

// _classCallCheck(this, Book);
// function _classCallCheck(instance, Constructor) { 
// 	if (!(instance instanceof Constructor)) { 
// 		throw new TypeError('Cannot call a class as a function'); 
// 	} 
// }

// var Book = (function () {
// 	_createClass(Book, [{
// 		key: 'color',

// 		// 属性定义在外部
// 		get: function get() {
// 			return 'red';
// 		}

// 		// 构造函数
// 	}]);

// 	function Book(title) {
// 		_classCallCheck(this, Book);

// 		// 属性定义在内部
// 		this.title = title;
// 	}

// 	// 在类的外面定义静态属性和方法

// 	// 方法

// 	_createClass(Book, [{
// 		key: 'getTitle',
// 		value: function getTitle() {
// 			return this.title;
// 		}

// 		// 静态属性和方法
// 		// 属性
// 	}], [{
// 		key: 'getWriter',

// 		// 方法
// 		value: function getWriter() {
// 			return this.writer;
// 		}
// 	}, {
// 		key: 'writer',
// 		get: function get() {
// 			return 'Mr Zhang';
// 		}
// 	}]);

// 	return Book;
// })();

// Book.num = 100;
// Book.getNum = function () {
// 	return this.num;
// };
