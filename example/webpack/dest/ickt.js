/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { 
	if (!self) { 
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); 
	} 
	return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 定义类
var Book = function () {
	_createClass(Book, [{
		key: 'color',

		// 属性定义在外部
		get: function get() {
			return 'red';
		}
		// 构造函数

	}]);

	function Book(title) {
		_classCallCheck(this, Book);

		// 属性定义在内部
		this.title = title;
	}
	// 方法


	_createClass(Book, [{
		key: 'getTitle',
		value: function getTitle() {
			return this.title;
		}
		// 静态属性和方法
		// 属性

	}], [{
		key: 'getWriter',

		// 方法
		value: function getWriter() {
			return this.writer;
		}
	}, {
		key: 'writer',
		get: function get() {
			return 'Mr Zhang';
		}
	}]);

	return Book;
}();
// 在类的外面定义静态属性和方法


Book.num = 100;
Book.getNum = function () {
	return this.num;
};

// 定义jsbook，继承book

var JsBook = function (_Book) {
	_inherits(JsBook, _Book);

	// 定义构造函数
	function JsBook(title, price) {
		_classCallCheck(this, JsBook);

		// 存储数据
		var _this = _possibleConstructorReturn(this, (JsBook.__proto__ || Object.getPrototypeOf(JsBook)).call(this, title));
		// 继承父类的构造函数


		_this.price = price;
		return _this;
	}
	// 定义方法


	_createClass(JsBook, [{
		key: 'getPrice',
		value: function getPrice() {
			return this.price;
		}
	}]);

	return JsBook;
}(Book);

// 实例化
// var book = new Book('javascript 设计模式');


var book = new JsBook('javascript 设计模式', 60);
// 使用子类静态属性方法
console.log(JsBook.writer);
console.log(JsBook.getWriter());
console.log(JsBook.num);
console.log(JsBook.getNum());
console.log(book);

/***/ })
/******/ ]);